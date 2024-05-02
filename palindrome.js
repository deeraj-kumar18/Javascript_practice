// PROGRAM TO FIND IF A STRING IS A PALINDROME.

function isPalindrome(str) { 
    let rev_str ="";
    for( let i=str.length-1;i>=0;i--){
        rev_str+=str[i];
    }

    return str==rev_str;

}

let testcase1 = isPalindrome("abba");
let testcase2 = isPalindrome("acsa");
let testcase3 = isPalindrome("madam")
let testcase4 = isPalindrome("racecar")
let testcase5 = isPalindrome("aha");
console.log(testcase1);
console.log(testcase2);
console.log(testcase3);
console.log(testcase4);