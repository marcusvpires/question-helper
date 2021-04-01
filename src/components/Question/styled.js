import styled from "styled-components"

export const QuestionWrapper = styled.ul`
  height: 100%;
  width: 70%;
  border-left: 1px solid #6f757a;
  padding: 2rem;
`

export const QuestionContainer = styled.li`
  width: 100%;
  border: 1px solid #6f757a;
  padding-left: 1rem;
  border-radius: 5px;
  background-color: var(--blueDark);
  cursor: pointer;
`

export const Question = styled.div`
  cursor: default;
  width: 100%;
  padding: .5rem .9rem;
  background-color: var(--back);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
