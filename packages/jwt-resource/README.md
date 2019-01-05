```Powershell

$token = ""

$headers = @{
    "Accept" = "application/json"
    "Content-Type" = "application/json"
    "Authorization" = "Bearer $token"
}

# 200 OK - with valid token
Invoke-WebRequest `
    -Uri "http://localhost:8080/secret" `
    -Method GET `
    -Headers $headers

# 401 Unauthorized
Invoke-WebRequest `
    -Uri "http://localhost:8080/secret" `
    -Method GET

```
