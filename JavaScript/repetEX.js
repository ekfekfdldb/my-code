import readlineSyncModule from 'readline-sync';

const number= parseInt(readlineSyncModule.question("입력: "));

let line="";

for(let i=1; i<=number; i++){
    line+=i;
    console.log(line);
}
