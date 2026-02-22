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
