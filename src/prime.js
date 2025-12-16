import readlineSync from 'readline-sync';

// Функция для проверки, является ли число простым
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  
  // Проверяем делители от 2 до квадратного корня из числа
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

const runPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    // Генерируем случайное число от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Определяем правильный ответ
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    // Приводим ответ пользователя к нижнему регистру для сравнения
    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${userName}!`);
};

export default runPrimeGame;