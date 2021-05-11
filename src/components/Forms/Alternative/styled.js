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

  ${media.lessThan("380px")`
    padding: .8rem;
  `}

  ${media.lessThan("320px")`
    padding: .8rem .5rem;
  `}
`

export const AltButton = styled.button`
  width: 3rem;
  height: 2.5rem;
  border-radius: 10px;
  background-color: var(--blueDark);
  border: solid 1px var(--third);
  font-size: 1.1rem;
  color: var(--primary);
  cursor: pointer;
  transition: 200ms;

  &:hover {
    border-radius: 40%;
  }
  &:active {
    transition: 50ms;
    background-color: var(--blue);
  }

  ${media.lessThan("900px")`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 50%;

    &:hover {
      border-radius: 10px;
    }
  `}

  ${media.lessThan("700px")`
    width: 3.4rem;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 10PX;

    &:hover {
      border-radius: 38%;
    }
  `}

  ${media.lessThan("450px")`
    width: 3rem;
    height: 2.5rem;
    font-size: 1rem;
    border-radius: 10PX;

    &:hover {
      border-radius: 38%;
    }
  `}

  ${media.lessThan("400px")`
    width: 2.5rem;
    height: 2.5rem;
    font-size: .9rem;
    border-radius: 50%;

    &:hover {
      border-radius: 10px;
    }
  `}
`