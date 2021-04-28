/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = function(s) {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const num = romans[s];
    
    // when length of s is 1
    if (num) {
        return num;
    }
    
    const revRomans = s.split("").reverse();
    const len = revRomans.length;

    // when length of s is 2
    if (len === 2 && revRomans[0] !== "I" && romans[revRomans[1]]) {
        if (romans[revRomans[1]] >= romans[revRomans[0]]) {
            return romans[revRomans[1]] + romans[revRomans[0]];
        } else {
            return romans[revRomans[0]] - romans[revRomans[1]];
        }
    } else if (len === 2) {
        return romans[revRomans[0]] + romans[revRomans[1]];
    }
    
    let result = 0;
    const romansArr = s.split("");
    // when length of s > 2
    romansArr.forEach((roman, index, arr) => {
        const next = romansArr[index + 1];
        if (next && romans[next] > romans[roman]) {
            result += (romans[next] - romans[roman]);
            arr.splice(index, 1);
        } else {
            result += romans[roman];
        }
    });
    
    return result;
    
    
};