// 일반 함수와 다른점

function Student(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `${this.name}은 ${this.age}세 입니다.`;
    }
}

// 일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
// new 연산자와 함께 호출하면 생성자 함수로 동작한다.
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로 동작한다.

const student = Student("강감찬", 35);
console.log(student); // undefined  -> return 값이 없기 때문에
console.log(age); // 35             -> new 가 없이 호출하게 되면 this의 범위가 커져서 전역을 가리키게 된다.


// ES6에서는 new .target을 지원한다.
// 생성자 함수가 new 없이 호출되는 것을 방지하기 위해
function Dog(name, age){

    if(!new.target){ // !undefined -> target에 new가 붙어있지않으면 undefined
        
        // new 안붙어있으면 new를 붙여라
        return new Dog(name, age);
    }

    this.name = name;
    this.age = age;
}


console.log(Dog("흰둥이", 1));      // Dog { name: '흰둥이', age: 1 }
console.log(new Dog("흰둥이", 1));  // Dog { name: '흰둥이', age: 1 }


// 대부분의 빌트인 생성자 함수(Object, String, Nubmer ...)은 
// new 연산자와 함께 호출 되었는지를 확인한 후 적절하게 반환한다.
const obj = Object();
console.log(obj); // {}

console.log(typeof obj); // object
console.log(typeof String()); // string
console.log(typeof Number()); // number




