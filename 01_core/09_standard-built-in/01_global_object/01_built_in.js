// 전역 객체, 전역 함수

// 코드가 실행되기 이전에 자바스크립트 엔진이
// 어떤 객체보다도 먼저 생성해놓는 특수한 객체
// 어떤 객체에도 속하지 않은 객체


// 전역 프로퍼티

// Infinity - 무한대를 나타내는 숫자 값
console.log(global.Infinity === Infinity); // true  -> global(전역 객체) 생략 가능
// 양의 무한대
console.log(10/0); // Infinity
// 음의 무한대
console.log(-10/0); // -Infinity

console.log(typeof Infinity); // number


// NaN : 숫자가 아님을 나타내는 숫자
console.log(global.NaN); // NaN
console.log(Number('abc')); // NaN
console.log(typeof NaN); // number

// * global은 최상위 객체이지만 상속관계는 아니다.


// undefined
console.log(global.undefined); // undefined
console.log(typeof undefined); // undefined










