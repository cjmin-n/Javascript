// 명시적 타입 변환

// 문자열 타입으로 변환
console.log("=== 문자열 타입으로 변환 ===");

// 1. String 생성자 함수를 new 없이 호출
console.log(String(10)); // 10
console.log(String(NaN)); // NaN
console.log(String(Infinity)); // Infinity
console.log(String(true)); // true


// 2. object.prototype.toString 메소드 사용
console.log((10).toString()); // 10
console.log((NaN).toString()); // NaN
console.log((Infinity).toString()); // Infinity

