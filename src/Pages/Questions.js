import React from "react";

import { getIndex } from "../dataBase/root";
import { saveRepository } from "../dataBase";
import * as storage from '../assets/storage'

import QuestionSection from "../components/QuestionSection";
import Layout from "../components/Layout";
import Forms from "../components/Forms";

const QuestionsPage = () => {

  let repositoryID = localStorage.getItem("repositoryID");
  if (!repositoryID) { repositoryID = saveRepository(); }
  console.log("Connect with repository", repositoryID);

  getIndex("question", "repositoryID", repositoryID, (questions) => {
    for (const index in questions) {
      storage.create(questions[index])
    }
    console.log('Connect !')
  });

  return (
    <Layout>
      <Forms />
      <QuestionSection id='questionSection' />
    </Layout>
  );
};

export default QuestionsPage;
