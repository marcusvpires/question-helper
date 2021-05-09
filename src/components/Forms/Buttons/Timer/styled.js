import styled from "styled-components"
import media from "styled-media-query"

export const TimerWrapper = styled.div`
	background-color: var(--blueDark);
	color: var(--primary);
	border-radius: 2px;
	border: none;
	height: 2.5rem;
	letter-spacing: 0.069rem;
	font-size: 1rem;
	transition: 200ms;
	display: flex;
	align-items: center;
	cursor: pointer;
	
	${media.lessThan("900px")`
		height: 2.4rem;
  `}
`

export const Timer = styled.input`
	font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
	font-size: 1rem;
	width: 4rem;
	padding: 0;
	margin: 0 0 0 .8rem;
`

export const TimerButton = styled.button`
	border: none;
	border-left: 2px solid var(--back);
	background-color: transparent;
	color: var(--primary);
	height: 100%;
	padding: 0;
	display: flex;
	align-items: center;
	cursor: pointer;
`

export const Label = styled.div`
	display: none;	
	font-size: 1rem;
	margin: 0 .2rem 0 .7rem;

	${media.lessThan("700px")`
		display: block;
  `}

	${media.lessThan("525px")`
		display: none;
  `}
`

export const Icon = styled.div`
	width: 2rem;
	
`