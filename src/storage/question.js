import ReactDOM from 'react-dom';
import Question from '../components/Question'
import * as root from '../dataBase/root'

export const create = (question) => {
  let wrapper = document.getElementById(question.id)
  if (!wrapper) {
    wrapper = document.createElement('li')
    wrapper.classList.add('QuestionWrapper')
    wrapper.id = question.id
  }
  const marker = question.attributes.marker
  if (marker) {
    wrapper.style.backgroundColor = `var(--${marker})`
    wrapper.style.border = `1px solid var(--${marker})`
  }
  document.getElementById('questionSection').appendChild(wrapper)
  ReactDOM.render(<Question question={question} />, document.getElementById(question.id))
  wrapper.scrollIntoView({ behavior: "smooth" })
}

export const update = (question) => { 
  root.put("question", question)
}

export const generate = (question) => {
  console.log(this)
  create(question)
  root.put("question", question)
}

export const remove = (id) => {
  document.getElementById(id).remove()
  root.remove("question", id) 
}