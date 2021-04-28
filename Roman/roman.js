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
    
    const romansArr = s.split("");
    const first = romansArr[0];
    const second = romansArr[1];
    const len = romansArr.length;

    // when length of s is 2
    if (len === 2) {
        if (romans[first] >= romans[second]) {
            return romans[first] + romans[second];
        } else {
            return romans[second] - romans[first];
        }
    }
    
    let result = 0;
    
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
