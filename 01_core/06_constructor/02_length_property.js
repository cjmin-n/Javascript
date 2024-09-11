// length 는 요소의 갯수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length); // 0
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6);
console.log(arr.length); // 6
arr.pop(); // 마지막 요소 제거
console.log(arr.length); // 5

// 현재의 length보다 작은 값을 주면 배열의 길이가 줄어든다.
arr.length = 3;
console.log(arr); // [ 1, 2, 3 ]

// 현재의 legnth 보다 큰 값을 할당하면
arr.length = 10;
console.log(arr); // [ 1, 2, 3, <7 empty items> ]


const arr2 = [null, 2, , 4];
console.log(arr2); // [ null, 2, <1 empty item>, 4 ]        // 일부가 비어있는 것도 허용한다.




