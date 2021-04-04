import styled from "styled-components"

export const TextWrapper = styled.div`
	margin: 1rem 0;
	height: calc(100% - 17rem);
`

export const TextArea = styled.textarea`
	width: 100%;
	height: 100%;
	border-radius: 2px;
	background-color: var(--black);
	border: none;
	font-size: 1rem;
	color: var(--primary);
	resize: none;
  padding: .8rem;

  &:focus {
    outline: none;
  }
`