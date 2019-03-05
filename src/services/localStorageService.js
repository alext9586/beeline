export default {
  storageKeys: {
    maxValue: "maxValue",
    bucket: "bucket",
    discardBucket: "discardBucket",
    history: "history"
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  getValue(key) {
    return window.localStorage.getItem(key);
  }
};
