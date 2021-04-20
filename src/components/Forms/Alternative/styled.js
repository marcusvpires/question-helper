import styled from "styled-components"
import media from "styled-media-query"

export const AltWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  margin: 1.4rem 0 1rem;
  border-radius: 4px;
  background-color: var(--black);
  display: flex;
  justify-content: space-around;
  ${media.lessThan("400px")`
    padding: .8rem;
  `}
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
  ${media.lessThan("400px")`
    width: 2.2rem;
    height: 2.2rem;
    font-size: .9rem;
  `}
`