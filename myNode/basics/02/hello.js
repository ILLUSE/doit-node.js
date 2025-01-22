const hello = (name) => {
    console.log(`${name}님 , 안녕하세요?`);
};

module.exports = hello; //hello함수 내보내기

// 모듈에서 함수를 정의할 때 맨 앞에 exports를 붙여서 함수 직접 내보내기 가능
// exports.hello = (name) => {
//     console.log(`$(name)님 , 안녕하세요?`);
// };