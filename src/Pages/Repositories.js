import React, { useState, useEffect } from "react";

import * as RepoStorage from "../storage/repository";
import { getAll } from "../dataBase/root";

import Layout from "../components/Layout";
import RepositorySection from "../components/RepositorySection";
import QuestionSection from "../components/QuestionSection";

const ArchivePage = () => {
  useEffect(() => {
    getAll("repository", (repository) => {
      for (const index in repository) {
        RepoStorage.create(repository[index]);
      }
    });
  });

  return (
    <Layout isRepoPage>
      <RepositorySection id="repositorySection" />
      <QuestionSection id="questionSection" />
    </Layout>
  );
};

export default ArchivePage;
