export const TYPE_OF_STORAGE = {
  localStorage: 'local',
  sessionStorage: 'session',
};

export const setToStorage = (
  key: string,
  value: any,
  typeStorage = TYPE_OF_STORAGE.localStorage
) => {
  console.log('key:', key);
  console.log('value:', value);
  console.log('typeStorage:', typeStorage);
  return typeStorage === TYPE_OF_STORAGE.localStorage
    ? localStorage.setItem(key, value)
    : sessionStorage.setItem(key, value);
};

export const getFromStorage = (key: string, typeStorage = TYPE_OF_STORAGE.localStorage) => {
  return typeStorage === TYPE_OF_STORAGE.localStorage
    ? JSON.parse(localStorage.getItem(key) || '{}')
    : sessionStorage.getItem(key);
};

export const removeFromStorage = (key: string, typeStorage = TYPE_OF_STORAGE.localStorage) => {
  return typeStorage === TYPE_OF_STORAGE.localStorage
    ? localStorage.removeItem(key)
    : sessionStorage.removeItem(key);
};
