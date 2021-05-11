import styled from "styled-components"
import media from "styled-media-query"

export const Number = styled.div`
  display: flex;
  align-items: center;
  ${media.lessThan("750px")`
    margin-bottom: .9rem;
  `}
  ${media.lessThan("700px")`
    margin-bottom: 0;
  `}
  ${media.lessThan("330px")`
    margin-bottom: .9rem;
  `}
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
  ${media.lessThan("750px")`
    display: block;
  `}
  ${media.lessThan("378px")`
    display: none;
  `}
  ${media.lessThan("330px")`
    display: block;
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
  ${media.lessThan("750px")`
    display: none;
  `}
  ${media.lessThan("378px")`
    display: block;
  `}
  ${media.lessThan("330px")`
    display: none;
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
    width: 2.1rem;
  `}
  ${media.lessThan("700px")`
    width: 3.2rem;
  `}

`

