import styled from "styled-components"

export const NumberInput = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  width: 13rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }
`