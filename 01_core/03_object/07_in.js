// in 연산자


// 프로퍼티 존재 여부 확인
// for 문과 함께 객체 내부 키 순회

let student = {
    name : "유관순",
    age : 16,
    test : undefined
};

console.log("name" in student); // true
console.log("age" in student); // true
console.log("test" in student); // true
console.log("height" in student); // false


// for in 반복문
for(let key in student){
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}



/* 
    key : name
    student[key] : 유관순
    key : age
    student[key] : 16
    key : test
    student[key] : undefined
*/

