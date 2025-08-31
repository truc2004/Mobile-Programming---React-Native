"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./bai01");
const bai02_1 = require("./bai02");
const bai03_1 = require("./bai03");
const bai04_1 = require("./bai04");
const bai05_1 = require("./bai05");
const bai06_1 = require("./bai06");
const bai07_1 = require("./bai07");
const bai08_1 = require("./bai08");
const bai09_1 = require("./bai09");
const bai10_1 = require("./bai10");
// bài 1
(0, bai01_1.helloAsync)().then((message) => {
    console.log("\nBài 1\n" + message);
});
// bài 2
(0, bai02_1.getNumber)().then((number) => {
    console.log("\nBài 2\n" + number);
});
// bài 3
(0, bai03_1.throwError)()
    .then(() => {
})
    .catch((error) => {
    console.log("\nBài 3\n" + error.message);
});
// bài 4
(0, bai04_1.getRandomNumber)()
    .then((result) => {
    console.log("\nBài 4\nRandom number:", result);
})
    .catch((error) => {
    console.log("\nBài 4\nError:", error.message);
});
// bài 5
(0, bai05_1.simulateTask)(1000)
    .then(value => console.log("\nBài 5\n" + value))
    .catch(error => console.log("\nBài 5\n" + error));
// bài 6
(0, bai06_1.runBai06)();
// bài 7
(0, bai07_1.runBai07)();
// bài 8
(0, bai08_1.promiseChain)();
// bài 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(0, bai09_1.filterEvenNumbers)(numbers)
    .then(result => {
    console.log("\nBài 9\nEven numbers:", result);
})
    .catch(error => {
    console.log("Error:", error);
});
// bài 10
(0, bai10_1.runBai10)(numbers);
