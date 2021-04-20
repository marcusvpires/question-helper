import styled from "styled-components"

export const style = {
  border: 'border: 1px solid var(--third); border-radius: 5px;'
}

// =============================================================================== //
//                                      Input                                      //
// =============================================================================== //

export const Input = styled.input`
	background-color: ${ props => props.back ? props.back : 'var(--black)' };
  margin: ${props => props.margin && props.margin};
  ${style.border}
	padding: .6rem .8rem;
  width: 100%;
  color: var(--primary);
	font-size: 1rem;
  margin: ${props => props.margin ? props.margin : '0 0 1rem'};
  &:focus {
    border: 1px solid var(--blue);
  }
  &:invalid {
    border: 1px solid red;
  }
`

export const Button = styled.button`
	background-color: ${ props => props.back ? props.back : 'var(--blueDark)' };
  margin: ${props => props.margin && props.margin};
	border-radius: 2px;
	border: none;
	padding: .6rem .8rem;
	letter-spacing: 0.069rem;
  color: var(--primary);
	font-size: 1rem;
	cursor: pointer;
	transition: 200ms;

  ${props => props.disabled ? `
    cursor: not-allowed;
    background-color: #091331;
    color: var(--secondary);
  ` : ` 
    &:hover {	background-color: #002776; }
    &:focus { outline: none;	}
    &:active {
      transition: 50ms;
      background-color: var(--blue);
    }
  `}
`

export const ButtonIcon = styled.div`
  cursor: pointer;
  ${ props => `
    height: ${props.size ? props.size : '1.5rem'};
    width: ${props.size ? props.size : '1.5rem'};
  `}
  padding: 0.3rem;
  border-radius: 2px;
  display: flex;
  align-items: center;
  color: var(--secondary);
  transition: 200ms;
  &:hover { background-color: var(--blueDark); }
`

export const Link = styled.a`
	background-color: #115c1f;
	border-radius: 2px;
	border: none;
	padding: .5rem .8rem;
	letter-spacing: 0.069rem;
  text-decoration: none;
  color: var(--primary);
	font-size: 1rem;
	cursor: pointer;
	transition: 200ms;
  margin: ${props => props.margin && props.margin};
  
	&:hover { background-color: #177629; }
	&:focus { outline: none; }
	&:active {
		transition: 50ms;
		background-color: #0c8522;
	}
`

// =============================================================================== //
//                                      Text                                       //
// =============================================================================== //

export const Strong = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem 0;
`

export const Text = styled.p`
  font-size: .8rem;
  padding: .8rem 0;
`

export const h3 = styled.h3`
  font-size: 1.1rem;
  ${props => props.align && 'text-align:' + props.align + ';'}
`

export const p = styled.h3`
  font-size: 1rem;
  ${props => props.align && 'text-align:' + props.align + ';'}
  ${props => props.color && 'color:' + props.color + ';'}
`

// =============================================================================== //
//                                    Container                                    //
// =============================================================================== //

export const Icon = styled.div`
  margin-right: 0.8rem;
  ${ props => `
    height: ${props.size ? props.size : '1.5rem'};
    width: ${props.size ? props.size : '1.5rem'};
  `}
  margin-right: 0.5rem;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  ${props =>  props.color && `color: ${props.color}`}
  ${props => props.justify && `justify-content: ${props.justify}` };
`

// =============================================================================== //
//                                      Popup                                      //
// =============================================================================== //

export const PopBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
`

export const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`