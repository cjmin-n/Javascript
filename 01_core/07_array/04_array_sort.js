// 배열 정렬 기준

let numbers = [];

for(let i = 0; i < 10; i++){
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}
console.log(`정렬 전 numbers : ${numbers}`); // 정렬 전 numbers : 8,80,67,77,17,49,82,78,3,51 (랜덤)


numbers.sort(); 
console.log(`정렬 후 numbers : ${numbers}`); // 정렬 후 numbers : 17,3,49,51,67,77,78,8,80,82 (랜덤)
// 배열은 기본저긍로 문자열 정렬이 되므로 한자리수, 두자리수가 올바르지 않게 정렬 되는 모습을 확인할 수 있음
// 다른 정렬 기준을 사용하려면 매개변수로 comparer 함수 전달


function compare(a, b){
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

/* numbers.sort(compare);
console.log("매개변수로 compare 전달 후 숫자 오름차순 정렬");
console.log(numbers);  */
/* 
    [
        40, 44, 64, 72,  81,
        84, 88, 96, 99, 100
    ]
*/


// 더 간단한 방법
numbers.sort((a, b) => a - b); // a - b가 양수면 sort가 자체적으로 순서를 바꿔준다. // 내림차순 : b - a
console.log(numbers);
/* 
    [
        7, 13, 17, 21, 33,
        42, 50, 51, 68, 83
    ]
*/