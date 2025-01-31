// 다음과 같이 arr 배열이 주어졌을 때 1초 간격으로 arr 배열의 요소를 출력하는 Node.js 비동기 함수를 작성하세요.
const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(arr[i]);
    },1000);
}

//좀 더 내 방식대로 해보자 ! 재귀를 꼭 이용해야 할까


