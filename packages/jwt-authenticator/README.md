```Powershell

$headers = @{
    "Accept" = "application/json"
    "Content-Type" = "application/json"
}

$body_valid = @{
    "username" = "guest"
    "password" = "guest"
} | ConvertTo-Json

$body_invalid = @{
    "username" = "guest"
    "password" = ""
} | ConvertTo-Json

# 200 OK
Invoke-WebRequest `
    -Uri "http://localhost:8080/sign-in" `
    -Method POST `
    -Body $body_valid `
    -Headers $headers

# 401 Unauthorized
Invoke-WebRequest `
    -Uri "http://localhost:8080/sign-in" `
    -Method POST `
    -Body $body_invalid `
    -Headers $headers

```
