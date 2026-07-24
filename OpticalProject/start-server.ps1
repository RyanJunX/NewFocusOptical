$dir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $dir
$port = $null
foreach ($p in 4173..4185) {
  $client = New-Object System.Net.Sockets.TcpClient
  try {
    $client.Connect('127.0.0.1', $p)
    $client.Close()
  } catch {
    $port = $p
    break
  }
}
if (-not $port) { throw 'No free port found from 4173 to 4185' }
$url = "http://127.0.0.1:$port/"
Set-Content -LiteralPath (Join-Path $dir 'server-url.txt') -Value $url -Encoding UTF8
Write-Output "Serving New Focus Optical Centre preview at $url"
python -m http.server $port --bind 127.0.0.1
