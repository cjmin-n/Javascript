// 숫자 타입으로 변환

console.log("=== 숫자 타입으로 변환 ===");


// 산술 연산자
console.log(10 - '5'); // 5
console.log(10 * '5'); // 50
console.log(10 / '5'); // 2

console.log(10 % "java"); // NaN


// 비교 연산자
console.log(10 > '5'); // true

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행
console.log(+''); // 0
console.log(+'1'); // 1
console.log(+"javascript"); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+[]); // 0





