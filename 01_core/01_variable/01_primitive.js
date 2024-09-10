
/* 숫자 타입
    자바의 경우 정수와 실수를 구분해 다양한 숫자 타입을 제공한다.
    하지만 자바스크립트의 경우 하나의 타입만 존재한다.
    자료형의 크기가 동적으로 달라진다.
*/

let integer = 10;
let double = 5.5;
let negative = -10;

// 새로운 메모리 공간을 참조
integer = "홍길동";

console.log(integer);


// 숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
/* 
    Infinity = 양의 무한대
    -Infinity = 음의 무한대
    NaN = 산술 연산 불가능함
*/

console.log(10/0);
console.log(10/-0);
console.log(1*"문자열");

// ---------------------------------------------------------



/* 
    문자열 타입
    문자열 타입은 텍스트를 나타내는데 사용한다.
    작은 따옴표, 큰 따옴표, 빽틱 으로 텍스트를 감싼다.
    자바는 문자열을 객체로 표현하지만 자바스크립트는 원시 타입이다.
*/

let String;
String = 'javascript';
String = "javascript";
String = `javascript`;

let string = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표" 는 문자열로 인식';
string = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표' 는 문자열로 인식";

console.log(String);
console.log(string);


// 템플릿 리터럴
// ES6 부터 도입된 멀티라인 문자열

let str = "안녕하세요 \n정민식 입니다.";

let multi = `안녕하세요
정민식 입니다.`; // 빽틱사용하면 이스케이프 문자 사용없이 엔터만으로 줄넘김이 된다.

console.log(multi);


let firstName = "최";
let lastName = "정민";

console.log("안녕하세요 " + firstName+lastName + " 입니다."); // 기존 방식
console.log(`안녕하세요 ${firstName}${lastName} 입니다.`);

// ---------------------------------------------------------



// 불리언 타입
// true false

let flag = true;
console.log(flag);

flag = false;
console.log(flag);


// ---------------------------------------------------------


/* 
    undefined 타입
    let 키워드로 선언한 변수는 암묵적으로 undefined 로 초기화 된다.
    변수를 선언한 이후에 값을 할당하지 않은 변수를 참조하면 undefined 가 반환된다.
    undefined 는 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이고,
    개발자가 의도적으로 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 있다.
    그렇기 때문에 의도적인 빈 값은 null 을 주는 것이 바람직하다.
*/


let test;
console.log(test);

// const test2;  // const 는 상수 이기 때문에 undefined 로 초기화 할 수 없다.

/* 
    null 타입
    변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
*/

let nullType = "something";
nullType = null;
console.log(nullType);




