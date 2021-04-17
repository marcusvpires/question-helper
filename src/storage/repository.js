import ReactDOM from "react-dom";
import Repository from "../components/Repository";
import * as root from "../dataBase/root";

export const create = (repository) => {
  let wrapper = document.getElementById(repository.id);
  if (!wrapper) {
    wrapper = document.createElement("li");
    wrapper.classList.add("RepositoryWrapper");
    wrapper.id = repository.id;
  }
  document.getElementById("repositorySection").appendChild(wrapper);
  ReactDOM.render(
    <Repository repository={repository} />,
    document.getElementById(repository.id)
  );
  wrapper.scrollIntoView({ behavior: "smooth" });
};

export const build = () => {
  const id = createID();
  const repository = { id: id, name: "Undefined" };
  create(repository);
  root.put("repository", repository, (element) => {
    console.log(`Build repository ${element.name} (${element.id})`);
  });
};

export const remove = async (id) => {
  document.getElementById(id).remove();
  root.remove("repository", id);
  root.deleteIndex("question", "repositoryID", id);
};

export const selectRepository = (id) => {
  const prev = localStorage.getItem("repositoryID");
  localStorage.setItem("repositoryID", id);
  if (prev) {
    console.log(prev);
    const prevElement = document.getElementById(prev).children[0].style;
    prevElement.border = "1px solid #575f66";
    prevElement.backgroundColor = "var(--back)";
  }
  const element = document.getElementById(id).children[0].style;
  element.border = "1px solid #0039aa";
  element.backgroundColor = "#06090c";
};

export const saveName = (id, name) => {
  console.log(id, name);
  root.put("repository", { id: id, name: name }, (element) => {
    console.log(`Save repository ${element.name} (${element.id})`);
  });
};

export const save = () => {
  let id = localStorage.getItem("repositoryID");
  let name = localStorage.getItem("repository");

  if (!id) {
    id = createID();
    localStorage.setItem("repositoryID", id);
  }
  if (!name) {
    name = "Undefined";
  }

  root.put("repository", { id: id, name: name }, (element) => {
    console.log(`Save repository ${element.name} (${element.id})`);
  });
};

export const add = (init) => {
  if (!init) {
    save();
  }

  const id = createID();
  localStorage.setItem("repositoryID", id);
  document.getElementById("repository").value = "Undefined";

  root.put("repository", { id: id, name: "Undefined" }, (element) => {
    console.log(`Add repository ${element.name} (${element.id})`);
  });
};

const createID = () => {
  const D = new Date();
  const d = `0${D.getDate()}`.slice(-2);
  const m = `0${Number(D.getMonth()) + 1}`.slice(-2);
  const y = `${D.getHours()}`.slice(-2);
  const date = `${d}/${m}/${y}`;
  const random = Math.random().toString(36).slice(-8);
  return `Repository-${date}-${Date.now()}-${random}`;
};

export const exportRepository = () => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const repository = localStorage.getItem("repository");
    const blob = convertQuestionsToExport(questions);
    saveFile(blob, repository)
  });
};

export const exportAll = () => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const repository = localStorage.getItem("repository");
    const blob = convertQuestionsToExport(questions);
    saveFile(blob, repository)
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

const convertQuestionsToExport = (questions) => {
  const repositoryID = localStorage.getItem("repositoryID");
  const repository = localStorage.getItem("repository");
  let cvsFile = `Type: repository, RepositoryID: ${repositoryID}, Repository: ${repository}\n`;
  cvsFile = cvsFile + "ID,value,number,type,marker,time,repositoryID\n";
  for (const i in questions) { cvsFile += processQuestion(questions[i]); }
  const blob = new Blob([cvsFile], { type: "text/cvs;charset=utf-8;" });
  return blob;
};

const processQuestion = (q) => {
  console.log('Question:', q)
  return `${f(q.id)};${f(q.value)};${f(q.number)};${f(q.attributes.type)};${f(q.attributes.marker)};${f(q.attributes.time)};${f(q.repositoryID)}\n`
}

const f = (value) => {
  let innerValue = ""
  if (value) { innerValue = value.toString() }
  let result = innerValue.replace(/"/g, '""')
  if (result.search(/("|,|\n)/g) >= 0) { result = '"' + result + '"' }
  return result
}

/*
{
  id:1618617326204-jn9wh0uaio,
  value:A,
  number:1,
  attributes:{
    type:alternative,
    marker:null,
    time:00:00
  },
  repositoryID:Repository-16/04/19-1618612417181-v517iz81
}
*/