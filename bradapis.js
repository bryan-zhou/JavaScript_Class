function checkTWId(id) {
    let ret = false;
    let regex = /^[A-Z][12][0-9]{8}$/;

    let result = id.match(regex);

    if (result != null) {
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letters.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));

        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 +
            n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
        ret = sum % 10 == 0;
    }

    return ret;
}

function createAnswer(n = 3) {
    let poker = [];

    for (let i = 0; i < 10; i++) poker[i] = i;
    for (let i = poker.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (i + 1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }

    let ret = '';

    for (let i = 0; i < n; i++) {
        ret += poker[i];
    }

    return ret;
}

function checkAB(ans, gus) {
    let a = 0, b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) {
            a++;
        } else if (ans.indexOf(gus.charAt(i)) >= 0) {
            b++;
        }
    }

    return a + 'A' + b + 'B';
}

function generateTWId() {
    // 字母的對應表
    let cityValueMap = {
        "A":1, "B":10, "C":19, "D":28, "E":37, "F":46, "G":55,
        "H":64, "I":39, "J":73, "K":82, "L":2, "M":11, "N":20,
        "O":48, "P":29, "Q":38, "R":47, "S":56, "T":65,
        "U":74, "V":83, "W":21, "X":3, "Y":12, "Z":30
    };

    // 隨機產生字母部分
    let idHead = String.fromCharCode(parseInt(Math.random() * 26) + 65);

    // 隨機產生數字部分
    let idNumbers = '';

    // 隨機產生性別, 1:男 2:女
    idNumbers += parseInt(Math.random() * 2) + 1;

    for (let i = 0; i < 7; i++) {
        idNumbers += parseInt(Math.random() * 9);
    }

    // 字母部分的權值
    let idScore = cityValueMap[idHead];

    numbersArray = idNumbers.split('');

    // 計算數字部分的權值
    for (let i = 0; i < numbersArray.length; i++) {
        idScore += parseInt(numbersArray[i]) * (8-i);
    }

    if (idScore % 10 == 0) {
        return idHead + idNumbers + '0';
    } else {
        return idHead + idNumbers + (10 - (idScore % 10));
    }
}

function checkPrime(num) {

    if (num == 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    };

    return true
}
