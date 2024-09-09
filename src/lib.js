import fs from 'fs'
import _ from 'underscore'

export const chooseRandom = (array, numItems) => {
  if(array.length === 0 || array.length === 1){
    return array
  }
  if(numItems < 1 || numItems > array.length){
    numItems = Math.floor(Math.random() * array.length)
  }
  const array2 = new Array(numItems).fill(0)
  const randomQuiz = array2.map(array => array[Math.floor(Math.random() * numItems)])
  return randomQuiz
}

export const createPrompt = ({numQuestions = 1, numChoices = 2} = {}) => {
  const array = []
  let questionNum = 1;
  let choiceNum = 1;
  for(let i = 0; i < numQuestions; i++){
    array.push({
      type: 'input',
      name: `question-${(questionNum)}`,
      message: `Enter question ${(questionNum)}`
    })

    for(let j = 0; j < numChoices; j++){
      array.push({
        type: 'input',
        name: `question-${(questionNum)}-choice-${(choiceNum)}`,
        message: `Enter answer choice ${(choiceNum)} for question ${(questionNum)}`
      })

      choiceNum++
    }

    questionNum++

  }
  return array
}

export const createQuestions = (object) => {
  const array = []
  /*let keys = Object.keys(object)
  let vals = Object.vals(object)
  for(let i = 0; i < object.length; i++){
    array.push({
      type: ''
    })
  }*/
  
  return array
}

export const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)))
  })

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err =>
      err ? reject(err) : resolve('File saved successfully')
    )
  })

  /*console.log(JSON.stringify(createQuestions({
    'question-1': 'Do you think you\'re ready for this?',
    'question-1-choice-1': 'Beyond ready!!!',
    'question-1-choice-2': 'Totally!',
    'question-2': 'Are you loving JS yet?',
    'question-2-choice-1': 'It\'s tubular!',
    'question-2-choice-2': 'Way rad man!'
  })))*/
 