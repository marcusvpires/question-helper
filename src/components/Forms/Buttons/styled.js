import styled from "styled-components"
import media from "styled-media-query"

export const BtnWrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Icon = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	margin-right: .4rem;
`

export const Button = styled.button`
	background-color: var(--blueDark);
	color: var(--primary);
	height: 2.8rem;
	border-radius: 2px;
	border: none;
	display: flex;
	align-items: center;
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
	${media.lessThan("400px")`
		padding: .6rem .7rem;
		font-size: .9rem;
  `}
`