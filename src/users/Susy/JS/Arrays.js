// 1>>>>>>>>>>>>>>>
function checkOnes(array) {
    const tenElem = array.slice(0, 10);
    const onesCount = tenElem.filter((num) => num === 1).length;
  
    return onesCount === 3;
}
// 2>>>>>>>>>>>>>>>
function cleanWord(word) {
  return word.replace(/\W/g,"");
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
  const d = numbers.map(elem => {
    if(typeof elem === "number") {
      return elem * elem
    }
    return elem
  })
}
// 6>>>>>>>>>>>>>>>>>>>>
function findLongestWordLength(words) {
  const x = Math.max(...words.map(elem => elem.length))
}
// 7>>>>>>>>>>>>>>>>>>>>>>>
function checkAndSumNumbers(array) {
  const x = array.every(elem => typeof elem === "number")
  if(x) {
    array.reduce((a,b) => a + b)
  }
}
// 8>>>>>>>>>>>>>>>>>>>>>>>>>
function findAndPrintFirstString(array) {
  const x = array.filter(elem => typeof elem === "string")
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
  