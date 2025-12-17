import readlineSync from 'readline-sync'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    // currentElement = start + index * step
    const currentElement = start + i * step
    progression.push(currentElement)
  }
  return progression
}

const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('What number is missing in the progression?')
  const roundsCount = 3
  for (let round = 0; round < roundsCount; round += 1) {
    const progressionLength = Math.floor(Math.random() * 6) + 5
    const start = Math.floor(Math.random() * 20) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const progression = generateProgression(start, step, progressionLength)
    const hiddenIndex = Math.floor(Math.random() * progressionLength)
    const correctAnswer = start + hiddenIndex * step
    const progressionWithHidden = progression.map((num, index) => {
      if (index === hiddenIndex) {
        return '..'
      }
      return num
    }).join(' ')
    console.log(`Question: ${progressionWithHidden}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export default runProgressionGame
