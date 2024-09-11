
// 함수 표현식

// 함수명을 생략할 수 있다.
let hello = function(name){
    return `${name}님 안녕하세요`;
}

console.log(hello("홍길동"));

let calc = function add(a,b){
    return a+b;
}

console.log(calc(10,20));
console.log(add(10,20));
