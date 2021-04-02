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
      setQuestions(questions);
    });
    return [];
  });

  const storage = {
    add: (question) => {
      setQuestions([...questions, question]);
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
      />
    </Layout>
  );
};

export default Home;
