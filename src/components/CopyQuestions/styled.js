import styled from "styled-components"

export const CopyWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CopyBack = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.8;
  z-index: 10;
`

export const CopyContainer = styled.div`
  width: 50%;
  min-height: 80vh;
  background-color: var(--back);
  border: 1px solid var(--third);
  border-radius: 5px;
  padding: 2rem;
`

export const CopyHeader = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CopyButton = styled.button`
  color: var(--primary);
	border-radius: 2px;
	border: none;
	background-color: var(--blueDark);
	padding: ${props => props.padding};
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

export const CoptIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`

export const CopyFormatInput = styled.input`
  font-size: 1rem;
  color: var(--primary);
  background-color: var(--black);
  width: calc(100% - 14rem);
  border-radius: 5px;
  border: 1px solid ${props => props.valid ? 'var(--black)' : 'red'};
  padding: 1rem;
  
  &:focus {
    border: 1px solid ${props => props.valid ? 'var(--black)' : 'red'};
  }
`

export const CopyResult = styled.textarea`
  padding: 1.2rem;
  border-radius: 5px;
  width: 100%;
  height: calc(80vh - 9rem);
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