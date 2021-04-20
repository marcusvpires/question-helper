import styled from "styled-components"
import media from "styled-media-query"

export const FormsWrapper = styled.section`
  height: 100%;
  width: 24rem;
  padding: 2rem;
  ${media.lessThan("medium")`
    margin: auto;
    min-width: 24rem;
    width: 80%;
    height: calc(100% - 8rem);
  `}
  ${media.lessThan("400px")`
    width: 100%;
    min-width: auto;
  `}
`

export const FormsQuestion = styled.div`
  font-size: 1.4rem;
  border-bottom: solid 1px;
  padding-bottom: 0.5rem;
  ${media.lessThan("400px")`
    font-size: 1.2rem;
  `}
`
export const FormsNumber = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  width: 13rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }
  ${media.lessThan("400px")`
    width: auto;
    font-size: 1.2rem;
  `}
  
`