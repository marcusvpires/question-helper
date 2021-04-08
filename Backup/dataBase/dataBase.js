export default function dataBase() {
  const request = indexedDB.open("dataBase", 5);
  
  request.onerror = (e) => {
    alert('Database Error')
    console.log('Database Error', e);
  }

  request.onsuccess = (e) => {
    console.log('Database Opened');
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