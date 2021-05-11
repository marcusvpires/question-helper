import styled from "styled-components"
import media from "styled-media-query"

export const ShortcutWrapper = styled.div`
	${media.lessThan("618px")`
		display: none;
	`}
`

export const Shortcut = styled.input`
	background-color: var(--blueDark);
	border-radius: 2px;
	width: 4rem;
  height: 2.5rem;
	caret-color: transparent;
	
	&::placeholder {
		color: var(--primary);
		opacity: 1;
	}

	&:focus {
		outline-width: 2px;
		outline-color: ${props => props.valid ? 'var(--blue)' : 'red'};
		outline-style: solid;
	}

	${media.lessThan("900px")`
		height: 2.4rem;
  `}

	${media.lessThan("700px")`
		width: 5.8rem;
		padding: 0 1.2rem;
  `}

	${media.lessThan("650px")`
		width: 5rem;
		padding: 0 .8rem;
  `}
`