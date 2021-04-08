import styled from "styled-components"

export const FormsWrapper = styled.section`
  height: 100%;
  width: 24rem;
  padding: 2rem;
`

export const FormsQuestion = styled.div`
  font-size: 1.4rem;
  border-bottom: solid 1px;
  padding-bottom: 0.5rem;
`
export const FormsNumber = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  width: 13rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }
`