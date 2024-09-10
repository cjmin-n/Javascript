// 논리 연산자
// ||, &&, !

// OR, AND 연산자 표현식의 결과가 때로는 불리언이 아닐 수 있다.
console.log('apple' || 'banana'); // apple -> 내용있는 문자열은 Truthy이기 때문에 
console.log(false || 'banana'); // banana
console.log('' || 'banana'); // banana -> Falsy || Truthy는 Truthy 반환

console.log('apple' && 'banana'); // banana 
console.log(false && 'banana'); // false

// Falsy && Truthy 는 Falsy 값 자체가 출력
console.log('' && 'banana'); //  -> 빈 문자열 -  Falsy && Truthy 는 Falsy 출력
console.log(null && 'banana'); // null -> 빈 문자열 -  Falsy && Truthy 는 Falsy 출력


let num = 1;
if(num % 2 == 0){
    console.log("짝수입니다.");
}else {
    console.log("홀수입니다.");
}

num % 2 == 0 && console.log("짝수입니다."); 
num % 2 == 0 || console.log("홀수입니다."); // 앞:false 뒤:true 홀수입니다.


let obj = null;
// 객체라고 기대하는 변수가 null 또는 undefined 일 때

// let val = obj.value; // 에러 
let val = obj?.value; // undefined
val = obj && obj.value; // null
// console.log(val);



