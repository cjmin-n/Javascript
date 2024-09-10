// 문자열 타입 변환

console.log("=== 문자열 타입으로 변환 ===");

// 문자 연결 연산자 +
// 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적으로 변환
console.log(10 + "20"); // 1020

console.log(`10 + 20 : ${10+20}`); // 10 + 20 : 30
// 템플릿 리터럴 표현식 삽입은 표현식의 결과를 문자열 타입으로 암묵적으로 변환


// 문자열 타입이 아닌 값을 문자열 타입으로 암묵적으로 변환하는 결과

console.log(NaN + ''); // 1
console.log(Infinity + ''); // Infinity
console.log(true + ''); // true
console.log(null + ''); // null
console.log(undefined + ''); // undefined

console.log([] + ''); // 
// console.log(typeof ([] + '')); // string
console.log(function(){} + ''); // function(){} 

console.log(typeof (true + '')); // string



