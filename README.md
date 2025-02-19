# doit-node.js
1과 문법 정리

둘째마당
-nodemon : 코드 수정해도 서버 안 껐다 켜도 되게 해주는 패키지
-package-lock.json: 패키지들끼리의 의존도 보여줌
-package.json의 main이 애플리케이션 시작파일의 이름
-package.json 의 test 부분에 "start": "nodemon app.js" 등을 붙여 스크립트로도 서버 실행 가능
-라우팅 : 각 요청 url별로 다른 내용 표시해 주는것
-const router = express.Router(); 라우터 : 
router
  .route("/contacts")
  .get((req, res) => {
    // 모든 연락처 가져오기
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    // 새 연락처 추가하기
    res.status(201).send("Create Contacts");
  });
이런 식을 여러 app.get ,post 하는걸 묶어줌!
-router.get이 아닌 app.get인 이유 : 처음엔 메인 포인트 하나를 잡아줘야함!
-module.exports = router; : 현재 파일a에서 router 객체를 외부에서 사용할 수 있도록 내보내는 역할
-Express 라우트 코드 외부 파일로 분리하는 과정
1️) 기존 app.js에서 라우트 관련 코드 제거
2️) routes 폴더 생성 후 contactRoutes.js 파일 만들기
3️) contactRoutes.js에서 express.Router() 사용하여 라우트 정의
4️) module.exports = router;로 내보내기
5️) app.js에서 require()로 불러오고 app.use("/api", contactRoutes); 적용
6️) GET /api/contacts, POST /api/contacts, GET /api/contacts/:id 등 API 동작 확인
