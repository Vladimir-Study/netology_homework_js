function getPasswordChecker(password){

    return function checkPassworg(return_password) {
        if (return_password == password) {
            return true
        }
        else {
            return false
        }

    }

}

check = getPasswordChecker('qwerty')
console.log(check('qwgqewg'))
console.log(check('qwerty'))
