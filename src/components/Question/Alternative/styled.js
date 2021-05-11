import styled from "styled-components"
import media from "styled-media-query"

export const AltWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 12.8rem;

  ${media.lessThan("1159px")`
    width: 9rem;
  `}

  ${media.lessThan("700px")`
    width: 12.8rem;
  `}

  ${media.lessThan("530px")`
    width: 9rem;
  `}

`

export const AltList = styled.li`
`

export const AltLabel = styled.label`
  user-select: none;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  color: #b2b2b2;
  display:table-cell;
  vertical-align: middle;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  border: 1px var(--third) solid;
  background-color: var(--backDark);
  transition: 200ms;

  ${media.lessThan("1159px")`
    border-radius: 0;
    height: 2rem;
    border-right: none;
    font-size: .9rem;

    ${props => props.first && `border-radius: 5px 0 0 5px;` }
    ${props => props.lest && `
      border-radius: 0 5px 5px 0;
      border: 1px var(--third) solid; 
    ` }
  `}

  ${media.lessThan("700px")`
    border-radius: 50%;
    height: 2.2rem;
    border: 1px var(--third) solid;
    font-size: 1rem;
  `}

  ${media.lessThan("530px")`
    border-radius: 0;
    height: 2rem;
    border-right: none;
    font-size: .9rem;

    ${props => props.first && `border-radius: 5px 0 0 5px;` }
    ${props => props.lest && `
      border-radius: 0 5px 5px 0;
      border: 1px var(--third) solid; 
    ` }
  `}
`

export const AltInput = styled.input`
  appearance: none;
  display: none;
  &:checked + ${AltLabel} {
    background-color: var(--blueDark);
  }

`
