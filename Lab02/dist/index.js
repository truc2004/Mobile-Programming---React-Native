"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai17_1 = require("./bai17");
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
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai20_1 = require("./bai20");
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
// bài 11
async function runBai11() {
    const result = await (0, bai11_1.helloAsyncAwait)();
    console.log("\nBài 11");
    console.log(result);
}
runBai11();
// bài 12
(0, bai12_1.runBai12)();
// bài 13
(0, bai13_1.runBai13)();
// bài 14
const runBai14 = async () => {
    const result = await (0, bai14_1.multiplyAfter1s)(5);
    console.log("\nBài 14");
    console.log("Result:", result);
};
runBai14();
// bài 15
(0, bai15_1.runSequential)();
// bài 16
(0, bai16_1.runParallelTasks)();
// bài 17
(0, bai17_1.runForAwait)();
// bài 18
(0, bai18_1.runFetchUser)();
// bài 19
(0, bai19_1.runFetchUsers)();
// bài 20
(0, bai20_1.runFetchUserTimeout)();
