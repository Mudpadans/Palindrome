// Write your code below
function isPalindrome(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (joinArray === str) {
        return true;
    } else {
        return false
    }
}

console.log(isPalindrome("lol"));