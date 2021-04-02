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
      questionDB.add(question)
    },
    remove: (id) => {
      console.log('Remove question', id)
      setQuestions(questions.filter((question) => {
        return question.id !== id
      }))
      questionDB.remove(id)
    },
    repositoryID: () => { return localStorage.getItem("repositoryID") },
    questions: questions
  };

  return (
    <Layout>
      <Forms addQuestions={storage.add} />
      <QuestionSection storage={storage} />
    </Layout>
  );
};

export default Home;
