import React, { useState } from "react";
import { getIndex } from '../dataBase/root'
import Layout from '../components/Layout';
import Forms from '../components/Forms';
import QuestionSection from '../components/QuestionSection';

const Home = () => {

  const [questions, setQuestions] = useState(() => {
    getIndex('question', 'repositoryID', '1617243054128-wr52y28c', (questions) => {
      setQuestions(questions)
    })
    return ([])
  });



  function addQuestions(question) {
    setQuestions([...questions, question])
  }

  return (
    <Layout>
      <Forms addQuestions={addQuestions} />
      <QuestionSection questions={questions} />
    </Layout>
  )
}


export default Home