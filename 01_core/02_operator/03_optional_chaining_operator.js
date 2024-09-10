// 옵셔널 체이닝 연산자
// ES11 에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined 인 경우
// undefined 를 반환하고 그렇지 않으면 우항의 참조를 이어간다
// 객체의 속성에 접근할 때 해당 속성이 존재하지 않을 경우 오류를 방지하기 위해 사용

let obj = null;
// let val = obj.value; // 에러
let val = obj?.value; 
console.log(val); // undefined

// 옵셔널 체이닝 이전에는 논리연산자 && 를 사용한 단축 평가로 확인을 했다.
// 단, 빈 문자열과 같은 Falsy 값을 false 취급해서 생기는 문제가 있다.
let str = '';
// str = null;

let len = str && str.length; 
console.log(len); //  -> 빈문자열 출력

let len2 = str?.length;
console.log(len2); // 0




