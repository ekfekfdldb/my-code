import readlineSyncModule from 'readline-sync';
import fs from 'fs';

const name = readlineSyncModule.question("이름: ");
const age = parseInt(readlineSyncModule.question("나이: "));
const email = readlineSyncModule.question("이메일: ");
const phoneNumber = readlineSyncModule.question("전화번호: ");

const myInfo = {
    name,
    age,
    email,
    phoneNumber
};

fs.writeFileSync(
    'myInfo.json',
    JSON.stringify(myInfo, null, 4),
    'utf8'
);
console.log("myInfo.json 파일이 생성되었습니다.");

const answer = readlineSyncModule.question("myInfo.json 파일을 삭제하시겠습니까? (y/n): ");
if (answer .toLowerCase() === 'y') {
    fs.unlinkSync('myInfo.json');
    console.log("myInfo.json 파일이 삭제되었습니다.");
}