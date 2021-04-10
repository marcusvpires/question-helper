import React, { useState, useEffect } from "react";

import { getIndex } from "../dataBase/root";
import { repositoryDB } from "../dataBase";
import * as questionStorage from '../storage/question'

import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import Forms from "../components/Forms";
import useForm from '../components/Forms/useForm'

const QuestionsPage = () => {

  const form = useForm()

  const [repository, setRepository] = useState(() => {
    const repository = localStorage.getItem('repository')
    if (repository) { return repository }
    return "Undefined"
  });

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
    <Layout repository={repository} setRepository={setRepository} form={form}  >
      <Forms form={form} />
      <QuestionSection id='questionSection' />
    </Layout>
  );
};

export default QuestionsPage;
