import readlineSync from 'readline-sync';

const runGameEngine = (gameRules, generateQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateQuestion();
    
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${userName}!`);
};

export { runGameEngine };