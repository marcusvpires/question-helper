import * as root from "../dataBase/root";

// =============================================================================== //
//                                 Export database                                 //
// =============================================================================== //

export const exportDatabase = () => {
  root.getDatabase((repositories, questions) => {
    console.log('Repositories', repositories)
    console.log('Questions', questions)
    const headerRepositories = `Type: dataBase, Object: repository\n`
    let dataBase = convertRepositoriesToExport(repositories, headerRepositories);
    console.log('dataBase', dataBase)
    const headerQuestions = `Type: dataBase, Object: question\n`
    dataBase += convertQuestionsToExport(questions, headerQuestions)
    const blob = new Blob([dataBase], { type: "text/cvs;charset=utf-8;" });
    saveFile(blob, 'dataBase')
  });
}

export const exportRepository = () => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const repositoryID = localStorage.getItem("repositoryID");
    const repository = localStorage.getItem("repository");
    let header = `Type: repository, RepositoryID: ${repositoryID}, Repository: ${repository}\n`
    const blob = convertQuestionsToExport(questions, header);
    saveFile(blob, repository)
  });
};

export const exportAll = () => {
  root.getDatabase((repositories, questions) => {
    console.log('Repositories', repositories)
    console.log('Questions', questions)
    const headerRepositories = `Type: dataBase, Object: repository\n`
    let dataBase = convertRepositoriesToExport(repositories, headerRepositories);
    console.log('dataBase', dataBase)
    const headerQuestions = `Type: dataBase, Object: question\n`
    dataBase += convertQuestionsToExport(questions, headerQuestions)
    const blob = new Blob([dataBase], { type: "text/cvs;charset=utf-8;" });
    saveFile(blob, 'dataBase')
  });
};

const saveFile = (blob, filename) => {
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
  let cvsFile = header + "ID,value,number,type,marker,time,repositoryID\n";
  for (const i in questions) { cvsFile += processQuestion(questions[i]); }
  return cvsFile
};

const processQuestion = (q) => {
  return `${f(q.id)};${f(q.value)};${f(q.number)};${f(q.attributes.type)};${f(q.attributes.marker)};${f(q.attributes.time)};${f(q.repositoryID)}\n`
}

const f = (value) => {
  let innerValue = ""
  if (value) { innerValue = value.toString() }
  let result = innerValue.replace(/"/g, '""')
  if (result.search(/("|,|\n)/g) >= 0) { result = '"' + result + '"' }
  return result
}