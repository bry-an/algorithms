// Given a string, find the longest palindromic contiguous substring.
//If there are more than one with the maximum length, return any one.

// For example, the longest palindromic substring of "aabcdcb" is "bcdcb".
//The longest palindromic substring of "bananas" is "anana".


const longestPalindrome = str => {
    const reversed = str.split('')
    let palindrome = []
    for (let i = 0, j = reversed.length - 1; i < reversed.length / 2, j > reversed.length / 2; i++ , j--) {
        let tmp
        tmp = reversed[i]
        reversed[i] = reversed[j]
        reversed[j] = tmp
    }
    let arr = str.split('')
    let maxLength = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === reversed[j]) {
                palindrome.push(arr[i])
                i++
                if (maxLength < palindrome.length)
                    maxLength = palindrome.length
                else
                    palindrome = []
            }
        }
    }
    palindromeStr = palindrome.join('')
    console.log(palindromeStr)
}


longestPalindrome('moma')

//lamoma
//amomal



