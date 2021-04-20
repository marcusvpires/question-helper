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

  ${media.lessThan("medium")`
    width: 3.8rem;
    border-top: 1px solid #6f757a;
    border-left: none;
    width: 100%;
  `}
`

export default QuestionSection
