export default class LocalStorageManager {
  save = (object) => {
    const stringObject = JSON.stringify(object);
    window.localStorage.setItem('object', stringObject);
  }

  retrieve = () => {
    const serialObject = window.localStorage.getItem('object');
    const object = JSON.parse(serialObject) || null;
    return (object === null) ? null : object.gameID;
  }
}

export const storage = new LocalStorageManager();