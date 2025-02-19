// Express 모듈을 가져와서 변수 express에 저장
const express = require("express");

// express 애플리케이션 생성
const app = express();

// 서버가 실행될 포트 번호 설정
const port = 3000;

/**
 * GET 요청을 처리하는 라우트 설정
 * - 클라이언트가 "http://localhost:3000/"에 접속하면 실행됨
 */
app.get("/", (req, res) => { //router.get이 아닌 app.get인 이유 : 처음엔 메인 포인트 하나를 잡아줘야함!
    // req: 클라이언트가 보낸 요청 정보 담음
    // res: 서버가 클라이언트에게 응답을 보낼 때 사용

    // HTTP 응답 상태 코드 200(성공) 설정
    res.status(200);
    
    // 클라이언트에게 "Hello Node!" 메시지 응답
    res.send("Hello Node!");
});

app.use("/",require("./routes/contactRoutes"));
//만약 contactRoutes.js를 재사용하는 경우, app.use("/contacts",...); 처럼 하위 폴더를 지정해주면 더 좋음!

/**
 * 서버 실행
 * - 지정한 포트(3000번)에서 서버가 시작됨
 * - 서버가 실행되면 콘솔에 메시지 출력
 */
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
