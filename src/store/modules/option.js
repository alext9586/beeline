import localStorageService from "@/services/localStorageService";

export const namespaced = true;

export const state = {
  options: [],
  history: []
};

const storage = {
  saveBucket(value) {
    localStorageService.setItem(localStorageService.storageKeys.bucket, value);
  },
  saveHistory(history) {
    localStorageService.setItem(
      localStorageService.storageKeys.history,
      history
    );
  },
  loadBucket() {
    return localStorageService.getValue(localStorageService.storageKeys.bucket);
  },
  loadHistory() {
    return localStorageService.getValue(
      localStorageService.storageKeys.history
    );
  }
};

let nextId = 1;
export const mutations = {
  HYDRATE(state, buckets) {
    state.options = [...buckets.optionsBucket];
    state.history = [...buckets.historyBucket];
    nextId =
      buckets.optionsBucket.length > 0
        ? Math.max(...buckets.optionsBucket.map(b => b.id)) + 1
        : 0;
  },
  PUSH(state, option) {
    state.options.push({
      ...option,
      id: nextId++
    });
    storage.saveBucket(JSON.stringify(state.options));
  },
  DELETE(state, optionToRemove) {
    state.options = state.options.filter(
      option => option.id !== optionToRemove.id
    );
    storage.saveBucket(JSON.stringify(state.options));
  },
  PICK(state, optionToPick) {
    state.history.push(optionToPick);
    storage.saveHistory(JSON.stringify(state.history));
    state.options = state.options.filter(
      option => option.id !== optionToPick.id
    );
  }
};

export const actions = {
  hydrate({ commit }) {
    const bucketString = storage.loadBucket();
    const historyBucketString = storage.loadHistory();
    const optionsBucket = JSON.parse(bucketString || "[]");
    const historyBucket = JSON.parse(historyBucketString || "[]");
    commit("HYDRATE", {
      optionsBucket: optionsBucket,
      historyBucket: historyBucket
    });
  },
  add({ commit }, option) {
    commit("PUSH", option);
  },
  remove({ commit }, optionToRemove) {
    commit("DELETE", optionToRemove);
  },
  pick({ commit }, optionToPick) {
    commit("PICK", optionToPick);
  }
};
