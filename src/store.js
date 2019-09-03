import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
    producto: {}
  },
  mutations: {
    chanceDrawer(state) {
      state.drawer = !state.drawer;
    },
    setProducto(state, payload) {
      state.producto = payload;
    }
  },
  actions: {
    productoData: ({ commit }, payload) => {
      console.log("Store: ", payload);
      commit("setProducto", payload);
    }
  },
  getters: {
    getProductoData(state) {
      return state.producto;
    }
  }
});
