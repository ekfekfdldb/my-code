import readlineSyncModule from 'readline-sync';

const Num1 = parseInt(readlineSyncModule.question("첫 번째 숫자: "));
const Oper = readlineSyncModule.question("연산자: ");
const Num2 = parseInt(readlineSyncModule.question("두 번째 숫자: "));

function Calculator(a,b,c) {
    let result;
    switch (b) {
        case "+":
            result = a + c;
            break;
        case "-":
            result = a - c;
            break;
        case "*":
            result = a * c;
            break;
        case "/":
            result = a / c;
            break;
    }
    return result;
}

const anser=Calculator(Num1,Oper,Num2);
console.log(anser);