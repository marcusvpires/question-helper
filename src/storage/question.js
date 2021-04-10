import ReactDOM from 'react-dom';
import Question from '../components/Question'
import * as root from '../dataBase/root'

export const create = async (question) => {
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

export const update = async (question) => { 
  root.put("question", question)
}

export const generate = async (question) => {
  console.log(this)
  create(question)
  root.put("question", question)
}

export const remove = async (id) => {
  document.getElementById(id).remove()
  root.remove("question", id) 
}

export const build = ( value, type ) => { try {
  const id = Date.now() + '-' + Math.random().toString(36).slice(-10)
  const repositoryID = localStorage.getItem('repositoryID')

  const number = localStorage.getItem('number')
  const timer = localStorage.getItem('timer')
  if ( type === 'text' ) { value = localStorage.getItem('text') }

  const question = {
    id: id,
    value: value,
    number: number,
    attributes: { type: type, marker: null, time: timer },
    repositoryID: repositoryID
  }

  nextNumber(number)

  generate(question)

} catch (err) {
  console.warn('Error on create question -', `value: ${value}, type: ${type}`, err )
  alert('Error on create question')
}}

const nextNumber = (number) => {
  const next = Number(number) + 1
  document.getElementById('number').value = next
  localStorage.setItem('number', next)
}