import styled from "styled-components"
import media from "styled-media-query"

export const TextWrapper = styled.div`
	margin: 1rem 0;
	height: calc(100% - 14rem);
	${props => props.mobileFocus && `
		background-color: var(--back);
		height: 100%;
		position: fixed;
		z-index: 9999;
		top: 0;
		left: 0;
		width: 100%;
		margin: 0;
	`}
	
	${media.lessThan("600px")`
		height: calc(100% - 17rem);

		${props => props.mobileFocus && `
			height: 100%;
		`}
  `}
`

export const TextHeader = styled.div`
	height: 3.5rem;
	border-bottom: solid 1px var(--third);
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
	height: 100%;
  padding: ${props => props.mobileFocus ? "1rem 2rem" : ".8rem"};
	border-radius: 2px;
	background-color: var(--black);
	border: none;
	font-size: 1rem;
	color: var(--primary);
	resize: none;
	overflow: auto;
	scrollbar-width: thin;

  &:focus {
    outline: none;
  }
`