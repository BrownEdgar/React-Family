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

	return text.replace(/[aeuio]/g, "");
}
// 3>>>>>>>>>>>>>>>>>>>>>
function removeNums(text){

	return text.replace(/[0-9]/g, '');
}
// 4>>>>>>>>>>>>>>>>>>>>>>>
function printChangedString(text) {
    const words = text.split(' ');
		 words[0] = words[0].toUpperCase() ;
	return words.join(' ')
}
// 5>>>>>>>>>>>>>>>>>>>>>>>
function printLastWord(text) {
  const words = text.split(' ');
  const lastWord = words.at(-1) ;
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

	return text.split(' ').length;
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
