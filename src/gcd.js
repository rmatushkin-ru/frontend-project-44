import readlineSync from 'readline-sync';

// Функция для вычисления НОД (алгоритм Евклида)
const calculateGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
};

const runGcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    // Генерируем два случайных числа от 1 до 100
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    
    const correctAnswer = calculateGCD(num1, num2);
    
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    const userAnswerNumber = parseInt(userAnswer, 10);
    
    if (userAnswerNumber !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${userName}!`);
};

export default runGcdGame;