// 콜백 함수
/* 
    함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를
    콜백 함수라고 한다. 매개변수를 통해 함수의 외부에서
    콜백 함수를 전달 받은 함수를 고차 함수라고 한다.
    콜백 함수는 고차 함수에 전달 된다.
    즉, 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
*/

// 전달 받은 값을 증가 시켜주는 함수
function increase(value){
    return value + 1;
}

// 전달 받은 값을 감소 시켜주는 함수
function decrease(value){
    return value - 1;
}

function apply(func, value){

    // 콜백 함수는 고차 함수에 의해 호출되며
    // 이 때 고차 함수는 필요에 따라 콜백함수에 인자를 전달할 수 있다.

    return func(value);
}

console.log(apply(increase, 5)); // 6
console.log(apply(decrease, 5)); // 4


// 콜백 함수가 고차 함수 내부에만 호출된다면,
// 콜백 함수를 익명함수로 정의하면서 곧바로 전달할 수 있다.
console.log(apply(function(value){return value ** 2;}, 5)); //25


// 순수 함수와 비순수 함수

// 순수 함수 : 외부 상태에 의존하지도 않고 변경하지도 않는 함수
// 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수

var cnt = 0;

// 순수 함수는 최소 하나 이상의 인수를 전달 받으며 인수의 불변성을 유지한다.
function increase(n){
    return ++n;
}

// 순수 함수가 반환한 결과값을 변수에 재 할당해서 상태를 변경
cnt = increase(cnt);
console.log(cnt); // 1


// 비순수 함수
function decrease(){
    return --cnt; // 외부 상태에 의존하여 외부 상태 변경
}

decrease();
console.log(cnt); // 0


