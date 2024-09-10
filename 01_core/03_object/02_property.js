// 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성된다.

let student = {
    name : "유관순",
    age : 16
}

console.log(student); // { name: '유관순', age: 16 }


let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value",
    "" : "",
    0 : 1,
    var : "var",
    normal : "new normal"
};

let key2 = "test";
obj[key2] = "test value";

console.log(obj);
/* 
    {
        '0': 1,
        normal: 'new normal',
        '@ s p a c e @': 'space value',
        '': '',
        var: 'var',
        test: 'test value'
    }

    1. 숫자 key는 문자로 바뀐 다음 제일 먼저 출력 / 숫자끼리는 오름차순으로 정렬
    2. 중복된 key 값이 있으면 순서는 앞에 것으로 / value는 마지막 것으로 덮어씀
    3. 빈 문자열 key는 에러는 나지 않지만 권장하지 않는다.
    4. 예약어(ex.var) key도 에러는 나지 않지만 권장하지 않는다.
    5. key 값을 동적으로 생성 -> 변수 값이 들어갈 때 obj에 key값이 들어간다.
*/



