import React, { useEffect } from "react";

import { getIndex } from "../dataBase/root";
import { repositoryDB } from "../dataBase";
import * as questionStorage from '../storage/question'

import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import Forms from "../components/Forms";

const QuestionsPage = () => {

  useEffect(() => {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) { repositoryID = repositoryDB.add(); }
    console.log("Connect with repository", repositoryID);
    getIndex("question", "repositoryID", repositoryID, (questions) => {
      for (const index in questions) {
        questionStorage.create(questions[index])
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
