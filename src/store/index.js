import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "Dish 01",
        imageUrl: "https://source.unsplash.com/RVFYDVISBT0",
        price: 120,
      },
      {
        name: "Dish 02",
        imageUrl: "https://source.unsplash.com/a6kYPun9_ao",
        price: 110,
      },
      {
        name: "Dish 03",
        imageUrl: "https://source.unsplash.com/ICA6PtRBYLw",
        price: 100,
      },
      {
        name: "Dish 04",
        imageUrl: "https://source.unsplash.com/EHIjSQZQnOg",
        price: 90,
      },
      {
        name: "Dish 05",
        imageUrl: "https://source.unsplash.com/AQ3Vpw4hi1g",
        price: 80,
      },
      {
        name: "Dish 06",
        imageUrl: "https://source.unsplash.com/mNefYU7uRbk",
        price: 70,
      },
      {
        name: "Dish 07",
        imageUrl: "https://source.unsplash.com/ZuCIYt_Hp-g",
        price: 60,
      },
      {
        name: "Dish 08",
        imageUrl: "https://source.unsplash.com/OSwea3yxjT0",
        price: 50,
      },
      {
        name: "Dish 09",
        imageUrl: "https://source.unsplash.com/vSrBwXX-ftw",
        price: 40,
      },
    ],
    cart:
      localStorage.getItem("cart") !== null ? localStorage.getItem("cart") : "",
  },
  mutations: {
    addTocart(state, { pname, quantity }) {
      let cart = state.cart.length ? JSON.parse(state.cart) : {};

      if (!cart[pname]) {
        cart[pname] = 0;
      }
      cart[pname] += quantity;
      let stringifiedCart = JSON.stringify(cart);
      localStorage.setItem("cart", stringifiedCart);
      state.cart = stringifiedCart;
    },
    removeItem(state, pname) {
      let cart = state.cart.length ? JSON.parse(state.cart) : {};
      delete cart[pname];
      let stringifiedCart = JSON.stringify(cart);
      localStorage.setItem("cart", stringifiedCart);
      state.cart = stringifiedCart;
    },
  },
  actions: {
    addTocart({ commit }, { pname, quantity }) {
      commit("addTocart", { pname, quantity });
    },
    removeItem({ commit }, pname) {
      commit("removeItem", pname);
    },
  },
  getters: {
    getTotal(state) {
      let cart = state.cart.length ? JSON.parse(state.cart) : {};
      const total = Object.entries(cart).reduce((acc, curr) => {
        const product = state.products.find((p) => {
          return p.name === curr[0];
        });
        return acc + curr[1] * product.price;
      }, 0);
      return total.toFixed(2);
    },
    getCartJson(state) {
      let cart = state.cart.length ? JSON.parse(state.cart) : {};

      return cart;
    },
    getImages(state) {
      return state.products.map((p) => p.imageUrl);
    },
  },
  modules: {},
});
