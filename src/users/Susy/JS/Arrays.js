// 1>>>>>>>>>>>>>>>
function checkOnes(array) {
    const tenElem = array.slice(0, 10);
    const onesCount = tenElem.filter((num) => num === 1).length;
  
    return onesCount === 3;
}
// 2>>>>>>>>>>>>>>>
function cleanWord(word) {
  const symbols = ['@', '!', '(', ')', '[', '<', '>', ']', '{', '}'];
  symbols.forEach((symbol) => {
    word = word.split(symbol).join('');
  });
  return word;
}
// 3>>>>>>>>>>>>>>>
function removeNumberFromArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 666) {
      array.splice(i, 1);
    }
  }
}
// 4>>>>>>>>>>>>>>>>>
function findFirstNumberGreaterThan(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 1000) {
      return i;
    }
  }
  return -1;
}
// 5>>>>>>>>>>>>>>>>
function squarePositions(numbers) {
  const positions = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] = numbers[i] * numbers[i]) {
      positions.push(i);
    }
  }
  return positions;
}
// 6>>>>>>>>>>>>>>>>>>>>
function findLongestWordLength(words) {
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    if (wordLength > maxLength) {
      maxLength = wordLength;
    }
  }
  return maxLength;
}
// 7>>>>>>>>>>>>>>>>>>>>>>>
function checkAndSumNumbers(array) {
  let sum = 0;
  let isNumericArray = true;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      isNumericArray = false;
      break;
    }
    sum += array[i];
  }

  if (isNumericArray) {
    console.log(`Sum of numbers: ${sum}`);
  } else {
    console.log('The array is not numeric.');
  }
}
// 8>>>>>>>>>>>>>>>>>>>>>>>>>
function findAndPrintFirstString(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      console.log(`First string found: ${array[i]}`);
      return;
    }
  }

  console.log('No string found in the array.');
}
// 9>>>>>>>>>>>>>>>>>>>>>>
function findMiddleNumber(array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleNumber = array[middleIndex];
  return middleNumber;
}
// 10>>>>>>>>>>>>>>>>>>>>>>>>
function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
// 11>>>>>>>>>>>>>>>>>>>>>>
function filterArray(array) {
  return array.filter(item => typeof item === 'number' && item > 100)
  .filter(item => typeof item === 'string' && item.length > 4);
}
  