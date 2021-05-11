import styled from "styled-components"
import media from "styled-media-query"

export const Number = styled.div`
  display: flex;
  align-items: center;
`

export const NumberText = styled.span`
  font-size: 1rem;
  ${media.lessThan("1070px")`
    display: none;
  `}
  ${media.lessThan("1000px")`
    display: block;
  `}
  ${media.lessThan("820px")`
    display: none;
  `}
` 

export const NumberTextShort = styled.span`
  display: none;
  ${media.lessThan("1070px")`
    display: block;
  `}
  ${media.lessThan("1000px")`
    display: none;
  `}
  ${media.lessThan("820px")`
    display: block;
  `}
` 

export const NumberInput = styled.input`
  font-size: 1rem;
  color: var(--primary);
  width: 3.2rem;
  &:invalid {
    box-shadow: none;
    color: red;
  }

  ${media.lessThan("1030px")`
    width: 2.2rem
  `}
  ${media.lessThan("1000px")`
    width: 3.2rem;
  `}
  ${media.lessThan("924px")`
    width: 2.2rem
  `}
  ${media.lessThan("892px")`
    width: 3.2rem;
  `}
  ${media.lessThan("820px")`
    width: 1.8rem;
  `}

`

