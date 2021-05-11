import styled from "styled-components"
import media from "styled-media-query"

export const Question = styled.div`
  cursor: default;
  width: 100%;
  padding: .8rem 1rem;
  background-color: var(--back);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 0 5px 5px 0;

  ${media.lessThan("820px")`
    padding: .7rem .7rem;
  `}

  ${media.lessThan("750px")`
    padding: .7rem .7rem 1.2rem;
  `}
`

export const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 15rem;
  color: #8c979e;
  width: 12.8rem;
`

export const Time = styled.span`
  color: #8c979e;

  ${media.lessThan("1250px")`
    display: none;
  `}

  ${media.lessThan("750px")`
    display: block;
    margin-bottom: .9rem;
  `}
`