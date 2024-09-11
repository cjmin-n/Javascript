
// 함수 호이스팅

console.log(hello); // [Function: hello]
//console.log(hi);

console.log(hello("홍길동")); // 홍길동님 안녕하세요
//console.log(hi("홍길동"));

function hello(name){
    return `${name}님 안녕하세요`;
}

let hi = function(name){
    return `${name}님 안녕하세요`;
}

/*
 함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다.
 따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 동작하는 
 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
*/


test(); // 이거 중 어떤게 실행되나?

function test(){
    console.log("이거랑");
}
function test(){
    console.log("이거 중 어떤게 실행되나?");
}

var test = () => {
    console.log("123");
}
test(); // 123
//---------------------------------


console.log("-------------------------");

// var 를 사용할 때 함수 표현식의 문제점
console.log(funTest); // undefined
var funTest = () => {
    console.log("1");
}
funTest(); // 1
var funTest = () => {
    console.log('2');
}
funTest(); // 2

// let funTest = () => {
//     console.log("2");
// }
funTest(); //2

