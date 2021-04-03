import styled from "styled-components"

export const TextWrapper = styled.div`
	margin-top: 2rem;
`

export const TextArea = styled.textarea`
	width: 100%;
	height: 10rem;
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