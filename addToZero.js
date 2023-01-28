// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];

// Write your solution below:
const equalZero = (array) => {
  let answer = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
      } else if (array[i] + array[j] === 0) {
        answer = true;
      }
    }
  }
  console.log(answer);
};
equalZero(array);
