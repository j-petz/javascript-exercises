const removeFromArray = function (arr, ...values) {
    let newArr = arr;
    for (item of values) {
        let itemV = item;
        newArr = newArr.filter((element) => element !== itemV);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
