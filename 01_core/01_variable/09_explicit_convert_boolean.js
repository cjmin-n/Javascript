// 불리언 타입으로 변환
console.log("=== 논리 타입으로 변환 ===");

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean("javascript")); // true
console.log(Boolean('')); // false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false

// 빈 배열, 빈 객체는 Truthy
console.log(Boolean({})); // true
console.log(Boolean([])); // true

// 2. ! 부정 연산자를 두 번 사용하는 방법
console.log(!!'javascript'); // true
console.log(!!''); // false
console.log(!!1); // true
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!Infinity); // true
console.log(!!null); // false
console.log(!!{}); // true
console.log(!![]); // true

