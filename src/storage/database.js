import errorAlert from '../global/components/prompt/Error'
import * as root from "../dataBase/root";

// =============================================================================== //
//                                 Export database                                 //
// =============================================================================== //

export const exportDatabase = () => {
  try {
    root.getDatabase((repositories, questions) => {
      const headerRepositories = `Type: dataBase; Object: repository\n`
      let dataBase = convertRepositoriesToExport(repositories, headerRepositories);
      const headerQuestions = `||Type: dataBase; Object: question\n`
      dataBase += convertQuestionsToExport(questions, headerQuestions)
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

const convertRepositoriesToExport = (repositories, header) => {
  let cvsFile = header + "ID;Name\n";
  for (const i in repositories) { cvsFile += processRepository(repositories[i]); }
  return cvsFile
};

const processRepository = (r) => {
  return `${f(r.id)};${f(r.name)}\n`
}

const convertQuestionsToExport = (questions, header) => {
  let cvsFile = header + "ID;value;number;type;marker;time;repositoryID\n";
  for (const i in questions) { cvsFile += processQuestion(questions[i]); }
  return cvsFile
};

const processQuestion = (q) => {
  return `${f(q.id)};${f(q.value)};${f(q.number)};${f(q.attributes.type)};${f(q.attributes.marker)};${f(q.attributes.time)};${f(q.repositoryID)}\n`
}

const f = (value) => {
  let innerValue = ""
  if (value) { innerValue = value.toString() }
  let result = innerValue.replaceAll(';', '/&&::').replaceAll('||', '/&&[[')
  return result
}