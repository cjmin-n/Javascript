// 생성자 함수

//  객체 리터럴에 의한 객체 생성
const student1 = {
    name : "유관순",
    age : 16,
    getInfo(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

function Student(name, age){ // 생성자 함수는 첫글자가 대문자이다.
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}


const student3 = new Student("장보고", 30);
const student4 = new Student("홍길동", 20);

// 메소드 호출
console.log(student3.getInfo()); // 장보고은 30세 입니다. 
console.log(student4.getInfo()); // 홍길동은 20세 입니다.



// 생성자 함수, 클래스로 만들어진 객체는 인스턴스라고 부른다.


class test {
    constructor(name, age, getInfo){
        this.name = name;
        this.age = age;
        this.getInfo = getInfo;
    }
    /* name = "";
    age = 0;
    getInfo = function(){}; */
}

const student5 = new test("이순신", 30, function(){});
console.log(student5); // test { name: '이순신', age: 30, getInfo: [Function (anonymous)] }
