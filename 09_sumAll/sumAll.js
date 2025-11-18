const sumAll = function (start, end) {
    let arr = [];
    if (
        start < 0 ||
        end < 0 ||
        !Number.isInteger(start) ||
        !Number.isInteger(end)
    ) {
        return "ERROR";
    } else if (start > end) {
        for (let i = end; i <= start; i++) {
            arr.push(i);
        }
    } else {
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    let result = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    return result;
};

// Do not edit below this line
module.exports = sumAll;
