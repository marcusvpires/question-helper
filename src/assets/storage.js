import ReactDOM from 'react-dom';
import { questionDB } from "../dataBase";
import * as root from '../dataBase/root'
import Question from '../components/Question'

export const clear = () => {
  document.getElementById('questionSection').innerHTML = ''
  localStorage.removeItem("number");
  localStorage.removeItem('text')
  questionDB.removeAll()
  console.log('Clear section')
}

export const toDate = (id) => {
  const time = new Date(id.split('-')[0] * 1000)
  const dd = String(time.getDate()).padStart(2, '0')
  const mm = String(time.getMonth() + 1).padStart(2, '0')
  return(dd + '/' + mm  + '/' + time.getFullYear())
}

export const question = {

  create: (question) => {
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
  },

  update: (question) => { 
    root.put("question", question)
  },

  new: (question) => {
    console.log(this)
    this.create(question)
    root.put("question", question)
  },

  remove: (id) => {
    document.getElementById(id).remove()
    questionDB.remove(id)  
  }

}

export const repository = {
  
}