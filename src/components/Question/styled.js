import styled from "styled-components"

export const QuestionWrapper = styled.li`
  width: 100%;
  border: 1px solid  ${props => props.marker ? `var(--${props.marker})` : '#6f757a'};
  padding-left: 1rem;
  border-radius: 5px;
  background-color: ${props => props.marker ? `var(--${props.marker})` : 'var(--blueDark)'};
  cursor: pointer;
  margin: .8rem 0;
`

export const Question = styled.div`
  cursor: default;
  width: 100%;
  padding: .8rem 1rem;
  background-color: var(--back);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Title = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 15rem;
  color: #8c979e;
`
