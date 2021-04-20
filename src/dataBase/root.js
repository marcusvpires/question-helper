import dataBase from './dataBase';
import errorAlert from '../global/components/prompt/Error'

export const add = async (storage, element, back = () => {}) => {
  const request = dataBase();
  request.onerror = (ev) => {
    errorAlert('errorAdd', {
      title: `Error on add ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
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
  request.onerror = (ev) => {
    errorAlert('errorPut', {
      title: `Error on put ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    const store = transaction.objectStore(storage);
    store.put(element);
    back(element)
  }
}

export const putMany = async (storage, arr, load = () => {}, props) => {
  const request = dataBase();
  request.onerror = (ev) => {
    errorAlert('errorPutMany', {
      title: `Error on put ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readwrite');
    arr.forEach((element, index) => {
      const store = transaction.objectStore(storage);
      store.put(element);
      load(index, ...props)
    })
  }
}

export const remove = (storage, key, back = () => {}) => {
  const request = dataBase();
  request.onerror = (ev) => {
    errorAlert('errorRemove', {
      title: `Error on remove ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
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
  request.onerror = (ev) => {
    errorAlert('errorRemove', {
      title: `Error on remove ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
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
  request.onerror = (ev) => {
    errorAlert('errorGetAll', {
      title: `Error on get ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction([storage], 'readonly');
    const store = transaction.objectStore(storage);
    store.getAll().onsuccess = (ev) => {
      back(ev.target.result);
    }
  }
}

export const getDatabase = (back = () => {}) => {
  const request = dataBase();
  request.onerror = (ev) => {
    errorAlert('errorGetDatabase', {
      title: `Error on get database in database `,
    })
    console.error('Database request error', ev)
  };
  request.onsuccess = (e) => {
    const db = e.target.result;
    const transaction = db.transaction(['repository'], 'readonly');
    const store = transaction.objectStore('repository');
    store.getAll().onsuccess = (ev) => {
      const repositories = ev.target.result
      
      const request = dataBase()
      request.onerror = (ev) => {
        errorAlert('errorGetAll', {
          title: `Error on get database `,
        })
        console.error('Database request error', ev)
      };

      request.onsuccess = (e) => {
        const db = e.target.result;
        const transaction = db.transaction(['question'], 'readonly');
        const store = transaction.objectStore('question');
        store.getAll().onsuccess = (ev) => {
          const request = dataBase()
          request.onerror = (ev) => {
            errorAlert('errorGetAll', {
              title: `Error on get database `,
            })
            console.error('Database request error', ev)
          };
          back(repositories, ev.target.result)
        }
      }
    }
  }
}

export const getIndex = (storage, key, value, back = () => {}) => {
  const request = dataBase();
  request.onerror = (ev) => {
    errorAlert('errorGetIndex', {
      title: `Error on get ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
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
  request.onerror = (ev) => {
    errorAlert('errorAdd', {
      title: `Error on delete ${storage} in database `,
    })
    console.error('Database request error', ev)
  };
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
