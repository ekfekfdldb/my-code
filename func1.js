import readlineSyncMoudul from "readline-sync";

const number = parseInt(readlineSyncMoudul.question("숫자 입력: "));

function multiplication(a){
    let result="";
    for (let i = 1; i < 10; i++) {
        let prod = a * i;
        result+=(`${a}*${i}=${prod}\n`);
    }
    return result;
}
const anser=multiplication(number);
console.log(anser);


function multiplication(a) {
  for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
}
multiplication(number); 
