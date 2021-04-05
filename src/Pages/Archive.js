import React from "react";
import Layout from "../components/Layout";

import Repositories from "../components/Repositories";
import QuestionSection from "../components/QuestionSection";

const ArchivePage = () => {

  return (
    <Layout isArchivePage>
      <Repositories />
      <QuestionSection id='questionSection' />
    </Layout>
  )
};

export default ArchivePage;
