import styled from "styled-components"

export const TimerWrapper = styled.div`
	color: var(--primary);
	border-radius: 2px;
	border: none;
	background-color: var(--blueDark);
	font-size: 1rem;
	letter-spacing: 0.069rem;
	cursor: pointer;
	transition: 200ms;
	display: flex;
	align-items: center;
	height: 2.4rem;
`

export const Timer = styled.input`
	font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
	font-size: 1rem;
	width: 4rem;
	padding: 0;
	margin: 0 0 0 .8rem;
`

export const TimerButton = styled.button`
	width: 2rem;
	height: 100%;
	padding: 0;
	margin: 0;
	background-color: transparent;
	border: none;
	color: var(--primary);
	border-left: 2px solid var(--back);
	cursor: pointer;
`