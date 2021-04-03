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

export const saveRepository = async (id = createID()) => {
  try {
    const name = localStorage.getItem("repository");
    localStorage.setItem("repositoryID", id);
    db.put("repository", { id: id, name: name }, (element) => {
      console.log(`Put ${element.name} (${element.id}) in repository`);
    });
  } catch (e) { err('save the repository', e, id ) }
};

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
  }
}

