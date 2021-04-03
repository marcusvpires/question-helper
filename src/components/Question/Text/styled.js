import styled from "styled-components"

export const TextArea = styled.textarea`
	margin-top: 1rem;
	width: 100%;
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