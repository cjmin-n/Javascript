// 비교 연산자
// 좌항과 우항의 비교 연산자를 비교한 다음 그 결과를 불리언 값으로 반환한다.
// if 문이나 for 문과 같은 제어문의 조건식에서 주로 사용한다.


/* 
    동등비교 / 일치비교
    동등비교 : (==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
    일치비교 : (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

// 숫자 1, 문자 '1', true 비교
console.log(`1 == '1' : ${1 == '1'}`); // 1 == '1' : true
console.log(`1 == true : ${1 == true}`); // 1 == true : true

console.log(`1 === '1' : ${1 === '1'}`); // 1 === '1' : false
console.log(`1 === true : ${1 === true}`); // 1 === true : false

// 숫자 0, 문자 '0', 빈 문자열 '', false 비교
console.log(`0 == '0' : ${0 == '0'}`); // 0 == '0' : true
console.log(`0 == '' : ${0 == ''}`); // 0 == '' : true
console.log(`0 == false : ${0 == false}`); // 0 == false : true

console.log(`0 === '0' : ${0 === '0'}`); // 0 == '0' : false
console.log(`0 === '' : ${0 === ''}`); // 0 == '' : false
console.log(`0 === false : ${0 === false}`); // 0 == false : false

// null, undefined 비교
console.log(`null == undefined : ${null == undefined}`); // null == undefined : true
console.log(`null === undefined : ${null === undefined}`); // null === undefined : false

// NaN는 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`); // NaN == NaN : false
console.log(`NaN === NaN : ${NaN === NaN}`); // NaN === NaN : false

console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`); // Number.isNaN(NaN) : true


// 문자열끼리도 비교가 가능하다.
console.log(`hello === hello : ${'hello' === 'hello'}`); // hello === hello : true
console.log(`hello !== hello : ${'hello' !== 'hello'}`); // hello !== hello : false

// 대소 비교 (아스키코드로 비교 - 맨 앞부터)
console.log(`apple < banana : ${'apple' < 'banana'}`); // apple < banana : true
console.log(`cat < Zoo : ${'cat' < 'Zoo'}`); // cat < Zoo : false
