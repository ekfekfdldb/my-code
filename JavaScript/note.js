import readlineSyncModule from 'readline-sync';

const menu = '1.작성 2.조회 3.수정 4.삭제 5.추가기능 6.종료'
const memo = [];

function checkList() {
    for (let i = 0; i < memo.length; i ++) {
            console.log(`${i} 번째 매모 ${memo[i]}`);
        }
};


while (true) {
    console.log(menu);

    const userSelect = parseInt(readlineSyncModule.question("번호를 입력하세요: "));

    if (userSelect === 1) {
        const memoTitle = readlineSyncModule.question("제목을 입력하세요: ");
        const memoContent = readlineSyncModule.question("내용을 입력하세요: ");

        memo.push([memoTitle, memoContent]);
        console.log(memoTitle, memoContent);

    } else if (userSelect === 2) {
        console.log(checkList());

        const choice2 = readlineSyncModule.question("조회할 메모를 선택하세요: ");
        console.log(memo[choice2]);
        
    } else if (userSelect === 3) {
        console.log(checkList());

        const choice3 = readlineSyncModule.question("수정할 메모를 선택하세요: ");
        const changTitle = readlineSyncModule.question("수정할 제목을 입력하세요: ");
        const changContent = readlineSyncModule.question("수정할 내용을 입력하세요: ");

        memo[choice3]=([changTitle,changContent]);
        console.log(memo[choice3]);


    } else if (userSelect === 4) {
        console.log(checkList());

        const choice4 = readlineSyncModule.question("삭제할 메모를 선택하세요: ");
        memo.splice(choice4);
        console.log('삭제되었습니다.');      

    } else if (userSelect === 5) {
        console.log('추가기능');

    } else if (userSelect === 6) {
        console.log('종료');
    
        break;

    } else {
        console.log('올바른 번호를 입력하세요.');
    }
};