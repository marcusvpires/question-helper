import * as db from './index'

const createID = () => {
  let date = Date.now();
  const random = 'xxxxxxxx'.replace(/[x]/g, c => {
    const r = (date + Math.random()*16)%16 | 0;
    date = Math.floor(date/16);
    return r;
  });
  return Date.now() + '-' + random;
}

// ========================================================= //
//                        Repository                         //
// ========================================================= //

export const saveRepository = (name, id = createID()) => {
  try {
    db.put('repository', {id: id, name: name}, (element) => {
      console.log(`Put ${element.name} (${element.id}) in repository`)
    })
  } catch (err) {
    alert('Could not save the repository')
    console.log('Could not save the repository', err)
  }
}