import styled from "styled-components"

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
`

export const Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 15rem;
  color: #8c979e;
`
