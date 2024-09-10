// 프로퍼티 값 단축 구문

let id = "p-0001";
let price = 30000;

let product = {
    id : id,
    price : price
};

console.log(product); // { id: 'p-0001', price: 30000 }

// ES6 단축 문법
let product2 = {id, price};
console.log(product2); // { id: 'p-0001', price: 30000 }



// 계산된 프로퍼티 이름
let prefix = 'key';
let index = 0;

/* let obj = {};
obj[prefix+'-'+index++] = index;
obj[prefix+'-'+index++] = index;
obj[prefix+'-'+index++] = index; */

let obj = {
    [prefix+'-'+index++] : index,
    [prefix+'-'+index++] : index,
    [prefix+'-'+index++] : index
};

console.log(obj); // { 'key-0': 1, 'key-1': 2, 'key-2': 3 }


let obj2 = {
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
    [`${prefix}-${index++}`] : index,
};
console.log(obj2); // { 'key-3': 4, 'key-4': 5, 'key-5': 6 }


// 메소드 단축
let dog = {
    name : "흰둥이",
    eat : function(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요.`);
    }
};

dog.eat("고구마"); //흰둥이는 고구마를 맛있게 먹어요.


let dog2 = {
    name : "뽀삐",
    eat(food){
        console.log(`${this.name}는 ${food}를 맛있게 먹어요.`);
    }
};

dog2.eat("고구마"); // 뽀삐는 고구마를 맛있게 먹어요.