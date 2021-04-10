import { generate } from "../../storage/question";

const createQuestion = (number, type, value, timer) => {
  try {
    const id = Date.now() + "-" + Math.random().toString(36).slice(-10);
    const repositoryID = localStorage.getItem("repositoryID");

    const formatTime = (timer) => {
      const getSeconds = `0${timer % 60}`.slice(-2);
      const minutes = `${Math.floor(timer / 60)}`;
      const getMinutes = `0${minutes % 60}`.slice(-2);

      return `${getMinutes}:${getSeconds}`;
    };

    const question = {
      id: id,
      value: value,
      number: number,
      attributes: { type: type, marker: null, time: formatTime(timer) },
      repositoryID: repositoryID,
    };

    generate(question);
  } catch (error) {
    console.warn(
      "Error on create question -",
      { number: number, value: value, type: type, time: timer },
      error
    );
    alert("Error on create question");
  }
};

export default createQuestion;
