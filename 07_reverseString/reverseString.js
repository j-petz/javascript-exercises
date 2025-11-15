const reverseString = function (string) {
    let stringArray = [];
    for (let i = 0; i < string.length; i++) {
        stringArray.push(string[i]);
    }
    let reversedString = stringArray.reverse().join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
