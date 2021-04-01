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

/* export const get = (callback) => {
  const request = dataBase();

  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([''], 'readonly');
    const store = transaction.objectStore('');
    store.getAll().onsuccess = (ev) => {
      callback(ev.target.result);
    }
  }
}

export const destroy = () => {

} */