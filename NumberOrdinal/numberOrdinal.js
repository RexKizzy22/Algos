const numberOrdinal = (number) => {
    const twoDigits = parseInt(number.toString().slice(-2));
    const oneDigit = parseInt(number.toString().slice(-1));

    if (isNaN(number) || number === 0) {
        return "0";
    } else {
        if (number > 0 || number <= 10000) {
            if (twoDigits === 11 || twoDigits === 12 || twoDigits === 13) {
                return String(twoDigits) + "th";
            } else if (oneDigit === 1) {
                return String(number) + "st";
            } else if (oneDigit === 2) {
                return String(number) + "nd";
            } else if (oneDigit === 3) {
                return String(number) + "rd";
            } else {
                return String(number) + "th";
            }
        }
    }
}