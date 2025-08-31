
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