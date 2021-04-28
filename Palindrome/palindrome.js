/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const rev = x.toString().split("").reverse().join("");
    const str = x.toString();
    return rev === str;
};