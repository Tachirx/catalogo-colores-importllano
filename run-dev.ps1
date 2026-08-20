Set-Location "C:\Users\Admin\Downloads\catalago"
$env:DISABLE_HMR = 'true'
$log = Join-Path (Get-Location) "vite.log"
$err = Join-Path (Get-Location) "vite-err.log"
$pidf = Join-Path (Get-Location) "vite.pid"
if (Test-Path $pidf) {
  $old = Get-Content $pidf -Raw
  if ($old) { Stop-Process -Id ([int]$old.Trim()) -ErrorAction SilentlyContinue }
}
Start-Sleep -Seconds 1
$proc = Start-Process -FilePath cmd -ArgumentList "/c npx vite --port=3001 --host=0.0.0.0" -RedirectStandardOutput $log -RedirectStandardError $err -WindowStyle Hidden -PassThru
"started dev pid " + $proc.Id + " (DISABLE_HMR=true)"
$proc.Id | Out-File -FilePath $pidf -Encoding ascii
