// 자바스크립트의 비동기 처리  (결과 비교 파일 : 05\results\async-2.js)
console.log("첫번째 작업");
setTimeout(() => {
    console.log("두번째 작업");
},0); //기다리는 시간이 0이어도 settimeout을 보면 일단 미루고 바로 처리되는 거 먼저 진행
console.log("세번째 작업");