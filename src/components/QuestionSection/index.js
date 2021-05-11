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
    
  ${media.lessThan("1500px")`
    width: calc(100% - 28rem);
  `}

  ${media.lessThan("900px")`
    width: calc(100% - 22rem);
  `}

  ${media.lessThan("700px")`
    width: 100%;
  `}
`

export default QuestionSection
