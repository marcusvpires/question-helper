import styled from "styled-components"

export const NewWrapper = styled.section`
  height: 100vh;
  width: 30%;
  padding: 2rem;
`

export const NewQuestion = styled.div`
  font-size: 1.4rem;
  border-bottom: solid 1px;
  padding-bottom: 0.5rem;
`
export const NewNumber = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  &:invalid {
    box-shadow: none;
    color: red;
  }
`