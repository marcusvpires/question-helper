import ReactDOM from 'react-dom';
import * as dataBase from '../dataBase/root'

import Question from '../components/Question'
import Repository from "../components/Repository";

// ========================================================= //
//                          Assets                           //
// ========================================================= //

const tryCatch = (msg, par, func) => {
  try { func(...par) }
  catch (e) {
    alert("Could not", msg);
    console.warn("Could not", msg,  '-', par)
    console.warn('Error', e)
  }
}

<<<<<<< HEAD
export const createID = (identifier) => {
  const random = Math.random().toString(36).slice(-8);
  return Date.now() + "-" + identifier + '-' + random;
=======
export const save = (question) => {
  create(question)
  questionDB.add(question);
}

export const update = (question) => {
  questionDB.add(question);
>>>>>>> parent of 88a7013 (Auto update questions)
}


export const toDate = (id) => {
  const time = new Date(id.split('-')[0] * 1000)
  const dd = String(time.getDate()).padStart(2, '0')
  const mm = String(time.getMonth() + 1).padStart(2, '0')
  return(dd + '/' + mm  + '/' + time.getFullYear())
}

export const toTime = (timer) => {
  const getSeconds = `0${(timer % 60)}`.slice(-2)
  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)
  return `${getMinutes}:${getSeconds}`
}

// ========================================================= //
//                        Repository                         //
// ========================================================= //

export const repository =  {

  save: async (repository) => { tryCatch('save repository', ['repository', repository], dataBase.put) },

  remove: async (id) => { tryCatch('remove repository', ['repository', id], dataBase.remove()) },

  clear: async (id) => { tryCatch('clear repository', ['repository', id], (id) => {})},

  questions: async (id) => { tryCatch('display questions in repository', [id], (id) => {
    document.getElementById('questionSection').innerHTML = ''
    dataBase.getIndex("question", "repositoryID", id, (questions) => {
      for (const index in questions) { question.add(questions[index]) }
    })
  })},

  display: async (repository, selectRepository, setSelectRepository) => { tryCatch('add repository',
    [repository, selectRepository, setSelectRepository], (repository, selectRepository, setSelectRepository) => {
    let wrapper = document.getElementById(repository.id)
    if (!wrapper) { 
      wrapper = document.createElement("li")
      wrapper.classList.add("RepositoryWrapper")
      wrapper.id = repository.id
      document.getElementById("repositorySection").appendChild(wrapper)
    }
    ReactDOM.render(
      <Repository repository={repository} selectRepository={selectRepository} setSelectRepository={setSelectRepository} />,
      document.getElementById(repository.id)
    )
    wrapper.scrollIntoView({ behavior: "smooth" });
  })},


  add: async (repository, selectRepository, setSelectRepository) => { tryCatch('add repository',
    [repository, selectRepository, setSelectRepository], (repository, selectRepository, setSelectRepository) => {
    repository.display(repository, selectRepository, setSelectRepository)
    dataBase.put('repository', repository)
  })}

}

// ========================================================= //
//                          Question                         //
// ========================================================= //

export const question = {

  save: async (question) => { tryCatch('save question', ['question', question], dataBase.put) },

  remove: async (id) => { tryCatch('remove question', ['question', id], dataBase.remove) },

  add: async (question) => { tryCatch('add question',
    [question], (question) => {
    let wrapper = document.getElementById(question.id)
    if (!wrapper) { 
      wrapper = document.createElement("li")
      wrapper.classList.add("QuestionWrapper")
      wrapper.id = question.id
      document.getElementById("questionSection").appendChild(wrapper)
      const marker = question.attributes.marker
      if (marker) {
        wrapper.style.backgroundColor = `var(--${marker})`
        wrapper.style.border = `1px solid var(--${marker})`
      }
    }
    ReactDOM.render(
      <Question question={question} />,
      document.getElementById(question.id)
    )
    wrapper.scrollIntoView({ behavior: "smooth" });
    dataBase.put('question', question)
  })}
}