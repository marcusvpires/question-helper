import React, { useState } from "react";
import { getIndex } from "../dataBase/root";
import { saveRepository, questionDB } from "../dataBase";
import Layout from "../components/Layout";
import Forms from "../components/Forms";
import QuestionSection from "../components/QuestionSection";

const Home = () => {
  const [questions, setQuestions] = useState(() => {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) {
      repositoryID = saveRepository();
    }
    console.log("Connect with repository", repositoryID);
    getIndex("question", "repositoryID", repositoryID, (questions) => {
      console.log('Connect !')
      setQuestions(questions);
    });

    const loading = localStorage.getItem('loading').split(';')
    const before = []
    for (const index in loading) {
      const question = loading[index].split('&')
      let type = 'alternative'
      if (question[0] === 't') { type = 'text'; }
      before.push({
        id: index,
        value: question[1],
        number: question[2],
        attributes: { type: type, marker: null },
        repositoryID: repositoryID
      })
    }
    return before;
  });

  const setLoading = async () => {
    let loading = ''
    for (const index in questions) { 
      if (questions[index].attributes.type === 'text') {loading += 't&' + questions[index].value.slice(0, 30) + '&' + questions[index].number + ';'}
      else { loading += 'a&' + questions[index].value + '&' + questions[index].number + ';' }
    }
    localStorage.setItem('loading', loading.slice(0, -1))
  }

  const storage = {
    add: (question) => {
      setQuestions([...questions, question]);
      questionDB.add(question);
      setLoading()
    },
    save: (question) => {
      questionDB.add(question);
    },
    remove: (id) => {
      console.log("Remove question", id);
      setQuestions(
        questions.filter((question) => {
          return question.id !== id;
        })
      );
      questionDB.remove(id);
      setLoading()
    },
    changeMarker: (id, marker) => {
      const newQuestions = []
      for (const index in questions) {
        const question = questions[index]
        if (question.id === id) { 
          if ( question.attributes.marker === marker ) {
            question.attributes.marker = null
            questionDB.add(question);
          } else {
            question.attributes.marker = marker
            questionDB.add(question);
          }
        }
        newQuestions.push(question)
      } 
      setQuestions(newQuestions)
    },
  };

  return (
    <Layout>
      <Forms addQuestions={storage.add} />
      <QuestionSection
        questions={questions}
        remove={storage.remove}
        changeMarker={storage.changeMarker}
        saveQuestion={storage.save}
      />
    </Layout>
  );
};

export default Home;
