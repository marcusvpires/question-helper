

function createCVS(numQuestions, numRepositories) {
  const names = ['Geografia', 'Matemática', 'Física', 'História', 'Literatura', 'Sociologia', 'Filosofia', 'Artes', 'Biologia', 'Química']
  const alternatives = ["A", "B", "C", "D", "E"];
  let cvs = ''
  for (let index = 0; index <= numRepositories; index++ ) {
    const id = createIDRepo()
    const name = names[(names.length * Math.random()) | 0]
    cvs += `(r);${id};${name}\n`

    for (let i = 0; i <= numQuestions; i++) {
      const qId = newID()
      const qValue = alternatives[(5 * Math.random()) | 0]
      cvs += `(q);${qId};${qValue};${i + 1};'alternative;;00:00;${id}\n`
    }
  }
  console.log(cvs)
}

const newID = () => {
  const random = Math.random().toString(36).slice(-10)
  return `Question-${Date.now()}-${random}`
}

const createIDRepo = () => {
  const D = new Date();
  const d = `0${D.getDate()}`.slice(-2);
  const m = `0${Number(D.getMonth()) + 1}`.slice(-2);
  const y = `${D.getHours()}`.slice(-2);
  const date = `${d}/${m}/${y}`;
  const random = Math.random().toString(36).slice(-8);
  return `Repository-${date}-${Date.now()}-${random}`;
}