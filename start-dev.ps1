Set-Location "C:\Users\Admin\Downloads\catalago"
$log = Join-Path (Get-Location) "vite.log"
$err = Join-Path (Get-Location) "vite-err.log"
$pidf = Join-Path (Get-Location) "vite.pid"
$proc = Start-Process -FilePath cmd -ArgumentList "/c npx vite --port=3001 --host=0.0.0.0" -RedirectStandardOutput $log -RedirectStandardError $err -WindowStyle Hidden -PassThru
"started dev pid " + $proc.Id
$proc.Id | Out-File -FilePath $pidf -Encoding ascii

