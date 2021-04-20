import ReactDOM from "react-dom";
import Repository from "../components/Repository";
import * as root from "../dataBase/root";

// =============================================================================== //
//    Change repository database data and insert elements directly into the DOM    //
// =============================================================================== //

/* ------------------------------------------------------------------------------- "/"

  localStorage: repositoryID, repository
  repository: { 
    id: Repository-(date)-(timestamp)-(random),
    name: Repository
  }

/" ------------------------------------------------------------------------------ */

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

export const build = (name) => {
  const id = createID();
  const repository = { id: id, name: name };
  create(repository);
  root.put("repository", repository, (element) => {
    console.info(`Build repository ${element.name} (${element.id})`);
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
    const prevElement = document.getElementById(prev).children[0].style;
    prevElement.border = "1px solid #575f66";
    prevElement.backgroundColor = "var(--back)";
  }
  const element = document.getElementById(id).children[0].style;
  element.border = "1px solid #0039aa";
  element.backgroundColor = "#06090c";
};

export const saveName = (id, name) => {
  root.put("repository", { id: id, name: name });
};

export const save = () => {
  let id = localStorage.getItem("repositoryID");
  let name = localStorage.getItem("repository");
  console.info('>> Save repository', name, id)
  if (!id) {
    id = createID();
    localStorage.setItem("repositoryID", id);
  }
  if (!name) { name = "Undefined" }
  root.put("repository", { id: id, name: name })
}

export const add = (init, name = "Undefined") => {
  if (!init) { save() }
  const id = createID()
  localStorage.setItem("repositoryID", id);
  document.getElementById("repository").value = name;
  root.put("repository", { id: id, name: name })
}

export const clear = () => {
  const id = localStorage.getItem("repositoryID");
  root.deleteIndex("question", "repositoryID", id)
}

const createID = () => {
  const D = new Date();
  const d = `0${D.getDate()}`.slice(-2);
  const m = `0${Number(D.getMonth()) + 1}`.slice(-2);
  const y = `${D.getHours()}`.slice(-2);
  const date = `${d}/${m}/${y}`;
  const random = Math.random().toString(36).slice(-8);
  return `Repository-${date}-${Date.now()}-${random}`;
}
