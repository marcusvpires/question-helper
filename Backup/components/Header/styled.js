import styled from "styled-components"

export const HeaderWrapper = styled.section`
  background-color: var(--back);
  height: 5rem;
  width: 100%;
  position: absolute;
  border-bottom: 1px solid #6f757a;
  z-index: 5;
  display: flex;
  padding: 1rem;

  &:focus {
    outline: none;
  }
`

export const HeaderRepository = styled.input`
  font-size: 1.4rem;
`