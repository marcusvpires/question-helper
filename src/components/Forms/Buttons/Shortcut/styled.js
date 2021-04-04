import styled from "styled-components"

export const ShortcutWrapper = styled.div`
`

export const Shortcut = styled.input`
	border-radius: 2px;
	background-color: var(--blueDark);
	width: 6.5rem;
	height: 2.4rem;
	caret-color: transparent;
	
	&::placeholder {
		color: var(--primary);
		opacity: 1;
	}

	&:focus {
		outline-width: 2px;
		outline-color: var(--blue);
		outline-style: solid;
	}
`