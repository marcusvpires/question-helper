import styled from "styled-components"

export const BtnWrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Button = styled.button`
	color: var(--primary);
	border-radius: 2px;
	border: none;
	background-color: var(--blueDark);
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

export const Shortcut = styled.input`
	border-radius: 2px;
	background-color: var(--blueDark);
	width: 6.5rem;
	height: 2.4rem;

	&::placeholder {
		color: var(--primary);
		opacity: 1;
	}
`