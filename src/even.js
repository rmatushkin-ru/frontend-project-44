import readlineSync from 'readline-sync'

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

    console.log(`Question: ${randomNumber}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runEvenGame
