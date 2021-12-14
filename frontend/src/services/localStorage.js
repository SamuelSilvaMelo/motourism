const setLocalStorege = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);

  if (!item) return null;

  return JSON.parse(item);
};

module.exports = {
  setLocalStorege,
  getLocalStorage,
};
