export const namespaced = true;

export const state = {
  options: []
};

let nextId = 1;
export const mutations = {
  PUSH(state, option) {
    state.options.push({
      ...option,
      id: nextId++
    });
  },
  DELETE(state, optionToRemove) {
    state.options = state.options.filter(
      option => option.id !== optionToRemove.id
    );
  }
};

export const actions = {
  add({ commit }, option) {
    commit("PUSH", option);
  },
  remove({ commit }, optionToRemove) {
    commit("DELETE", optionToRemove);
  }
};
