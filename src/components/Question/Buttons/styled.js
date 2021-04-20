import styled from "styled-components"
import media from "styled-media-query"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: ${props => props.compact ? '1rem' : '9rem'};
  ${media.lessThan("large")`
    display: none;
  `}
`

export const Compact = styled.div`
`

export const CompactButtons = styled.div`
  display: none;
  ${media.lessThan("large")`
    display: block;
  `}
`


