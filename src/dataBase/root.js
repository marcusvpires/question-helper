import dataBase from './dataBase';

const onRequestError = (e) => {
  alert('Database request error')
  console.log('Database request error', e);
}

export const add = (storage, element, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    store.add(element);
    back(element)
  }
}

export const put = (storage, element, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    store.put(element);
    back(element)
  }
}

export const getAll = (storage, key, value, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readonly');
    const store = transaction.objectStore(storage);
    store.getAll().onsuccess = (ev) => {
      back(ev.target.result);
    }
  }
}

export const getIndex = (storage, key, value, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readonly');
    const store = transaction.objectStore(storage);
    const questions = []
    const req = store.index(key).openCursor()
    req.onsuccess = (ev) => {
      const cursor = ev.target.result;
      if (cursor) { 
        if (value === cursor.key) { console.log('Cursor:', cursor.value); questions.push(cursor.value) }
        cursor.continue()
      } else { back(questions) }
    }
  }
}
