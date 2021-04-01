import * as db from './root'

const createID = () => {
  const random = Math.random().toString(36).slice(-8);
  return Date.now() + '-' + random;
}

// ========================================================= //
//                        Repository                         //
// ========================================================= //

export const saveRepository = (id = createID()) => {
  try {
    const name = localStorage.getItem('repository')
    localStorage.setItem('repositoryID', id)
    db.put('repository', {id: id, name: name}, (element) => {
      console.log(`Put ${element.name} (${element.id}) in repository`)
    })
    return id
  } catch (err) {
    alert('Could not save the repository')
    console.log('Could not save the repository', err)
  }
}

// ========================================================= //
//                         Question                          //
// ========================================================= //

export const saveAlternative = (alt, id = createID()) => {
  try {
    const number = localStorage.getItem('number')
    let repositoryID = localStorage.getItem('repositoryID')
    if (!repositoryID) { repositoryID = saveRepository() }
    db.put('question', {id: id, value: alt, repositoryID: repositoryID, number: number, attributes: { type: 'alternative' } }, (element) => {
      console.log(`Put ${element.id} in question`, element)
    })
  } catch (err) {
    alert('Could not save the question')
    console.log('Could not save the question', err)
  }
}