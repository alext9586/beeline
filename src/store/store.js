import Vue from "vue";
import Vuex from "vuex";
import * as spin from "@/store/modules/spin.js";
import * as option from "@/store/modules/option.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    option,
    spin
  },
  state: {},
  mutations: {},
  actions: {}
});
