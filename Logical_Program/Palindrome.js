//madam==madam

function isPalindrome(str){

let reversestring = str.split('').reverse().join('');

return str === reversestring;

}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));