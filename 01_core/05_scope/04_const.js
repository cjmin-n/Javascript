// const
// const 키워드는 상수를 선언하기 위해 사용한다.
// let 키워드와 마찬가지로 블록 레벨 스코프를 가지며
// 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// 아래에서는 let 키워드와 다른 점을 중심으로 살펴본다.

// const 키워드는 선언과 동시에 초기화 해야 한다.
// const x;
const x = 1;

// 재할당이 금지된다.
// x = 2; // 에러

// 일반적으로 상수의 이름은 대문자로 선언하고,
// 스네이크 케이스로 표현한다.

// 할인율
const DISCOUNT_RATE = 0.15;
// 정가
let price = 15000;
// 할인가
let discountPrice = price * (1 - DISCOUNT_RATE);
console.log(discountPrice); // 12750



// const 키워드로 선언 된 변수에 객체를 할당하면 값을 변경할 수 있다.
const student = {
    name : "홍길동",
    age : 20,
};

student.name = "유관순";
console.log(student); // { name: '유관순', age: 20 }

student.height = 180;
console.log(student); // { name: '유관순', age: 20, height: 180 }

delete student.height;
console.log(student); // { name: '유관순', age: 20 }

// student = {}; // 에러




/* 
    전역 변수의 문제점
    1. 모든 코드가 전역 변수를 참조하고 변경할 수 있는 암묵적 결합을 허용한다. 
        변수의 유효 범위가 클 수록 코드의 가독성은 나빠지고, 의도치 않게 변경 될 위험성도 높아진다.
    2. 전역변수는 생명 주기가 길다. 
        메모리 리소스도 오래 소비하며, 상태 변경이 가능한 시간 및 기회가 많다. 
        더욱이 중복 된 변수명을 통해 의도치 않은 재할당이 일어날 수 있다.
    3. 스코프 체인 상에서 종점에 존재하기 때문에 검색 속도가 가장 느리다.
        => 변수의 스코프는 좁을수록 좋다.
*/



