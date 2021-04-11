import ReactDOM from 'react-dom';
import Repository from "../components/Repository";
import * as root from '../dataBase/root'

export const create = (repository, selectRepository, setSelectRepository) => {
  let wrapper = document.getElementById(repository.id)
  if (!wrapper) {
    wrapper = document.createElement('li')
    wrapper.classList.add('RepositoryWrapper')
    wrapper.id = repository.id
  }
  document.getElementById('repositorySection').appendChild(wrapper)
  ReactDOM.render(<Repository
    repository={repository}
    selectRepository={selectRepository}
    setSelectRepository={setSelectRepository} />, document.getElementById(repository.id))
  wrapper.scrollIntoView({ behavior: "smooth" })
}

export const save = () => {
  let id = localStorage.getItem("repositoryID")
  let name = localStorage.getItem("repository")

  if (!id) { id = createID(); localStorage.setItem("repositoryID", id) }
  if (!name) { name = 'Undefined' }

  root.put("repository", { id: id, name: name }, (element) => {
    console.log(`Save repository ${element.name} (${element.id})`);
  });
}

export const add = (init) => {
  if (!init) { save() }

  const id = createID()
  localStorage.setItem("repositoryID", id)
  document.getElementById('repository').value = 'Undefined'

  root.put("repository", { id: id, name: 'Undefined' }, (element) => {
    console.log(`Build repository ${element.name} (${element.id})`);
  });
}

const createID = () => {
  const D = new Date()
  const d = `0${D.getDate()}`.slice(-2)
  const m = `0${(Number(D.getMonth()) + 1)}`.slice(-2)
  const y = `${D.getHours()}`.slice(-2)
  const date = `${d}/${m}/${y}`
  const random = Math.random().toString(36).slice(-8)
  return `Repository-${date}-${Date.now()}-${random}`
}