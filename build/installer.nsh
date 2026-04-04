; Custom NSIS include — in-place upgrade: NSIS/electron-builder overwrites files under $INSTDIR;
; we do not run the previous version's uninstaller first.

; Install/uninstall "app is running" — electron-builder stock CHECK_APP_RUNNING treats any process
; whose Win32 path starts with $INSTDIR as the app (FIND_PROCESS/KILL_PROCESS in
; allowOnlyOneInstallerInstance.nsh). That can false-positive on other exes under the install tree
; or fail to clear while Transrewrt.exe is already gone. We use customCheckAppRunning to match only
; processes whose ExecutablePath equals $INSTDIR\${APP_EXECUTABLE_FILENAME} (case-insensitive).

; Optional desktop shortcut: electron-builder only supports fixed on/off via createDesktopShortcut.
; We disable the built-in shortcut and add a wizard page (assisted installer) plus customInstall.
; This file is included in electron-builder sharedHeader before MUI2/LogicLib — use StrCmp / IntCmp only (no ${if} / ${isUpdated}; no StdUtils::TestParameter — uninstaller makensis pass has no StdUtils plugin).
; Omit this block when BUILD_UNINSTALLER is defined: uninstaller script does not reference these pages (NSIS warning 6010 → error with -WX).

!ifndef BUILD_UNINSTALLER
!include "nsDialogs.nsh"

Var TR_DesktopShortcut
Var TR_DesktopCheckbox

Function TR_DesktopShortcutPagePre
  StrCpy $TR_DesktopShortcut "1"
  IfSilent tr_desktop_skip
  nsDialogs::Create 1018
  Pop $0
  ${NSD_CreateLabel} 0 0 100% 16u "Desktop shortcut"
  Pop $1
  ${NSD_CreateLabel} 0 18u 100% 48u "You can add Transrewrt to your desktop for quick access. You can always open the app from the Start menu."
  Pop $1
  ${NSD_CreateCheckbox} 0 72u 100% 12u "Create a desktop shortcut"
  Pop $TR_DesktopCheckbox
  ${NSD_Check} $TR_DesktopCheckbox
  nsDialogs::Show
  Return
tr_desktop_skip:
  Abort
FunctionEnd

Function TR_DesktopShortcutPageLeave
  ${NSD_GetState} $TR_DesktopCheckbox $0
  IntCmp $0 1 tr_desktop_leave_on tr_desktop_leave_off tr_desktop_leave_off
tr_desktop_leave_on:
  StrCpy $TR_DesktopShortcut "1"
  Goto tr_desktop_leave_done
tr_desktop_leave_off:
  StrCpy $TR_DesktopShortcut "0"
tr_desktop_leave_done:
FunctionEnd

!macro customPageAfterChangeDir
  Page custom TR_DesktopShortcutPagePre TR_DesktopShortcutPageLeave
!macroend

!macro customInstall
  StrCmp "$TR_DesktopShortcut" "1" 0 tr_desktop_no_sc
  CreateShortCut "$newDesktopLink" "$appExe" "" "$appExe" 0 "" "" "${APP_DESCRIPTION}"
  ClearErrors
  WinShell::SetLnkAUMI "$newDesktopLink" "${APP_ID}"
  System::Call 'Shell32::SHChangeNotify(i 0x8000000, i 0, i 0, i 0)'
tr_desktop_no_sc:
!macroend
!endif

; --- Stricter running-app check (installer + uninstaller; must be outside BUILD_UNINSTALLER guard) ---
Var pid
Var /GLOBAL PsChk
Var TR_AppExeCmp
!include "getProcessInfo.nsh"

; In !macro bodies use $$ for NSIS vars ($$Var → $Var after macro expand) or NSIS misparses names (warning 6000 / -WX).
!macro TR_QueryMainExeRunning _ret
  nsExec::Exec `"$$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "if ((Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$$INSTDIR' '$$TR_AppExeCmp')) }).Count -gt 0) { exit 0 } else { exit 1 }"`
  Pop ${_ret}
!macroend

!macro TR_StopMainExeGraceful
  nsExec::Exec `"$$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$$INSTDIR' '$$TR_AppExeCmp')) } | ForEach-Object { Stop-Process -Id $$_.ProcessId -ErrorAction SilentlyContinue }"`
  Pop $R7
!macroend

!macro TR_StopMainExeForce
  nsExec::Exec `"$$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$$INSTDIR' '$$TR_AppExeCmp')) } | ForEach-Object { Stop-Process -Id $$_.ProcessId -Force -ErrorAction SilentlyContinue }"`
  Pop $R7
!macroend

; PowerShell probe without LogicLib / allowOnlyOneInstallerInstance ${if} (sharedHeader is parsed before MUI).
; Use $R6 for nsExec exit codes — $0–$9 are reserved inside NSIS user macros (Pop $0 is invalid).
!macro TR_EnsurePowerShellChecked pfx
  nsExec::Exec `"$$PowerShellPath" -C "if (Get-Command Get-CimInstance -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"`
  Pop $R6
  StrCmp $R6 "0" +1 ${pfx}_tr_eps_bad1
  nsExec::Exec `"$$PowerShellPath" -C "if ((Get-ExecutionPolicy -Scope Process) -eq 'Restricted') { exit 1 } else { exit 0 }"`
  Pop $R6
  StrCmp $R6 "0" +1 ${pfx}_tr_eps_bad2
  StrCpy $PsChk "0"
  Goto ${pfx}_tr_eps_done
