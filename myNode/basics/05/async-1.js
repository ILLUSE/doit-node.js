// 자바스크립트의 비동기 처리  (결과 비교 파일 : 05\results\async-1.js)
console.log("첫번째 작업");
setTimeout(() => {
    console.log("두번째 작업");
},3000);
console.log("세번째 작업");