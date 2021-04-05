import * as db from "./root";

// ========================================================= //
//                          Assets                           //
// ========================================================= //

const createID = () => {
  const random = Math.random().toString(36).slice(-8);
  return Date.now() + "-" + random;
}

const err = (msg, err, par) => {
  alert("Could not", msg);
  console.warn("Could not", msg,  '-', par)
  console.warn('Error', err)
}

// ========================================================= //
//                        Repository                         //
// ========================================================= //

export const repositoryDB = {
  add: async () => {
    try {
      let id = localStorage.getItem("repositoryID")
      let name = localStorage.getItem("repository");

      if (!id) { id = createID(); localStorage.setItem("repositoryID", id) }
      if (!name) { name = 'undefined' }

      db.put("repository", { id: id, name: name }, (element) => {
        console.log(`Put repository ${element.name} (${element.id})`);
      });
    } 
    catch (e) { err('add repository', e ) }
  },
  new: async () => {
    try {
      repositoryDB.add()
      localStorage.removeItem("repositoryID")
      localStorage.removeItem("repository");
      
      const id = createID()
      localStorage.setItem("repositoryID", id)

      db.put("repository", { id: id, name: 'undefined' }, (element) => {
        console.log(`Put repository ${element.name} (${element.id})`);
      });
    } 
    catch (e) { err('add repository', e ) }
  },

}

// ========================================================= //
//                         Question                          //
// ========================================================= //

export const questionDB = {
  add: async (question) => {
    try { db.put("question", question) } 
    catch (e) { err('save the question', e, question ) }
  },
  remove: async (id) => {
    try { db.remove("question", id) } 
    catch (e) { err('remove the question', e, id ) }
  },
  removeAll: async (id) => {
    try { db.removeAll("question") } 
    catch (e) { err('remove all questions', e ) }
  },
  clearRepository: async (repository) => {
    db.deleteIndex('question', 'repositoryID', repository)
  }
}

