import ReactDOM from 'react-dom';
import { questionDB } from "../dataBase";
import Question from '../components/Question'

export const create = (question) => {
  try { ReactDOM.render(<Question question={question} />, document.getElementById(question.id)) }
  catch {
    const wrapper = document.createElement('li')
    wrapper.classList.add('QuestionWrapper')
    wrapper.id = question.id

    const marker = question.attributes.marker
    if (marker) {
      wrapper.style.backgroundColor = `var(--${marker})`
      wrapper.style.border = `1px solid var(--${marker})`
    }

    document.getElementById('questionSection').appendChild(wrapper)
    ReactDOM.render(<Question question={question} />, document.getElementById(question.id))
    wrapper.scrollIntoView({ behavior: "smooth" })
  }
}

export const save = (question) => {
  create(question)
  questionDB.add(question);
}

export const update = (question) => {
  questionDB.add(question);
}

export const remove = (id) => {
  document.getElementById(id).remove()
  questionDB.remove(id)
  console.log('Remove', id, 'question')
}

export const clear = () => {
  document.getElementById('questionSection').innerHTML = ''
  localStorage.removeItem("number");
  localStorage.removeItem('text')
  questionDB.removeAll()
  console.log('Clear section')
}