import styled from "styled-components"

export const AltWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 4px;
  background-color: var(--black);
  display: flex;
  justify-content: space-around;
`

export const AltButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: var(--blueDark);
  border: solid 1px var(--third);
  font-size: 1rem;
  color: var(--primary);
  cursor: pointer;
  transition: 200ms;

  &:hover {
    border-radius: 30%;
  }
  &:active {
    transition: 50ms;
    background-color: var(--blue);
  }
`