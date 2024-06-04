// for each
var num = [1, 2, 3, 4, 5];
num.forEach(function (number) {
    console.log(number);
});
// map()
var doubleNumber = num.map(function (number) { return number * 2; });
console.log(doubleNumber);
