export const namespaced = true;

export const state = {
  options: [],
  currentIndex: 0,
  currentValue: ""
};

export const mutations = {
  START_SPIN(state, options) {
    state.options = [...options];
  },
  ADVANCE_INDEX(state) {
    state.currentIndex =
      state.currentIndex + 1 === state.options.length
        ? 0
        : state.currentIndex + 1;
    state.currentValue = state.options[state.currentIndex].value;
  }
};

export const actions = {
  spin({ commit, rootState }) {
    commit("START_SPIN", rootState.option.options);
    const numberOfSpins = Math.floor(Math.random() * 100) + 100;
    let spin = 0;

    const rotate = () => {
      setTimeout(() => {
        commit("ADVANCE_INDEX");
        if (spin++ < numberOfSpins) {
          rotate();
        }
      }, 500);
    };

    rotate();
  }
};
