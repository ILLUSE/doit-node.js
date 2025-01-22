// 프로미스를 사용해 피자 주문하기   (결과 비교: 02\results\promise.js)

let likePizza = true;
const pizza = new Promise((resolve,reject) => {
    if(likePizza)
        resolve('피자를 주문합니다.');
    else
        reject('피자를 주문하지 않습니다.');
});

pizza
.then(result => console.log(result)) //true일 때
.catch(err => console.log(err)); // false일 때 
//pizza.then(result => console.log(result)).catch(err => console.log(err)); 프로미스 체이닝 그냥 같은 줄에 쓴거
