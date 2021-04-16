import React, { useEffect } from "react";

import { getIndex } from "../dataBase/root";
import * as storage from '../storage/question'
import * as repositoryStorage from '../storage/repository'

import LoadingCogs from "../Assets/LoadingCogs";
import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import Forms from "../components/Forms";

const QuestionsPage = () => {

  useEffect(() => {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) { repositoryID = repositoryStorage.add(true); }
    console.log("Connect with repository", repositoryID);
    getIndex("question", "repositoryID", repositoryID, (questions) => {
      let lastQuestion = questions[questions.length - 1]
      let number = 1 
      if (lastQuestion) { number = lastQuestion.number}
      localStorage.setItem('number', number)
      document.getElementById('number').value = number
      document.getElementById("questionSection").innerHTML = ''
      for (const index in questions) {
        storage.create(questions[index])
      }
    })
  })

  return (
    <Layout >
      <Forms />
      <QuestionSection id='questionSection'>
        <LoadingCogs />
      </QuestionSection>
    </Layout>
  );
};

export default QuestionsPage;
