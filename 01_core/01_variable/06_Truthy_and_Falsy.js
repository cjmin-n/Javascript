// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분한다.
// 암묵적 타입 변환이 일어난다.

let test1;
console.log(test1); // undefined - Falsy
console.log(!!test1); // false - ! 하나일땐 true

// 객체 리터럴
let test = {
    a : null,
    b : 0,
    fun (){
        console.log("testtest");
    }
}; // { a: null, b: 0, fun: [Function: fun] }

// test = null;
// test가 null일 때 ?을 붙이면 null인지 먼저 확인 
if(test?.b){ // 0 -> false // test?가 null인지 확인해서 null이면 test?.b는 undefined가 된다.
    console.log(true);
}else {
    console.log(false);
}

test.b ? console.log(true) : console.log(false);

