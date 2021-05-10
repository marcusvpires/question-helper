import styled from "styled-components"

export const TextWrapper = styled.div`
	margin: 1rem 0;
	height: calc(100% - 14rem);
	${props => props.mobileFocus && `
		background-color: var(--back);
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		margin: 0;
	`}
`

export const TextHeader = styled.div`
	height: 2.5rem;
	width: 100%;
	padding: 0 1rem;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	display: ${props => props.mobileFocus ? "flex" : "none"};
`

export const Question = styled.div`
	font-size: 1rem;
	color: var(--secondary);
`

export const Close = styled.span`
	height: 1.2rem;
	width: 1.2rem;
	margin-bottom: .2rem;
	transition: 50ms;
	color: var(--secondary);

	&:active {
		color: #78add5;
	}
`

export const TextArea = styled.textarea`
	width: 100%;
	height: ${props => props.mobileFocus ? "calc(100% - 2.5rem)" : "100%"};
	border-radius: 2px;
	background-color: var(--black);
	border: none;
	font-size: 1rem;
	color: var(--primary);
	resize: none;
  padding: .8rem;
	overflow: auto;
	scrollbar-width: thin;

  &:focus {
    outline: none;
  }
`