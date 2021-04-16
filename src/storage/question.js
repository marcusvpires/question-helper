import ReactDOM from "react-dom";
import Question from "../components/Question";
import CopyQuestions from "../components/CopyQuestions";
import * as root from "../dataBase/root";

export const create = async (question) => {
  let wrapper = document.getElementById(question.id);
  if (!wrapper) {
    wrapper = document.createElement("li");
    wrapper.classList.add("QuestionWrapper");
    wrapper.id = question.id;
  }
  const marker = question.attributes.marker;
  if (marker) {
    wrapper.style.backgroundColor = `var(--${marker})`;
    wrapper.style.border = `1px solid var(--${marker})`;
  }
  document.getElementById("questionSection").appendChild(wrapper);
  ReactDOM.render(
    <Question question={question} />,
    document.getElementById(question.id)
  );
  wrapper.scrollIntoView({ behavior: "smooth" });
};

export const update = async (question) => {
  root.put("question", question);
};

export const generate = async (question) => {
  console.log(this);
  create(question);
  root.put("question", question);
};

export const remove = async (id) => {
  document.getElementById(id).remove();
  root.remove("question", id);
};

export const build = (type, value) => {
  try {
    const id = Date.now() + "-" + Math.random().toString(36).slice(-10);
    const repositoryID = localStorage.getItem("repositoryID");

    const number = localStorage.getItem("number");
    const timer = localStorage.getItem("timer");
    if (type === "text") {
      document.getElementById("text").value = "";
      value = localStorage.getItem("text");
      localStorage.setItem("text", "");
      console.log("Value:", value);
    }

    const question = {
      id: id,
      value: value,
      number: number,
      attributes: { type: type, marker: null, time: formatTime(timer) },
      repositoryID: repositoryID,
    };

    nextNumber(number);
    localStorage.setItem("timer", 0);

    generate(question);
  } catch (err) {
    console.warn(
      "Error on create question -",
      `value: ${value}, type: ${type}`,
      err
    );
    alert("Error on create question");
  }
};

const nextNumber = (number) => {
  const next = Number(number) + 1;
  document.getElementById("number").value = next;
  localStorage.setItem("number", next);
};

const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  return `${getMinutes}:${getSeconds}`;
};

export const clearForm = () => {
  document.getElementById("questionSection").innerHTML = "";
  document.getElementById("number").value = 1;
  document.getElementById("text").value = "";
  localStorage.setItem("number", 1);
  localStorage.setItem("text", "");
};

export const displayCopy = () => {
  let container = document.getElementById('copyContainer')
  if (container) {
    console.log(container)
    container.remove()
  } else {
    container = document.createElement('div')
    container.id = 'copyContainer'
    document.getElementById('root').appendChild(container)
    console.log(container)
    ReactDOM.render(
      <CopyQuestions />,
      document.getElementById('copyContainer')
    );
  }
}

export const copyQuestions = (format) => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const result = formatToCopy(format, questions)
    document.getElementById('copyResult').value = result
  })
}

export const QuickCopy = () => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const result = formatToCopy('Questão [number] - [value]', questions)
    console.log(result)
    const textarea = document.createElement('textarea')
    textarea.classList.add('copyTextarea')
    textarea.value = result
    document.getElementById('root').appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  })
}

export const formatToCopy = (format, questions) => {
  let result = ''
  for (const index in questions) {
    const q = questions[index];
    let str = format
    const matched = str.match(/\[.+?\]/g)
    for (const i in matched) {
      const key = matched[i].replace('[', '').replace(']', '')
      try { str = str.replaceAll(matched[i], q[key]) }
      catch (e) { console.log(e); alert(`${matched[i]} is an invalid key`)
      }
    }
  result += str + '\n'  
  }
  return result
}