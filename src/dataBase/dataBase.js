import errorAlert from '../global/components/prompt/Error'

export default function dataBase() {
  const request = indexedDB.open("dataBase", 5);
  
  request.onerror = (e) => {
    errorAlert('erroAlert', {
      title: 'Error in open database',
      desc: 'The local database could not be initialized. Make sure you are not in an incognito window, your browser is compatible with indexedDB and has not blocked access.'
    })
    console.error('Error in open database:', e);
  }

  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    if (!db.objectStoreNames.contains('repository')) {
      db.createObjectStore('repository', {keyPath: 'id'})
    }
    if (!db.objectStoreNames.contains('question')) {
      const questionDB = db.createObjectStore('question', {keyPath: 'id'})
      questionDB.createIndex("repositoryID", "repositoryID", { unique: false });
    }
  }

  return request;
}