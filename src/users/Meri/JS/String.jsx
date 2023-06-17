import React, { useState } from "react";

export default function String() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const [sentence, setSentence] = useState("");
  const [withoutVowels, setWithoutVowels] = useState("");

  const [sentnum, setSentNum] = useState("");
  const [withoutNumbers, setWithoutNumbers] = useState("");

  const [capitalized, setCapitalized] = useState("");
  const [sent, setSent] = useState("");

  const [sentInput, setSentInput] = useState("");
  const [secondWords, setSecondWords] = useState([]);

  const [includInp, setIncludInp] = useState("");
  const [inclSentNumber, setInclSentNumber] = useState(false);

  const [leng, setLeng] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const [alphabet, setAlphabet] = useState("");

  const [word, setWord] = useState("");
  const [reverseWord, setReverseWord] = useState("");

  function calculate() {
    const sum = numbers.reduce((prev, next) => prev + next, 0);
    setNumbers([...numbers, sum]);
  }

  const changeWithoutVowels = (event) => {
    setSentence(event.target.value);
  };
  const removeVowels = () => {
    const vowels = ["e", "u", "i", "o", "a", "E", "U", "I", "O", "A"];
    const newSentence = sentence
      .split("")
      .filter((part) => !vowels.includes(part))
      .join("");
    setWithoutVowels(newSentence);
  };

  const handleInpValue = (event) => {
    setSentNum(event.target.value);
  };
  const removeNumbers = () => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newsent = sentnum.split(" ").filter((word) => numbers.includes(parseInt(word))).join(", ");
    setWithoutNumbers(newsent);
  };

  const firstWord = (event) => {
    setSent(event.target.value);
  };
  const capitalizeFirstWord = () => {
    const words = sent.trim().split(" ");
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    setCapitalized(words.join(" "));
  };

  const handleSecondWords = (event) => {
    setSentInput(event.target.value);
  };
  const getSecondWords = () => {
    const words = sentInput.trim().split(" ");
    const secondwords = [];
    for (let i = 1; i < words.length; i += 2) {
      secondwords.push(words[i]);
    }
    setSecondWords(secondwords);
  };

  const handleWord = (event) => {
    setIncludInp(event.target.value);
  };
  const checkNumbers = () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const word = includInp.trim();
    const result = arr.every((num) => word.includes(num.toString()));
    setInclSentNumber(result);
  };

  const lengValue = (event) => {
    setLeng(event.target.value);
  };
  const countWord = () => {
    const words = leng.trim().split(" ");
    setWordCount(words.length);
  };

  const handleAlphabet = () => {
    let alph = "";
    for (let i = 97; i <= 122; i++) {
      alph += String.fromCharCode(i);
    }
    setAlphabet(alph);
  };

  const handleinput = (event) => {
    setWord(event.target.value);
  };
  const reversWord = () => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    setReverseWord(reverseWord);
  };

  return (
    <div>
      <button onClick={calculate}>Calculate sum and push in array</button>
      <p>{numbers.join(", ")}</p>
      <br />
      <hr />

      <input type="text" value={sentence} onChange={changeWithoutVowels} />
      <button onClick={removeVowels}>Remove Vowels</button>
      <p>{withoutVowels}</p>
      <br />
      <hr />

      <input type="text" value={sentnum} onChange={handleInpValue} />
      <button onClick={removeNumbers}>Sentence without numbers</button>
      <p>{withoutNumbers}</p>
      <br />
      <hr />

      <input type="text" value={sent} onChange={firstWord} />
      <button onClick={capitalizeFirstWord}>Capitalize first word</button>
      <p>{capitalized}</p>
      <br />
      <hr />

      <input type="text" value={sentInput} onChange={handleSecondWords} />
      <button onClick={getSecondWords}>Get Second Word</button>
      <p>{secondWords.join(", ")}</p>
      <br />
      <hr />

      <input type="text" value={includInp} onChange={handleWord} />
      <button onClick={checkNumbers}>Check Numbers</button>
      <p>{` ${inclSentNumber}`}</p>
      <br />
      <hr />

      <input type="text" value={leng} onChange={lengValue} />
      <button onClick={countWord}>word count</button>
      <p>{wordCount}</p>
      <hr />
      <br />

      <button onClick={handleAlphabet}>Write Alphabet</button>
      <p>{alphabet}</p>
      <hr />
      <br />

      <input type="text" value={word} onChange={handleinput} />
      <button onClick={reversWord}>Reverse</button>
      <p>{reverseWord}</p>
    </div>
  );
}
