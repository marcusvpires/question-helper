import React, { useState } from "react";
import Layout from '../components/Layout';
import Forms from '../components/Forms';
import QuestionSection from '../components/QuestionSection';

const Home = () => {

  const [questions, setQuestions] = useState([
    {id: 1234567890, value: 'C', number: 10, attributes: { type: 'alternative' } },
    {id: 1542345541, value: 'A', number: 11, attributes: { type: 'alternative' } },
  ]);

  function addQuestions(question) {
    setQuestions([...questions, question])
    console.log('New question', question)
  }

  return (
    <Layout>
      <Forms addQuestions={addQuestions} />
      <QuestionSection questions={questions} />
    </Layout>
  )
}


export default Home