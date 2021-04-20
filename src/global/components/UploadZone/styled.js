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
  justify-content: space-between;
  padding: 1rem;
  border-radius: 2px;
  background-color: var(--backDark);
  border: 2px solid ${props => props.invalid ? 'red' : 'var(--blueDark)'};
  width: 100%;
  margin-bottom: 1rem;
`

export const FileSize = styled.span`
  font-weight: 600;
  font-size: 1rem;
  color: #585d72;
`

export const Loading = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(--black);
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const Progress = styled.div`
  width: 50%;
  height: 100%;
  background-color: var(--blue);
  border-radius: 5px 0 0 5px;

`