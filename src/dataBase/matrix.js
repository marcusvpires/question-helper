export default function matrix() {
  const request = indexedDB.open("dataBase", 1);
  
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
  }

  return request;
}

function createObjStore(name, db) {
  console.info('Create', name, 'data base table')
  if (!db.objectStoreNames.contains(name)) {
    const object = db.createObjectStore(name, {keyPath: 'id'})
    object.createIndex('timestamp', 'timestamp');
  }
}