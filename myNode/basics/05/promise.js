// Node.js에서 프로미스로 비동기 처리하기  (결과 비교 파일 : 05\results\promise.js)
const fs = require("fs").promises;

fs.readdir("./")
.then((result) => console.log(result))
.catch((err) => console.error(err));