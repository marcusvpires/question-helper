import * as db from "./root";

const createID = () => {
  const random = Math.random().toString(36).slice(-8);
  return Date.now() + "-" + random;
};

// ========================================================= //
//                        Repository                         //
// ========================================================= //

export const saveRepository = (id = createID()) => {
  try {
    const name = localStorage.getItem("repository");
    localStorage.setItem("repositoryID", id);
    db.put("repository", { id: id, name: name }, (element) => {
      console.log(`Put ${element.name} (${element.id}) in repository`);
    });
  } catch (err) {
    alert("Could not save the repository");
    console.log("Could not save the repository", err);
  }
};

// ========================================================= //
//                         Question                          //
// ========================================================= //

export const saveQuestion = (question) => {
  try {
    let repositoryID = localStorage.getItem("repositoryID");
    if (!repositoryID) { repositoryID = saveRepository(); }
    db.put("question", question);

  } catch (err) {
    alert("Could not save the question");
    console.log("Could not save the question", question, err);
  }
};
