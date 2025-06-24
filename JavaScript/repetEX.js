import readlineSyncMoudul from 'readline-sync';

const number= parseInt(readlineSyncMoudul.question("입력: "));

let line="";

for(let i=1; i<=number; i++){
    line+=i;
    console.log(line);
}
