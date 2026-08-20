Set-Location "C:\Users\Admin\Downloads\catalago"
$log = Join-Path (Get-Location) "preview.log"
$err = Join-Path (Get-Location) "preview-err.log"
$pidf = Join-Path (Get-Location) "preview.pid"
if (Test-Path $pidf) {
  $old = Get-Content $pidf -Raw
  if ($old) { Stop-Process -Id ([int]$old.Trim()) -ErrorAction SilentlyContinue }
}
Start-Sleep -Seconds 1
$proc = Start-Process -FilePath cmd -ArgumentList "/c npx vite preview --port=417 --host=0.0.0.0" -RedirectStandardOutput $log -RedirectStandardError $err -WindowStyle Hidden -PassThru
"started preview pid " + $proc.Id
$proc.Id | Out-File -FilePath $pidf -Encoding ascii
