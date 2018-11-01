//1.1 implement alg to determine if a string has all unique characters.

uniqueChar = str => {
    let strArr = str.split('')
    let newArr = []
    let unique = true;

    for (let i = 0; i < strArr.length; i++) {
        if (newArr.indexOf(strArr[i]) !== -1) {
        unique = false;
        return unique
        }
        newArr.push(strArr[i])
    }
    return unique
}

uniqueChar2 = str => {
    if (str.length > 128)
        return false
    let newArr = new Array(128)
    for (let i = 0; i < str.length; i++) {
        if (newArr[str.charCodeAt(i)])
            return false
        newArr[str.charCodeAt(i)] = true;
    }
    return true
}

console.log(uniqueChar2('alsfdj'))

