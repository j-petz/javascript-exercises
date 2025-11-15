const removeFromArray = function (arr, ...values) {
    values.forEach((item) => {
        arr.splice(arr.indexOf(item), 1);
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
