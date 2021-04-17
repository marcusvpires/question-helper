import dataBase from './dataBase';

const onRequestError = (e) => {
  alert('Database request error')
  console.log('Database request error', e);
}

export const add = async (storage, element, back = () => {}) => {
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

export const put = async (storage, element, back = () => {}) => {
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

export const remove = (storage, key, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    store.delete(key).onsuccess = (ev) => {
      back({ result: ev.target.result, key: key });
    }
  }
}

export const removeAll = (storage, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    store.clear().onsuccess = (ev) => {
      back({ result: ev.target.result });
    }
  }
}

export const getAll = (storage, back = () => {}) => {
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

export const exportDB = (back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['repository'], 'readonly');
    const store = transaction.objectStore('repository');
    store.getAll().onsuccess = (ev) => {
      exportQuestions(ev.target.result);
    }
  }
}

const exportQuestions = (repositoryData, back = () => {}) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['question'], 'readonly');
    const store = transaction.objectStore('question');
    store.getAll().onsuccess = (ev) => {
      back(repositoryData, ev.target.result);
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
        if (value === cursor.key) { questions.push(cursor.value) }
        cursor.continue()
      } else { back(questions) }
    }
  }
}

export const deleteIndex = (storage, key, value) => {
  const request = dataBase();
  request.onerror = onRequestError;

  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    const req = store.index(key).openCursor()
    req.onsuccess = (ev) => {
      const cursor = ev.target.result;
      if (cursor) { 
        if (value === cursor.key) { cursor.delete() }
        cursor.continue()
      }
    }
  }
}
