// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)
const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req); //req는 클라이언트가 서버에게 보낸 요청 정보가 담김 , res는 서버가 클라이언트에게 보낸 응답정보가 담김
});

server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행중");
})