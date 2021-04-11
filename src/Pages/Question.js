import React, { useEffect } from "react";

import { getIndex } from "../dataBase/root";
import * as storage from '../storage/question'
import * as repositoryStorage from '../storage/repository'

import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import Forms from "../components/Forms";

const QuestionsPage = () => {

  useEffect(() => {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) { repositoryID = repositoryStorage.add(true); }
    console.log("Connect with repository", repositoryID);
    getIndex("question", "repositoryID", repositoryID, (questions) => {
      for (const index in questions) {
        storage.create(questions[index])
      }
    })
  })

  return (
    <Layout >
      <Forms />
      <QuestionSection id='questionSection' />
    </Layout>
  );
};

export default QuestionsPage;
