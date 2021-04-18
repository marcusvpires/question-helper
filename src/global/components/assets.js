export const screen = (id) => {
  const element = document.createElement('div')
  element.id = id
  element.classList.add('screen')
  document.getElementById('root').appendChild(element)
}
