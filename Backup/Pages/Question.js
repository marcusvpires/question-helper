import React, { useState, useEffect } from "react";

import { getIndex } from "../dataBase/root";
import { repositoryDB } from "../dataBase";
import * as storage from '../assets/storage'

import Layout from "../components/Layout";
import QuestionSection from "../components/QuestionSection";
import Forms from "../components/Forms";

const QuestionsPage = () => {

  const [formValue, setForm] = useState(() => {
    let number = localStorage.getItem('number')
    let repository = localStorage.getItem('repository')
    let text = localStorage.getItem('text')
    if(!number) {number = 1}
    if(!repository) { repository = 'Undefined' } // Create new repository
    return { number: number, repository: repository, text: text,}
  })
  const form = { repository: formValue.repository, number: formValue.number, text: formValue.text,
    set: (name, value) => {
    localStorage.setItem(name, value)
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }}


  useEffect(() => {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) { repositoryID = repositoryDB.add(); }
    console.log("Connect with repository", repositoryID);
  
    storage.repository.questions(repositoryID)
  })

  return (
    <Layout form={form} >
      <Forms form={form} />
      <QuestionSection id='questionSection' />
    </Layout>
  );
};

export default QuestionsPage;
