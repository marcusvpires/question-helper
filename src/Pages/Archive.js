import React, { useState, useEffect } from "react";

import * as RepoStorage from '../storage/repository'
import { getAll } from '../dataBase/root'

import Layout from "../components/Layout";
import RepositorySection from "../components/RepositorySection";
import QuestionSection from "../components/QuestionSection";

const ArchivePage = () => {

  const [selectRepository, setSelectRepository] = useState(false)

  useEffect(() => {
    getAll("repository", (repository) => {
      for (const index in repository) {
        RepoStorage.create(repository[index], selectRepository, setSelectRepository)
      }
    })
  })

  return (
    <Layout isArchivePage>
      <RepositorySection id='repositorySection' />
      <QuestionSection id='questionSection' />
    </Layout>
  )
};

export default ArchivePage;
