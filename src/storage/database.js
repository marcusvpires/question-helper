import errorAlert from '../global/components/prompt/Error'
import * as root from "../dataBase/root";

// =============================================================================== //
//                                 Export database                                 //
// =============================================================================== //

export const exportDatabase = () => {
  try {
    root.getDatabase((repositories, questions) => {
      let dataBase = convertRepositoriesToExport(repositories);
      dataBase += convertQuestionsToExport(questions)
      const blob = new Blob([dataBase], { type: "text/cvs;charset=utf-8;" });
      saveFile(blob, 'dataBase')
    });
  } catch (ev) {
    const title = 'Error on export database'
    errorAlert('errorRemove', {
      title: title,
    })
    console.warn(title, ev)
  }
}

const saveFile = (blob, filename) => {
  try {
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename + '.cvs');
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename + '.cvs');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  } catch (ev) {
    const title = 'Error on save file'
    errorAlert('errorSaveFile', {
      title: title,
    })
    console.warn(title, ev)
  }
}

const convertRepositoriesToExport = (repositories) => {
  let cvsFile = '';
  for (const i in repositories) { cvsFile += processRepository(repositories[i]); }
  return cvsFile
};

const processRepository = (r) => {
  return `(r);${f(r.id)};${f(r.name)}\n`
}

const convertQuestionsToExport = (questions) => {
  let cvsFile = '';
  for (const i in questions) { cvsFile += processQuestion(questions[i]); }
  return cvsFile
};

const processQuestion = (q) => {
  return `(q);${f(q.id)};${f(q.value)};${f(q.number)};${f(q.attributes.type)};${f(q.attributes.marker)};${f(q.attributes.time)};${f(q.repositoryID)}\n`
}

const f = (value) => {
  let innerValue = ""
  if (value) { innerValue = value.toString() }
  let result = innerValue.replaceAll(';', '/&&::').replaceAll('\n', '/&&nn')
  return result
}


// =============================================================================== //
//                                 Import database                                 //
// =============================================================================== //

export const importDatabase = (info, csv) => {
  const arr = csv.split('\n')
  const questions = []
  const repositories = []
  for (const index in arr) {
    const row = arr[index].split(';')
    if (row[0] === '(q)') { questions.push(formatQuestion(row)) }
    else if (row[0] === '(r)') { repositories.push(formatRepository(row)) }
  }

  const sum = repositories.length
  const length = questions.length + sum

  root.putMany('repository', repositories, (index, length) => {
    console.log(`[${index}-${length}] repository`)
  }, [length])
  root.putMany('question', questions, (index, length, sum) => {
    console.log(`[${index + sum + 1}-${length}] repository`)
  }, [length, sum])
}

export const formatQuestion = (arr) => {
  const question = {
    id: arr[1],
    value: arr[2],
    number: arr[3],
    attributes:
    {
      type: arr[4],
      marker: arr[5],
      time: arr[6],
    },
    repositoryID: arr[7]
  }
  return question
}

export const formatRepository = (arr) => {
  const repository = { 
    id: arr[1],
    name: arr[2]
  }
  return repository
}