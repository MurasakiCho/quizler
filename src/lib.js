import fs from 'fs'

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

export const createPrompt = () => {
  // TODO implement createPrompt
}

export const createQuestions = () => {
  // TODO implement createQuestions
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

  const array = [0, 0 ,0]
  const numItems = 2
  
  console.log(chooseRandom(array, numItems))
