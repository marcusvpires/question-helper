import styled from "styled-components"
import media from "styled-media-query"

export const ShortcutWrapper = styled.div`
`

export const Shortcut = styled.input`
	background-color: var(--blueDark);
	border-radius: 2px;
	width: 4rem;
	height: 2.4rem;
	caret-color: transparent;
  height: 2.8rem;
	
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
		width: 7rem;
		padding: 0 1.2rem;
  `}

`