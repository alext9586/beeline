import * as localStorageService from "@/services/localStorageService";

export const namespaced = true;

export const state = {
  options: []
};

const storage = {
  saveBucket(value) {
    localStorageService.setItem(localStorageService.storageKeys.bucket, value);
  }
};

let nextId = 1;
export const mutations = {
  HYDRATE(state, bucket) {
    state.options = JSON.parse(bucket);
    nextId = Math.max(bucket.map(b => b.id)) + 1;
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
  }
};

export const actions = {
  hydrate({ commit, bucket }) {
    commit("HYDRATE", bucket);
  },
  add({ commit }, option) {
    commit("PUSH", option);
  },
  remove({ commit }, optionToRemove) {
    commit("DELETE", optionToRemove);
  }
};
