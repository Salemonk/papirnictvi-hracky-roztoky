$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:5173/")
$listener.Start()
Write-Host "Serving $root on http://localhost:5173/"

$mime = @{
  ".html"="text/html"; ".css"="text/css"; ".js"="application/javascript";
  ".svg"="image/svg+xml"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"; ".png"="image/png";
  ".json"="application/json"; ".woff2"="font/woff2"; ".xml"="application/xml"; ".txt"="text/plain"
}

while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
  } catch {
    continue
  }
  $req = $context.Request
  $res = $context.Response
  try {
    $localPath = [System.Uri]::UnescapeDataString($req.Url.LocalPath)
    if ($localPath -eq "/") { $localPath = "/index.html" }
    $filePath = Join-Path $root ($localPath.TrimStart('/') -replace '/', '\')
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath)
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = $contentType
      $res.SendChunked = $true
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $res.SendChunked = $true
      $notFound = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $res.OutputStream.Write($notFound, 0, $notFound.Length)
    }
  } catch {
    # client likely disconnected mid-write; ignore and keep serving
  } finally {
    try { $res.OutputStream.Close() } catch {}
  }
}
