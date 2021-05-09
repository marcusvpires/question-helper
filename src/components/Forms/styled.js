import styled from "styled-components"
import media from "styled-media-query"

export const FormsWrapper = styled.section`
  height: 100%;
  width: 34rem;
  padding: 2rem;

  ${media.lessThan("1800px")`
    width: 30rem;
  `}

  ${media.lessThan("1600px")`
    width: 28rem;
  `}

  ${media.lessThan("1500px")`
    width: 28rem;
  `}

  ${media.lessThan("900px")`
    width: 22rem;
    padding: 1rem;
  `}

  ${media.lessThan("700px")`
    width: 100%;
    padding: 1rem;
  `}

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