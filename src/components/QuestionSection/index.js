import styled from "styled-components"
import media from "styled-media-query"

const QuestionSection = styled.ul`
  height: 100%;
  width: calc(100% - 24rem);
  border-left: 1px solid #6f757a;
  padding: 1rem 2rem;
  overflow: auto;
  scrollbar-width: thin;
  user-select: none;
    
  display: none;

  ${media.lessThan("medium")`
    border-top: 1px solid #6f757a;
    border-left: none;
    width: 100%;
    padding: 1rem;
    height: auto;
    padding-bottom: 7rem;
  `}
`

export default QuestionSection
