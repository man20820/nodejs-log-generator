
# NodeJS Log Generator

Simple nodejs code for debugging logging stack.

this app uses node-cron. 'frequency' will follow the guide '*/second' from node-cron. https://www.npmjs.com/package/node-cron

## Install
```
git clone git@github.com:man20820/nodejs-log-generator.git
npm install
node index.js
```

## Usage
Log (stdout)
```
Method: GET
Url: http://<ip/host>:<port>/log/<message>/<frequency>
```

Error (stderr)
```
Method: GET
Url: http://<ip/host>:<port>/error/<message>/<frequency>
```

### Example

Request
```
curl http://localhost:3000/log/test/3
```

Response
```
StatusCode        : 200
StatusDescription : OK
Content           : membuat log test setiap 3 detik sekali
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 38
                    Content-Type: text/html; charset=utf-8
                    Date: Sun, 08 Jan 2023 21:04:56 GMT
                    ETag: W...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Connection, keep-alive],
                    [Keep-Alive, timeout=5], [Content-Length, 38]...}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 38
```

Console log
```
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:05:51 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:05:54 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:05:57 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:00 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:03 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:06 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:09 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:12 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:15 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:18 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:21 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:24 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:27 GMT+0700 (Western Indonesia Time)
setiap 3 detik, ini adalah pesan test pada Mon Jan 09 2023 04:06:30 GMT+0700 (Western Indonesia Time)
```