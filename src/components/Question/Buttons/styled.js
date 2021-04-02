import styled from "styled-components"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BtnIcon = styled.span`
  cursor: pointer;
  width: 1.8rem;
  padding: 0.3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: var(--secondary);
  transition: 200ms;

  &:hover {
    background-color: var(--blueDark)
  }
`

