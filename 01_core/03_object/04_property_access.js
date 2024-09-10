// 프로퍼티 접근

let dog = {
    name : "뽀삐",
    eat : function(food){
        console.log(`${this.name} 는 ${food} 를 맛있게 먹어요.`);
    }
};

console.log(dog.name); // 뽀삐
dog.eat("고구마"); // 뽀삐 는 고구마 를 맛있게 먹어요.

dog['eat']("고구마"); // 뽀삐 는 고구마 를 맛있게 먹어요.
console.log(dog['name']);  // 뽀삐


let obj = {
    'dash-key': 'dash-value',
    0: 1
};

// 식별자 네이밍 규칙                      -> 에러는 나지않음
// 허용되는 문자
// 영문자, 숫자(첫 글자는 올 수 없음)
// 예약어는 사용할 수 없음
// 대소문자를 구분함
// 카멜케이스로 작성함

// 규칙을 지키지 않은 대괄호 표기법으로 불러야한다.

console.log(obj); // { '0': 1, 'dash-key': 'dash-value' }
console.log(obj['dash-key']); // dash-value
// console.log(obj.dash-key); // 에러

console.log(obj[0]); // 1
console.log(obj['0']); // 1
// console.log(obj.0); // 에러



