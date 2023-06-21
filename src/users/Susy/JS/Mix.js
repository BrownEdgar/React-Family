// Ստեղծել ֆունկցիա,որը ստանում է թիվ,( Օրինակ 8 ) և վերադարձնում է 1-100 միջակայքից 8 հատ պատահական թիվը զանգվածի մեջ
function generateRandomNumbers(count) {
  let randomNumbers = Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
  return randomNumbers;
}

let numbers = generateRandomNumbers(8);
// Ստեղծել ֆունկցիա, որը ստանում է "num" 'number' փոփոխական և զանգվածով վերադարձնում է բոլոր "num" թվի բաժանարարները, բացի 1 թվանշանից 
//   `Օր․՝ foo(100) => [2,4,5,10,20,25,100]`

function getDivisors(num) {
  return Array.from({ length: num - 1 }, (_, index) => index + 2)
    .filter(divisor => num % divisor === 0);
}

// Ստեղծել isEmpty ֆունկցիան, որը ստանում է օբյեկտ և վերադարձնում է true/false եթե օբյեկտի մեջ չկա ոչ մի հատկություն

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// - Ստեղծել ֆունկցիա, որը ստուգում է թվի պարզ լինելը։1
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  return Array.from({ length: Math.floor(Math.sqrt(num)) }, (_, index) => index + 2)
    .every((divisor) => num % divisor !== 0);
}
// - Ստեղծել ֆունկցիա, որը ստուգում է թվի պարզ լինելը։2

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}
// Ստեղծել ֆունկցիա, որը ստանալով թիվ ազատվում է նրա կոտորակային մասից
function divideByAbsoluteValue(number) {
  return Math.floor(Math.abs(number));
}

// Ստեղծել ֆունկցիա, որը ստանալով պատահական թիվ, տպում է այդ թվի քանակով ՝javascript 2023՝արտահայտությունը

function printRandomCount(number) {
  const count = "javascript 2023";
  console.log(count.repeat(number));
}

// Մարդը 20կ/ժ արագությամբ 18 րոպեում բարձրանում է սարը, բայց նույն ճանապարհը իջնում է անդեն 60կ/ժ արագությամբ։Ստեղծել ֆունկցիա, որը ստանում է այդ թվերը foo(18,20,60)  և հաշվում է մարդու միջին արագությունը։ Պատասխանը պետք է լինի 30կ/ժ։

function calculateAverageSpeed(distance, initialSpeed, finalSpeed) {
  const times = [distance / initialSpeed, distance / finalSpeed];
  const averageSpeed = (2 * distance) / times.reduce((sum, time) => sum + time, 0);
  return averageSpeed;
}

const averageSpeed = calculateAverageSpeed(18, 20, 60);