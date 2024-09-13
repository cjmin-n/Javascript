// 빌트인 전역 함수

// isFinite
// 전달 받은 인수가 정상적인 유한수인지 검사하는 함수
// 유한수이면 true, 무한수이면 false (NaN도 false)

console.log(isFinite(10)); // true
console.log(isFinite('10'));  // true
console.log(isFinite(null));  // true
// 숫자가 아니면 정수형으로 변환해서 확인

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite("abc")); // false
console.log("--------------------------------------");


// isNaN
// 전달 받은 인수가 NaN 인지 검사하여 결과를 불리언으로 반환
// 전달 받은 인수가 숫자가 아닌 경우 숫자로 타입 변환 후 검사 진행

console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false
console.log(isNaN("abc")); // true
console.log(isNaN("")); // false
console.log(isNaN(true)); // false
console.log(isNaN(undefined)); // true
console.log("--------------------------------------");


// parseFloat
console.log(parseFloat("10.01")); // 10.01

// 공백으로 구분 된 문자열은 첫 번째만 반환 - parseInt 도 동일
console.log(parseFloat("10 20 30")); // 10

// 숫자가 아닌 문자열은 제외하고 반환 - parseInt 도 동일
console.log(parseFloat("10cm")); // 10

// 앞 뒤 공백은 무시한다.  - parseInt 도 동일
console.log(parseFloat("       1004         ")); // 1004



// encodeURI
// URI 를 문자열로 전달 받아 어떤 시스템에서도 읽을 수 있게 변환
const uri = "http://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc); // http://greedy.com?name=%ED%99%8D%EA%B8%B8%EB%8F%99&job=student     -> 아스키셋으로 변환


// decodeURI
// 인코딩 된 URI 를 처리 이전으로 디코딩한다.
const dec = decodeURI(enc);
console.log(dec); // http://greedy.com?name=홍길동&job=student