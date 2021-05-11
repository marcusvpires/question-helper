import styled from "styled-components"
import media from "styled-media-query"

const QuestionSection = styled.ul`
  height: auto;
  width: calc(100% - 24rem);
  border-left: 1px solid #6f757a;
  padding: 1rem 2rem;
  overflow: auto;
  scrollbar-width: thin;
  user-select: none;
    
  ${media.lessThan("1500px")`
    width: calc(100% - 28rem);
  `}

  ${media.lessThan("900px")`
    width: calc(100% - 22rem);
  `}

  ${media.lessThan("700px")`
    width: 100%;
    border: none;
    border-top: 1px solid #6f757a;
    padding: 1rem 1rem;
  `}
`

export default QuestionSection
