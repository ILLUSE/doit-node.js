// HTTP 서버를 만들고 8080 포트에서 실행시키세요.
// 서버에 접속하면 터미널에는 ‘8080 포트에서 서버 실행 중’,
// 웹 브라우저에는 ‘Hello, World!’를 출력하게 코드를 만들어보세요.
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello, World!");
  res.end();
});

server.listen(8080, () => {
  console.log("8080번 포트에서 서버 실행 중");
});