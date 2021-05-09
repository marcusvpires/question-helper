import styled from "styled-components"
import media from "styled-media-query"


export const NumberInput = styled.input`
  font-size: 1.4rem;
  color: var(--primary);
  width: calc(100% - 7rem);

  &:invalid {
    box-shadow: none;
    color: red;
  }

  ${media.lessThan("1000px")` font-size: 1.3rem; `}

`