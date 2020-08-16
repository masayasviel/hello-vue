import "babel-polyfill"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    imgPath: null,
    textData: {}
  },
  getters: {
    imgPath(state) {
      return state.imgPath;
    },
    textData(state) {
      return state.textData;
    }
  },
  mutations: {
    setImgPath(state, payload) {
      state.imgPath = payload.imgPath;
    },
    newNode(state, payload) {
      const nodeTitle = "node" + payload.nodeCount;
      Vue.set(state.textData, nodeTitle, {
        text: nodeTitle,
        fontFamily: "ＭＳ ゴシック",
        fontSize: 10,
        color: "black"
      });
    },
    deleteNode(state, payload) {
      delete state.textData[payload.title];
    }
  }
});

export default store