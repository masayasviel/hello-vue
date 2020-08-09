import "babel-polyfill"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgPath: null
  },
  getters: {
    imgPath(state) {
      return state.imgPath;
    }
  },
  mutations: {
    setImgPath(state, payload) {
      state.imgPath = payload.imgPath;
    }
  }
});

export default store