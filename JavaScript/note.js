import readlineSyncModule from 'readline-sync';
import fs from 'fs';
import CryptoJS from 'crypto-js';

//메모 상태창 문자열 생성, memo 공백배열 생성
const menu = '1.작성 2.조회 3.수정 4.삭제 5.추가기능 6.종료'
const memo = [];
let key = '';
let security = '';

//memo의 목록을 출력하는 함수
function checkList() {
    for (let i = 0; i < memo.length; i++) {
        console.log(`${i}번 - 제목: ${memo[i].title}`);
    }
};

//입력한 메모를 json 파일에서 변경하는 함수
function save() {
    fs.writeFileSync(
        'memo.json',
        JSON.stringify(memo, null, 4),
        'utf8'
    );
};

function lock() {
    const looked = readlineSyncModule.question("문서를 잠금하시겠습니까 (y/n): ");
    if (looked === 'y') {
        key = readlineSyncModule.question("비밀번호를 설정하세요: ");
        security = CryptoJS.AES.encrypt(JSON.stringify(memo), key).toString();
        console.log('암호화된 데이터:', security);
    }
}


//메인 루프
while (true) {
    console.log(menu);

    const userSelect = parseInt(readlineSyncModule.question("번호를 입력하세요: "));

    //메모 작성
    if (userSelect === 1) {
        const memoTitle = readlineSyncModule.question("제목을 입력하세요: ");
        const memoContent = readlineSyncModule.question("내용을 입력하세요: ");

        lock();

        //메모 배열에 값을 push 각 키값을 title과 content로 지정
        memo.push({ title: memoTitle, content: memoContent , key: security});

        //save 함수 호출
        save();

        console.log(memoTitle, memoContent);

        // 조회 기능 수정
    } else if (userSelect === 2) {
        checkList();
        const choice2 = parseInt(readlineSyncModule.question("조회할 메모를 선택하세요: "));
        try {
            const password = readlineSyncModule.question("비밀번호를 입력하세요.: ");
            if (password === key) {
                const un = CryptoJS.AES.decrypt(security, key);
                const unData = un.toString(CryptoJS.enc.Utf8);
                console.log(`제목: ${memo[choice2].title}`);
                console.log(`내용: ${memo[choice2].content}`);
            } else {
                console.log("암호가 틀렸습니다.");
            }
        } catch (e) {
            console.log("메모가 존재하지 않습니다.");
        }


    } else if (userSelect === 3) {

        //checkList 함수 호출
        checkList();

        //메모 수정
        const choice3 = parseInt(readlineSyncModule.question("수정할 메모를 선택하세요: "));
        const changTitle = readlineSyncModule.question("수정할 제목을 입력하세요: ");
        const changContent = readlineSyncModule.question("수정할 내용을 입력하세요: ");

        //해당하는 인덱스 번호의 memo의 title과 content를 변경
        memo[choice3] = { title: changTitle, content: changContent };

        //save 함수 호출
        save();

    } else if (userSelect === 4) {

        //checkList 함수 호출
        checkList();

        //메모 삭제
        const choice4 = parseInt(readlineSyncModule.question("삭제할 메모를 선택하세요: "));

        //헤당하는 인덱스 번호의 메모 삭제
        memo.splice(choice4, 1);

        //save 함수 호출
        save();

        console.log('삭제되었습니다.');

    } else if (userSelect === 5) {
        console.log('추가기능');

        //프로그램 종료
    } else if (userSelect === 6) {
        console.log('종료');
        break;

        //해당되는 기능 이외의 숫자가 입력되는 경우 출력
    } else {
        console.log('올바른 번호를 입력하세요.');
    }
};