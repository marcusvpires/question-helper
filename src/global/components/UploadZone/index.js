import React, { useRef, useState, useEffect } from 'react'
import { importDatabase } from '../../../storage/database'

import * as I from '@styled-icons/boxicons-regular/'
import * as S from './styled'
import * as D from '../../Design'

const UploadZone = ({ close }) => {
  const fileInputRef = useRef()
  const [loading, setLoading] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [validFiles, setValidFiles] = useState([])
  const [unsupportedFiles, setUnsupportedFiles] = useState([])

  useEffect(() => {
    let filteredArr = selectedFiles.reduce((acc, current) => {
      const x = acc.find(item => item.name === current.name)
      if (!x) { return acc.concat([current]) }
      else { return acc }
    }, [])
    setValidFiles([...filteredArr])
  }, [selectedFiles])

  const fileDrop = (ev) => {
    console.log('>> fileDrop:', ev.dataTransfer.files)
    ev.preventDefault()
    const files = ev.dataTransfer.files
    if (files.length) { handleFiles(files) }
  }

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files)
    }
  }

  const fileInputClicked = () => { fileInputRef.current.click() }

  const handleFiles = (files) => {
    for(let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        files[i]['invalid'] = false
        setSelectedFiles(prevArray => [...prevArray, files[i]])
      } 
      else {
        files[i]['invalid'] = true;
        setSelectedFiles(prevArray => [...prevArray, files[i]]);
        setUnsupportedFiles(prevArray => [...prevArray, files[i]]);
      }
    }
  }

  const validateFile = (file) => {
    console.log('>> Valid file', file.name.slice(-4) === '.cvs', `(${file.name.slice(-4)})` )
    if (file.name.slice(-4) === '.cvs') { return true }
    return false;
  }

  const fileSize = (size) => {
    if (size === 0) { return '0 Bytes' }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  const removeFile = (name) => {
    const index = validFiles.findIndex(e => e.name === name);
    const index2 = selectedFiles.findIndex(e => e.name === name);
    const index3 = unsupportedFiles.findIndex(e => e.name === name);
    validFiles.splice(index, 1);
    selectedFiles.splice(index2, 1);
    setValidFiles([...validFiles]);
    setSelectedFiles([...selectedFiles]);
    if (index3 !== -1) {
      unsupportedFiles.splice(index3, 1);
      setUnsupportedFiles([...unsupportedFiles]);
    }
  }

  const uploadFiles = async () => {
    for (let i = 0; i < validFiles.length; i++) {
      const reader = new FileReader()
      reader.onload = (ev) => { importDatabase( ev.target.result, close, 'loadingBar') }
      reader.readAsBinaryString(validFiles[i]);
    }
  }

  return (
    <S.Wrapper>


      {loading ? <S.Loading><S.Progress id='loadingBar' /></S.Loading> :
        <S.Drop
          onDragOver={(ev) => {ev.preventDefault()}}
          onDragEnter={(ev) => {ev.preventDefault()}}
          onDragLeave={(ev) => {ev.preventDefault()}}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
        <D.Icon size='2rem'><I.Upload /></D.Icon>
        <D.h3 align='center' >Drag and drop files here click to select file</D.h3>
        <S.FileInput
          ref={fileInputRef}
          type="file"
          multiple
          onChange={filesSelected}
        />
        </S.Drop>
      }

      <S.Files> 
        {validFiles.map((data, i) =>
          <S.File key={i} invalid={data.invalid} >
            <D.Icon><I.File /></D.Icon>
            <D.p>{data.name}</D.p>
            <S.FileSize>{fileSize(data.size)}</S.FileSize>
            <D.ButtonIcon size='2rem' onClick={() => removeFile(data.name)}><I.Trash /></D.ButtonIcon>
          </S.File>
        )}
      </S.Files>

      <D.Flex justify="end">
        <D.Button
          onClick={close}
          margin='0 1rem'
        >Cancel</D.Button>
        <D.Button
          onClick={() => {
            setLoading(true)
            uploadFiles()
          }}
          disabled={validFiles.length === 0 || unsupportedFiles.length > 0}
        >Confirm</D.Button>
      </D.Flex>

    </S.Wrapper>
  );
}

export default UploadZone
