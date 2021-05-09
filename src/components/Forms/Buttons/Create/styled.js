import styled from "styled-components"

export const DisplayWrapper = styled.div`
	margin: 1rem 0 0;
`

export const Display = styled.button`
	background-color: var(--blueDark);
	border-radius: 2px;
	color: var(--primary);
	border: none;
	padding: .6rem .8rem;
	font-size: 1rem;
	letter-spacing: 0.069rem;
	cursor: pointer;
	transition: 200ms;

	&:hover {
		background-color: #002776;
	}

	&:focus {
		outline: none;
	}

	&:active {
		transition: 50ms;
		background-color: var(--blue);
	}
`