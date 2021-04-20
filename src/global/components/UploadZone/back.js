import React, { useState } from "react";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from '../../Design'

/* ------------------------------------------------------------------------------- "/"

  Simple Drag and Drop to upload file -- UploadZone()

/" ------------------------------------------------------------------------------ */

const UploadZone = () =>  {

  const [selectedFiles, setSelectedFiles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const dragOver = (e) => {
    e.preventDefault();
  }
  
  const dragEnter = (e) => {
    e.preventDefault();
  }
  
  const dragLeave = (e) => {
    e.preventDefault();
  }
  
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
  }  

  const handleFiles = (files) => {
  }

  return (
    <S.Wrapper>
      <S.Drop
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      ></S.Drop>
    </S.Wrapper>
  )
}
export default UploadZone