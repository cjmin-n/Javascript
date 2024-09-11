// ES6 에서 도입된 화살표 함수는 function 키워드 대신 
// 화살표를 사용해 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 익명 함수로 정의한다. 본문이 한 줄인 함수를 작성할 때 유용하다.

let message;

// 기존 fucntion
message = function(){
    return "hello world"; // hello world
}

console.log(message());

// function 키워드 생략 가능
message = () => {
    return "Array Function";
}

console.log(message()); // Array Function


// 명령문이 하나만 있을 경우 중괄호 생략 가능
message = () => "Array Functiona are Simple!";
// 이 때 함수 몸체 내부의 문이 값으로 평가될 수 있으면 암묵적으로 반환
console.log(message()); // Array Functiona are Simple!


// 매개변수가 있는 경우
message = (val1, val2) => "Arrow " + val1 + val2;
console.log(message("Function", "!")); // Arrow Function!


// 매개변수가 하나면 소괄호 생략 가능
message = val => "Arrow " + val;
console.log(message("Function!!")); // Arrow Function!!


// 구조 분해 할당
let obj = {
    a : "test",
    b : "value"
};

const test = ({a, b}) => `hi ${a} + ${b}`;      // 키값이 달라지면 찾지 못하기 때문에 맞춰줘야한다.
console.log(test(obj)); // hi test + value


/* const test2 = ({a}) => `hi ${a}`;
console.log(test2(obj)); */


