import styled from "styled-components"

export const Number = styled.div`
`

export const NumberText = styled.span`
  font-size: 1rem;
`

export const NumberInput = styled.input`
  font-size: 1rem;
  color: var(--primary);
  width: 3.2rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }
`

