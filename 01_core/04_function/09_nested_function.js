// 중첩 함수
// 함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 한다.
// 중첩 함수를 포함하는 함수는 외부 함수라고 한다.

function outer(){
    let outerVal = "외부 함수";

    function inner(){
        let innerVal = "내부 함수";
        console.log(outerVal, innerVal);
    }

    inner();
}

outer();