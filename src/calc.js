import readlineSync from 'readline-sync';
import { runGameEngine } from './index.js';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
  }
  
  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const runCalcGame = () => {
  const gameRules = 'What is the result of the expression?';
  runGameEngine(gameRules, generateQuestion);
};

export default runCalcGame;