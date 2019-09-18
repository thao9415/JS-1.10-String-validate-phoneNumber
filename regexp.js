function checkPhoneNumber(str) {
    regexp = /^\([0-9]{2}\)-\(0[0-9]{9}\)$/;

    if (regexp.test(str)) {
        return true
    }
    return false
}

let phoneNum = "(84)-(0978489648)";
console.log(checkPhoneNumber(phoneNum));
phoneNum = "(a8)-(22222222)";
console.log(checkPhoneNumber(phoneNum));
