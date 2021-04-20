import styled from "styled-components"
import media from "styled-media-query"


export const NumberInput = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  width: 13rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }
  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `}
`