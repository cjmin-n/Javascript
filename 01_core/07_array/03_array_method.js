// 배열 메소드

const arr = [];
const arr2 = Array();

// indexOf
// indexOf : 배열에서 요소가 위치한 인덱스를 리턴
// lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
// includes : 배열에 해당 요소 포함 여부 리턴
const foodList = ["물회", "삼계탕", "냉면", "수박", "물회"];

/* indexOf() */
console.log(`foodList.indexOf("물회") : ${foodList.indexOf("물회")}`); // foodList.indexOf("물회") : 0
console.log(`foodList.indexOf("물회", 1) : ${foodList.indexOf("물회", 1)}`); // foodList.indexOf("물회", 1) : 4
// indexOf(탐색할 요소, 탐색시작할 인덱스)

console.log(`foodList.indexOf("삼겹살") : ${foodList.indexOf("삼겹살")}`); // foodList.indexOf("삼겹살) : -1
// indexOf() 사용 시 배열에 없는 요소 : -1 반환


/* lastIndexOf() */
console.log(`foodList.lastIndexOf("물회") : ${foodList.lastIndexOf("물회")}`); // foodList.lastIndexOf("물회) : 4
console.log(`foodList.lastIndexOf("물회", 1) : ${foodList.lastIndexOf("물회", 1)}`); // foodList.lastIndexOf("물회) : 0
// lastIndexOf(탐색할 요소, 탐색끝낼 인덱스)

console.log(`foodList.lastIndexOf("삼겹살") : ${foodList.lastIndexOf("삼겹살")}`); // foodList.lastIndexOf("삼겹살) : -1
// lastIndexOf() 사용 시 배열에 없는 요소 : -1 반환


/* includes() */
console.log(`foodList.includes("물회") : ${foodList.includes("물회")}`); // foodList.includes("물회") : true
console.log(`foodList.includes("삼겹살") : ${foodList.includes("삼겹살")}`); // foodList.includes("삼겹살") : false


// .push : 배열의 맨 뒤에 요소 추가
// .pop : 배열의 맨 뒤에 요소 반환 후 제거
const chineseFood = ["짜장면", "짬뽕", "탕수육"];
console.log(`push 전 chineseFood : ${chineseFood}`); // push 전 chineseFood : 짜장면,짬뽕,탕수육

chineseFood.push("칠리새우");
chineseFood.push("유린기");
console.log(`push 후 chineseFood : ${chineseFood}`); // push 후 chineseFood : 짜장면,짬뽕,탕수육,칠리새우,유린기

console.log(`pop() : ${chineseFood.pop()}`); // pop() : 유린기
console.log(`pop() : ${chineseFood.pop()}`); // pop() : 칠리새우
console.log(`pop() : ${chineseFood.pop()}`); // pop() : 탕수육
console.log(`pop 후 chineseFood : ${chineseFood}`); // pop 후 chineseFood : 짜장면,짬뽕


// unshift : 배열의 맨 앞에 요소 추가
// shift : 배열의 맨 앞 요소 반환 후 제거
chineseFood.unshift("탕수육");
chineseFood.unshift("칠리새우");

console.log(`unshift 후 chineseFood : ${chineseFood}`); // unshift 후 chineseFood : 칠리새우,탕수육,짜장면,짬뽕
console.log(`shift() : ${chineseFood.shift()}`); // shift() : 칠리새우
console.log(`shift() : ${chineseFood.shift()}`); // shift() : 탕수육
console.log(`shift 후 chineseFood : ${chineseFood}`); // shift 후 chineseFood : 짜장면,짬뽕


// concat : 두 개 이상의 배열을 결합
const idol1 = ["아이브", "에스파"];
const idol2 = ["뉴진스", "르세라핌"];
const idol3 = ["핑클", "SES"];

const mix = idol1.concat(idol2);
console.log(mix); // [ '아이브', '에스파', '뉴진스', '르세라핌' ]

const mix2 = idol3.concat(idol1, idol2);
console.log(mix2); // [ '핑클', 'SES', '아이브', '에스파', '뉴진스', '르세라핌' ]


// slice : 배열의 요소 선택 잘라내기
// splice : 배열의 index 위치 요소 제거 후 추가
const front = ["html", "css", "javascript", "jQuery"];

// slice(시작인덱스, 종료인덱스) : 1부터 3전까지
console.log(`front.slice(1,3) : ${front.slice(1,3)}`); // front.slice(1,3) : css,javascript
// 원본 배열 변형 없음
console.log(front); // [ 'html', 'css', 'javascript', 'jQuery' ]

// splice(인덱스, 제거수, 추가값1, 추가값2, ...)
console.log(`front.splice(3,0,"React") : ${front.splice(3, 0, "React")}`); // front.splice(3,0,"React") :             -> 제거 하는 요소가 있으면 반환되지만 없으면 아무것도 안나옴
console.log(front); // [ 'html', 'css', 'javascript', 'React', 'jQuery' ]

console.log(`front.splice(4,1,"flutter") : ${front.splice(4, 1, "flutter")}`); // front.splice(4,1,"flutter") : jQuery
console.log(front); // [ 'html', 'css', 'javascript', 'React', 'flutter' ]

/* 
    제거수 0 -> 제거하는 요소가 없으면 해당 인덱스에 추가값만 들어감
    제거수 1 이상 -> 해당 인덱스에 제거할 값이 반환되고 추가값이 추가된다.

    * 제거만 하고 싶을 경우 추가값을 안넣어주면 됨
    ex ) front.splice(3, 0) : 3번째 인덱스, 제거수 0, 추가값 없음
    
*/


// join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕", "초콜릿", "껌", "과자"];

// 아무것도 쓰지않으면 , 가 기본 값
// ${} 템플릿리터럴로 반환하면 .toString이 생략되어 문자열로 반환된다.
console.log(`snackList : ${snackList}`); // snackList : 사탕,초콜릿,껌,과자

console.log(`snackList.join() : ${snackList.join()}`); // snackList.join() : 사탕,초콜릿,껌,과자
console.log(`snackList.join("/") : ${snackList.join("/")}`); // snackList.join("/") : 사탕/초콜릿/껌/과자


// reverse : 배열의 순서를 뒤집음
console.log(`[1, 2, 3, 4, 5].reverse() : ${[1, 2, 3, 4, 5].reverse()}`); // [1, 2, 3, 4, 5].reverse() : 5,4,3,2,1

 





