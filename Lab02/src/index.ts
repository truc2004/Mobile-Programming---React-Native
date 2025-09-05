
import { runForAwait } from './bai17';
import { helloAsync } from './bai01';
import { getNumber } from './bai02';
import { throwError } from './bai03';
import { getRandomNumber } from './bai04';
import { simulateTask } from './bai05';
import { runBai06 } from './bai06';
import { runBai07 } from './bai07';
import { promiseChain } from './bai08';
import { filterEvenNumbers } from './bai09';
import { runBai10 } from './bai10';
import { helloAsyncAwait } from './bai11';
import { runBai12 } from './bai12';
import { runBai13 } from './bai13';
import { multiplyAfter1s } from './bai14';
import { runSequential } from './bai15';
import { runParallelTasks } from './bai16';
import { runFetchUser } from './bai18';
import { runFetchUsers } from './bai19';
import { runFetchUserTimeout } from './bai20';
import { getTodo } from './bai21';
import { fetchAPIMultiple } from './bai22';
import { getComplete } from './bai23';
import { downloadFile } from './bai25';
import { postData } from './bai24';
import { setTimeout1 } from './bai26';
import { fetchWithRetry } from './bai27';
import { queueProcess } from './bai29';
import { batchProcess } from './bai28';
import { bai30 } from './bai30';


// bài 1
helloAsync().then((message) => {
  console.log("\nBài 1\n" + message);
});

// bài 2
getNumber().then((number) => {
  console.log("\nBài 2\n" + number);
});

// bài 3
throwError()
  .then(() => {

  })
  .catch((error) => {
    console.log("\nBài 3\n" + error.message);
  });

// bài 4
getRandomNumber()
  .then((result) => {
    console.log("\nBài 4\nRandom number:", result);
  })
  .catch((error) => {
    console.log("\nBài 4\nError:", error.message);
  });

// bài 5
simulateTask(1000)
  .then(value => console.log("\nBài 5\n" + value))
  .catch(error => console.log("\nBài 5\n" + error))

// bài 6
runBai06()

// bài 7
runBai07();

// bài 8
promiseChain()

// bài 9
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterEvenNumbers(numbers)
  .then(result => {
    console.log("\nBài 9\nEven numbers:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// bài 10
runBai10(numbers)

// bài 11
async function runBai11() {
  const result = await helloAsyncAwait();
  console.log("\nBài 11");
  console.log(result);
}

runBai11();

// bài 12
runBai12()

// bài 13
runBai13()

// bài 14
const runBai14 = async () => {
  const result = await multiplyAfter1s(5);
  console.log("\nBài 14");
  
  console.log("Result:", result); 
};

runBai14();

// bài 15
runSequential()

// bài 16
runParallelTasks()

// bài 17
runForAwait()

// bài 18
runFetchUser()

// bài 19
runFetchUsers()

// bài 20
runFetchUserTimeout()

// bài 21
async function runBai21() {
  await getTodo()
}

runBai21()

// bài 22
async function runBai22() {
  await fetchAPIMultiple(3)
}

runBai22()

// bài 23
async function runBai23() {
  await getComplete()
}

runBai23()

// bài 24
async function runBai24() {
  await postData()
}

runBai24()

// bài 25
async function runBai25() {
  await downloadFile()
}

runBai25()

// bài 26
async function runBai26() {
  await setTimeout1()
}

runBai26()

// bài 27
async function runBai27() {
  console.log("\nBài 27", await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3));
}

runBai27()

// bài 28
async function runBai28() {
  await batchProcess()
}

runBai28()

// bài 29
async function runBai29() {
  await queueProcess()
}

runBai29()

// bài 30
async function runBai30() {
  await bai30()
}

runBai30()