export const namespaced = true;

const SPIN_STATE_START = "start";
const SPIN_STATE_SPIN = "spin";
const SPIN_STATE_STOP = "stop";

export const state = {
  options: [],
  currentIndex: 0,
  currentValue: "Ready...",
  spinState: SPIN_STATE_STOP
};

export const mutations = {
  START_SPIN(state, options) {
    state.options = [...options];
    state.spinState = SPIN_STATE_START;
  },
  ADVANCE_INDEX(state) {
    state.currentIndex =
      state.currentIndex + 1 === state.options.length
        ? 0
        : state.currentIndex + 1;
    state.currentValue = state.options[state.currentIndex].value;
    state.spinState = SPIN_STATE_SPIN;
  },
  STOP_SPIN() {
    state.spinState = SPIN_STATE_STOP;
  }
};

export const actions = {
  spin({ commit, rootState }) {
    commit("START_SPIN", rootState.option.options);
    const minSpins = state.options.length;
    const maxSpins = 2 * minSpins;
    const numberOfSpins =
      Math.floor(Math.random() * Math.floor(maxSpins)) + minSpins;
    let spin = 0;

    const rotate = () => {
      setTimeout(() => {
        commit("ADVANCE_INDEX");
        if (spin++ < numberOfSpins) {
          rotate();
        } else {
          commit("STOP_SPIN");
        }
      }, 250);
    };

    setTimeout(() => {
      rotate();
    }, 500);
  }
};