${pfx}_tr_eps_bad2:
${pfx}_tr_eps_bad1:
  StrCpy $PsChk "1"
${pfx}_tr_eps_done:
!macroend

; electron-builder passes an "updated" flag (see nsisScriptGenerator flags); stock code uses StdUtils::TestParameter,
; which is unavailable when BUILD_UNINSTALLER is compiled — scan $CMDLINE instead.
; Uninstall code must Call un.* helpers (NSIS: non-un Call from un.* is invalid).
!ifdef BUILD_UNINSTALLER
Function un.TR_TR_HasUpdatedCmdline
  StrCpy $R8 "false"
  StrLen $R9 "updated"
  StrLen $R6 "$CMDLINE"
  StrCmp $R6 "0" tr_u_huc_done
  StrCpy $R7 -1
tr_u_huc_loop:
  IntOp $R7 $R7 + 1
  StrCpy $R5 "$CMDLINE" $R9 $R7
  StrCmp $R5 "updated" tr_u_huc_yes
  StrCmp $R7 $R6 tr_u_huc_done
  Goto tr_u_huc_loop
tr_u_huc_yes:
  StrCpy $R8 "true"
tr_u_huc_done:
FunctionEnd
!else
Function TR_TR_HasUpdatedCmdline
  StrCpy $R8 "false"
  StrLen $R9 "updated"
  StrLen $R6 "$CMDLINE"
  StrCmp $R6 "0" tr_i_huc_done
  StrCpy $R7 -1
tr_i_huc_loop:
  IntOp $R7 $R7 + 1
  StrCpy $R5 "$CMDLINE" $R9 $R7
  StrCmp $R5 "updated" tr_i_huc_yes
  StrCmp $R7 $R6 tr_i_huc_done
  Goto tr_i_huc_loop
tr_i_huc_yes:
  StrCpy $R8 "true"
tr_i_huc_done:
FunctionEnd
!endif

!macro TR_CallHasUpdatedCmdline
!ifdef BUILD_UNINSTALLER
  Call un.TR_TR_HasUpdatedCmdline
!else
  Call TR_TR_HasUpdatedCmdline
!endif
!macroend

; Label prefix avoids duplicate symbols when this macro is expanded for installer vs uninstaller functions.
; Do not use ${APP_EXECUTABLE_FILENAME} inside !macro (NSIS treats {…} as macro syntax → warning 6000 / -WX).
!macro TR_AppRunningCore pfx
  ${GetProcessInfo} 0 $pid $1 $2 $3 $4
  StrCmp $3 $TR_AppExeCmp ${pfx}_end +1
  !insertmacro TR_EnsurePowerShellChecked ${pfx}
  StrCmp $PsChk "0" +1 ${pfx}_end
  !insertmacro TR_CallHasUpdatedCmdline
  StrCmp "$R8" "true" 0 ${pfx}_after_sleep0
  Sleep 300
${pfx}_after_sleep0:
  !insertmacro TR_QueryMainExeRunning $R0
  StrCmp $R0 "0" +1 ${pfx}_end
  !insertmacro TR_CallHasUpdatedCmdline
  StrCmp "$R8" "true" 0 ${pfx}_ask_user
  Sleep 1000
  Goto ${pfx}_dokill
${pfx}_ask_user:
  MessageBox MB_OKCANCEL|MB_ICONEXCLAMATION "$(appRunning)" /SD IDOK IDOK ${pfx}_dokill
  Quit

${pfx}_dokill:
  DetailPrint "$(appClosing)"
  !insertmacro TR_StopMainExeGraceful
  Sleep 300

  StrCpy $R1 "0"
${pfx}_loop:
  IntOp $R1 $R1 + 1
  !insertmacro TR_QueryMainExeRunning $R0
  StrCmp $R0 "0" +1 ${pfx}_not_running
  Sleep 1000
  !insertmacro TR_StopMainExeForce
  !insertmacro TR_QueryMainExeRunning $R0
  StrCmp $R0 "0" ${pfx}_l_still ${pfx}_not_running

${pfx}_l_still:
  DetailPrint "Waiting for the application to close."
  Sleep 2000
  IntCmp $R1 1 ${pfx}_loop ${pfx}_loop ${pfx}_retry_msg

${pfx}_retry_msg:
  MessageBox MB_RETRYCANCEL|MB_ICONEXCLAMATION "$(appCannotBeClosed)" /SD IDCANCEL IDRETRY ${pfx}_loop
  Quit

${pfx}_not_running:
${pfx}_end:
!macroend

; getProcessInfo.nsh uses Call un._GetProcessInfo when BUILD_UNINSTALLER is defined — only valid inside uninstall functions.
!ifdef BUILD_UNINSTALLER
Function un.TR_CheckAppRunningImpl
  StrCpy $TR_AppExeCmp "${PRODUCT_FILENAME}.exe"
  ; $PowerShellPath is set by CHECK_APP_RUNNING before this Call (declared there too — do not StrCpy here; early parse fails).
  !insertmacro TR_AppRunningCore tr_u
FunctionEnd

!macro customCheckAppRunning
  Call un.TR_CheckAppRunningImpl
!macroend
!else
Function TR_CheckAppRunningImpl
  StrCpy $TR_AppExeCmp "${PRODUCT_FILENAME}.exe"
  !insertmacro TR_AppRunningCore tr_i
FunctionEnd

!macro customCheckAppRunning
  Call TR_CheckAppRunningImpl
!macroend
!endif
