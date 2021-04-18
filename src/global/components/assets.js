

export const screen = (id) => {
  const element = document.createElement('div')
  // Necessary global className '.screen'.
  element.classList.add('screen')
  element.id = id
  document.getElementById('root').appendChild(element)
}
