import ReactDOM from "react-dom";

import errorAlert from '../global/components/prompt/Error'
import Question from "../components/Question";
import CopyQuestions from "../components/CopyQuestions";

import * as root from "../dataBase/root";

// =============================================================================== //
//     Change question database data and insert elements directly into the DOM     //
// =============================================================================== //

/* ------------------------------------------------------------------------------- "/"

  question: {
    id: Question-(timestamp)-(random),
    value: ----,
    number: ---,
    attributes:
    {
      type: [ alternative, text ],
      marker: [ marker, correct, erro ],
      time: --:--,
    },
    repositoryID: Repository-(date)-(timestamp)-(random)
  }

/" ------------------------------------------------------------------------------ */

export const create = async (question) => {
  try {
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
  if (window.innerWidth > 400) {
    wrapper.scrollIntoView({ behavior: "smooth" });
  }
  } catch (ev) {
    const title = 'Error on create question'
    errorAlert('errorRemove', {
      title: title,
      desc: 'You may want to reload the page and try export database again.'
    })
    console.error(title, ev)
  }
};

export const update = async (question) => {
  root.put("question", question);
};

export const generate = async (question) => {
  create(question);
  root.put("question", question);
};

export const remove = async (id) => {
  document.getElementById(id).remove();
  root.remove("question", id);
};

export const build = (type, value) => {
  try {
    const id = newID()
    const repositoryID = localStorage.getItem("repositoryID");

    const number = localStorage.getItem("number");
    const timer = localStorage.getItem("timer");
    if (type === "text") {
      document.getElementById("text").value = "";
      value = localStorage.getItem("text");
      localStorage.setItem("text", "");
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
  } catch (ev) {
    const title = 'Error on build question'
    errorAlert('errorBuild', {
      title: title,
      desc: 'You may want to reload the page and try build question again.'
    })
    console.error(title, ev)
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
  document.getElementById("number").value = 1;
  document.getElementById("text").value = "";
  document.getElementById("questionSection").innerHTML = "";
  localStorage.setItem("number", 1);
  localStorage.setItem("text", "");
};

export const displayCopy = () => {
  try {
  let container = document.getElementById("copyContainer");
  if (container) { container.remove() }
  else {
    container = document.createElement("div");
    container.id = "copyContainer";
    document.getElementById("root").appendChild(container);
    ReactDOM.render(
      <CopyQuestions />,
      document.getElementById("copyContainer")
    )
  }
  } catch (ev) {
    const title = 'Error on display copy config'
    errorAlert('errorDisplayQuestion', {
      title: title,
      desc: 'You may want to reload the page and try display question config again.'
    })
    console.error(title, ev)
  }
};

export const copyQuestions = (format) => {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const result = formatToCopy(format, questions);
    document.getElementById("copyResult").value = result;
  });
};

export const QuickCopy = () => {
  try {
  const repositoryID = localStorage.getItem("repositoryID");
  root.getIndex("question", "repositoryID", repositoryID, (questions) => {
    const result = formatToCopy("Questão [number] - [value]", questions);
    const textarea = document.createElement("textarea");
    textarea.classList.add("copyTextarea");
    textarea.value = result;
    document.getElementById("root").appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  });
  } catch (ev) {
    const title = 'Error on copy questions'
    errorAlert('errorBuild', {
      title: title,
      desc: 'You may want to reload the page and try copy questions again.'
    })
    console.error(title, ev)
  }
};

export const formatToCopy = (format, questions) => {
  let result = "";
  for (const index in questions) {
    const q = questions[index];
    let str = format;
    const matched = str.match(/\[.+?\]/g);
    for (const i in matched) {
      const key = matched[i].replace("[", "").replace("]", "");
      try {
        str = str.replaceAll(matched[i], q[key]);
      } catch (e) {
        console.warn(`${matched[i]} is an invalid key`, e);
      }
    }
    result += str + "\n";
  }
  return result;
};


// =============================================================================== //
//                                     Assets                                      //
// =============================================================================== //

const newID = () => {
  const random = Math.random().toString(36).slice(-10)
  return `Question-${Date.now()}-${random}`
}