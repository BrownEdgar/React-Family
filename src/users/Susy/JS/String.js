// 1>>>>>>>>>>>>>>>>>>>
function neArr(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    array.push(sum);
    return array;
  }
// 2>>>>>>>>>>>>>>>>>>>>>
function removeVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!vowels.includes(char.toLowerCase())) {
        result += char;
      }
    }
    return result;
}
// 3>>>>>>>>>>>>>>>>>>>>>
function removeNums(text){
    const nums = [1,2,3,4,5,6,7,8,9,0]
    let result = '';
    for(let i = 0; i<text.length;i++){
        const number = text[i]
        if(isNaN(parseInt(number))){
            result+=number;
        }
    }
    return result;
}
// 4>>>>>>>>>>>>>>>>>>>>>>>
function printChangedString(text) {
    const words = text.split(' ');
    const firstWord = words[0].toUpperCase() ;
    const changed = firstWord + text.slice(words[0].length);
  
    console.log(changed);
}
// 5>>>>>>>>>>>>>>>>>>>>>>>
function printLastWord(text) {
  const words = text.split(' ');
  const lastWord = words[words.length-1] ;
  console.log(lastWord);
}
// 6>>>>>>>>>>>>>>>>>>>>>>>>>>>
function printEverySecondWord(text) {
  for (let i = 1; i < text.length; i += 2) {
    console.log(text[i]);
  }
}
// 7>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function replaceFirstThreeA(text) {
  return text.replace(/a/g, 'x');
}
// 8>>>>>>>>>>>>>>>>>>>>>>>>
function includesAllDigits(text) {
  const allDigits = /^[0-9]/;
  return allDigits.test(text);
}
// 9>>>>>>>>>>>>>>>>>>>>>>>>
function countWords(text) {
  const words = text.split(' ');
  return words.length;
}
// 10>>>>>>>>>>>>>>>>>>>>>>>>
let alphabet = '';
for (let i = 97; i <= 122; i++) {
  alphabet += String.fromCharCode(i);
}
// 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function reverseWord(word) {
  let reversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
