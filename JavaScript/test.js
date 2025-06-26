import readlineSyncModule from 'readline-sync';
import CryptoJS from 'crypto-js';

const memo = [];

/*function look() {
    const looked = readlineSyncModule.question("문서를 잠금하시겠습니까 (y/n): ");

    if (looked === 'y') {
        const key = readlineSyncModule.question("비밀번호를 설정하세요: ");
        const security = CryptoJS.AES.encrypt(memo, key).toString();

        console.log('암호화된 데이터:', security);
    }
};

look();