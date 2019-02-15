export const namespaced = true;

export const state = {
  options: [],
  currentIndex: 0,
  currentValue: "",
  spinning: false
};

export const mutations = {
  START_SPIN(state, options) {
    state.options = [...options];
    state.spinning = true;
  },
  ADVANCE_INDEX(state) {
    state.currentIndex =
      state.currentIndex + 1 === state.options.length
        ? 0
        : state.currentIndex + 1;
    state.currentValue = state.options[state.currentIndex].value;
  },
  STOP_SPIN() {
    state.spinning = false;
  }
};

export const actions = {
  spin({ commit, rootState }) {
    commit("START_SPIN", rootState.option.options);
    const numberOfSpins = 5; // Math.floor(Math.random() * 100) + 100;
    let spin = 0;

    const rotate = () => {
      setTimeout(() => {
        commit("ADVANCE_INDEX");
        if (spin++ < numberOfSpins) {
          rotate();
        } else {
          commit("STOP_SPIN");
        }
      }, 500);
    };

    rotate();
  }
};
