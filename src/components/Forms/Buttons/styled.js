import styled from "styled-components"
import media from "styled-media-query"

export const BtnWrapper = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 .1rem;

	${media.lessThan("650px")`
		padding: 0;
  `}

	${media.lessThan("618px")`
		padding: 0 .5rem;
  `}

	${media.lessThan("330px")`
		padding: 0 .1rem;
  `}
`

export const Icon = styled.div`
	height: 1.5rem;
	width: 1.5rem;
`

export const Label = styled.div`
	margin-left: .4rem;

	${media.lessThan("900px")`
    display: none;
  `}

	${media.lessThan("700px")`
		display: block;
  `}

	${media.lessThan("400px")`
		display: none;
  `}

`

export const Create = styled.div`
	margin-left: .4rem;
`

export const Button = styled.button`
	background-color: var(--blueDark);
	color: var(--primary);
	height: 2.5rem;
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

	${media.lessThan("900px")`
		height: 2.4rem;
    padding: .5rem .7rem;
  `}

	${media.lessThan("700px")`
		padding: .5rem 1.2rem;
  `}

	${media.lessThan("650px")`
		padding: .5rem .8rem;
  `}

	${media.lessThan("618px")`
		padding: .5rem 1.2rem;
  `}

	${media.lessThan("480px")`
		padding: .5rem .8rem;
  `}
`