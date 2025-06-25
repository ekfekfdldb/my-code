import readlineSyncModule from "readline-sync";

const number=parseInt(readlineSyncModule.question("숫자 입력: "));

for(let i=1; i<10; i++){
    let prod =number*i;
    console.log(`${number}*${i}=${prod}`);
}