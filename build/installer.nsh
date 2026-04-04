; Custom NSIS include: run previous version's uninstaller before installing (upgrade path).
; This ensures an old version is removed before the new one is installed.

!macro preInit
  ; Run existing uninstaller silently if a previous installation is found.
  ; Check HKLM/HKCU and 64/32-bit registry views. Product identified by DisplayName "Transrewrt".
  SetRegView 64
  StrCpy $R0 0
_preInit_hklm64_loop:
  EnumRegKey $R1 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" $R0
  StrCmp $R1 "" _preInit_hkcu64
  ReadRegStr $R2 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "DisplayName"
  StrCmp $R2 "Transrewrt" 0 _preInit_hklm64_next
  ReadRegStr $R3 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "UninstallString"
  StrCmp $R3 "" _preInit_hklm64_next
  ExecWait '"$R3" /S'
  Goto _preInit_done
_preInit_hklm64_next:
  IntOp $R0 $R0 + 1
  Goto _preInit_hklm64_loop

_preInit_hkcu64:
  StrCpy $R0 0
_preInit_hkcu64_loop:
  EnumRegKey $R1 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" $R0
  StrCmp $R1 "" _preInit_hklm32
  ReadRegStr $R2 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "DisplayName"
  StrCmp $R2 "Transrewrt" 0 _preInit_hkcu64_next
  ReadRegStr $R3 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "UninstallString"
  StrCmp $R3 "" _preInit_hkcu64_next
  ExecWait '"$R3" /S'
  Goto _preInit_done
_preInit_hkcu64_next:
  IntOp $R0 $R0 + 1
  Goto _preInit_hkcu64_loop

_preInit_hklm32:
  SetRegView 32
  StrCpy $R0 0
_preInit_hklm32_loop:
  EnumRegKey $R1 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" $R0
  StrCmp $R1 "" _preInit_hkcu32
  ReadRegStr $R2 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "DisplayName"
  StrCmp $R2 "Transrewrt" 0 _preInit_hklm32_next
  ReadRegStr $R3 HKLM "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "UninstallString"
  StrCmp $R3 "" _preInit_hklm32_next
  ExecWait '"$R3" /S'
  Goto _preInit_done
_preInit_hklm32_next:
  IntOp $R0 $R0 + 1
  Goto _preInit_hklm32_loop

_preInit_hkcu32:
  StrCpy $R0 0
_preInit_hkcu32_loop:
  EnumRegKey $R1 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall" $R0
  StrCmp $R1 "" _preInit_done
  ReadRegStr $R2 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "DisplayName"
  StrCmp $R2 "Transrewrt" 0 _preInit_hkcu32_next
  ReadRegStr $R3 HKCU "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\$R1" "UninstallString"
  StrCmp $R3 "" _preInit_hkcu32_next
  ExecWait '"$R3" /S'
  Goto _preInit_done
_preInit_hkcu32_next:
  IntOp $R0 $R0 + 1
  Goto _preInit_hkcu32_loop

_preInit_done:
  SetRegView 64
!macroend

; Install/uninstall "app is running" — electron-builder stock CHECK_APP_RUNNING treats any process
; whose Win32 path starts with $INSTDIR as the app (FIND_PROCESS/KILL_PROCESS in
; allowOnlyOneInstallerInstance.nsh). That can false-positive on other exes under the install tree
; or fail to clear while Transrewrt.exe is already gone. We use customCheckAppRunning to match only
; processes whose ExecutablePath equals $INSTDIR\${APP_EXECUTABLE_FILENAME} (case-insensitive).

; Optional desktop shortcut: electron-builder only supports fixed on/off via createDesktopShortcut.
; We disable the built-in shortcut and add a wizard page (assisted installer) plus customInstall.
; This file is included before MUI2.nsh — use IfSilent / StrCmp only (no StdUtils: unavailable during BUILD_UNINSTALLER compile pass).
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
!include "getProcessInfo.nsh"

!macro TR_QueryMainExeRunning _ret
  nsExec::Exec `"$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "if ((Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$INSTDIR' '${APP_EXECUTABLE_FILENAME}')) }).Count -gt 0) { exit 0 } else { exit 1 }"`
  Pop ${_ret}
!macroend

!macro TR_StopMainExeGraceful
  nsExec::Exec `"$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$INSTDIR' '${APP_EXECUTABLE_FILENAME}')) } | ForEach-Object { Stop-Process -Id $$_.ProcessId -ErrorAction SilentlyContinue }"`
  Pop $0
!macroend

!macro TR_StopMainExeForce
  nsExec::Exec `"$PowerShellPath" -NoProfile -ExecutionPolicy Bypass -Command "Get-CimInstance -ClassName Win32_Process | Where-Object { $$null -ne $$_.ExecutablePath -and ($$_.ExecutablePath -ieq (Join-Path '$INSTDIR' '${APP_EXECUTABLE_FILENAME}')) } | ForEach-Object { Stop-Process -Id $$_.ProcessId -Force -ErrorAction SilentlyContinue }"`
  Pop $0
!macroend

; Logic in a Function so CHECK_APP_RUNNING can be inserted twice (installSection.nsh) without duplicate labels.
Function TR_CheckAppRunningImpl
  ${GetProcessInfo} 0 $pid $1 $2 $3 $4
  ${if} $3 == "${APP_EXECUTABLE_FILENAME}"
    Goto tr_car_end
  ${endIf}
  !insertmacro IS_POWERSHELL_AVAILABLE
  ${if} $IsPowerShellAvailable != 0
    Goto tr_car_end
  ${endIf}
  StrCpy $PowerShellPath "$SYSDIR\WindowsPowerShell\v1.0\powershell.exe"
  ${if} ${isUpdated}
    Sleep 300
  ${endIf}
  !insertmacro TR_QueryMainExeRunning $R0
  ${if} $R0 != 0
    Goto tr_car_end
  ${endIf}
  ${if} ${isUpdated}
    Sleep 1000
    Goto tr_car_dokill
  ${endIf}
  MessageBox MB_OKCANCEL|MB_ICONEXCLAMATION "$(appRunning)" /SD IDOK IDOK tr_car_dokill
  Quit

  tr_car_dokill:
  DetailPrint "$(appClosing)"
  !insertmacro TR_StopMainExeGraceful
  Sleep 300

  StrCpy $R1 0
  tr_car_loop:
    IntOp $R1 $R1 + 1

    !insertmacro TR_QueryMainExeRunning $R0
    ${if} $R0 == 0
      Sleep 1000
      !insertmacro TR_StopMainExeForce
      !insertmacro TR_QueryMainExeRunning $R0
      ${if} $R0 == 0
        DetailPrint `Waiting for "${PRODUCT_NAME}" to close.`
        Sleep 2000
      ${else}
        Goto tr_car_not_running
      ${endIf}
    ${else}
      Goto tr_car_not_running
    ${endIf}

    ${if} $R1 > 1
      MessageBox MB_RETRYCANCEL|MB_ICONEXCLAMATION "$(appCannotBeClosed)" /SD IDCANCEL IDRETRY tr_car_loop
      Quit
    ${else}
      Goto tr_car_loop
    ${endIf}
  tr_car_not_running:
  tr_car_end:
FunctionEnd

!macro customCheckAppRunning
  Call TR_CheckAppRunningImpl
!macroend
