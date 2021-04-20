import { style } from '../../Design'
import styled from "styled-components"

export const Wrapper = styled.div`
`

export const Drop = styled.div`
  background-color: var(--black);
  width: 100%;
  height: 8rem;
  margin-bottom: 1rem;
  border-radius: 2px;
  padding: .8rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #77a5ff;;
  border: 2px #77a5ff dashed;
`

export const FileInput = styled.input`
  display: none;
`

export const Files = styled.div`
  width: 100%;
`

export const File = styled.div`
  display: flex;
  align-items: center;
  padding: .4rem;
  border-radius: 2px;
  background-color: var(--backDark);
  border: 2px solid var(--blueDark);
  width: 100%;
`