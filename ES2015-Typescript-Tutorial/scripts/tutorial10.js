"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// const getArrowValue = () => {
//     return 10;
// }
// console.log(getArrowValue());
// const getArrowValue = (m) => 10*m;
// const getArrowValue = m => 10*m;
var getArrowValue = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrowValue(5, 50));
console.log(typeof getArrowValue);
//# sourceMappingURL=tutorial10.js.map