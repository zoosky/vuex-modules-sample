import Vue from "vue";
import Vuex from "vuex";
import numbers from "./modules/numbers";
import { myModule } from "./my-store-module.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    numbers,
    myModule
  }
});
