export default function dataBase() {
  const request = indexedDB.open("dataBase", 4);
  
  request.onerror = (e) => {
    alert('Database Error')
    console.log('Database Error', e);
  }

  request.onsuccess = (e) => {
    console.log('Database Opened');
  }

  request.onupgradeneeded = (e) => {
    const db = e.target.result;
    createObjStore('repository', db)
    createObjStore('question', db)
  }

  return request;
}

function createObjStore(name, db) {
  console.info('Create', name, 'data base table')
  if (!db.objectStoreNames.contains(name)) {
    db.createObjectStore(name, {keyPath: 'id'})
  }
}