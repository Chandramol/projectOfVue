import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    product: [],
    cart: [],
    cartForms:[],
    wishList: 0,
    cartList:0
  },
  getters: {
    getState: (state) => state.product,
    getCart: (state) => state.cart,
    getCartForm:(state)=>state.cartForms
  },
  actions: {
    async getPro({ commit }) {
      let res = await axios.get("http://localhost:3000/product");
      commit("getProduct", res.data);
    },
    async addPro({ commit }, product) {
      let res = await axios.post("http://localhost:3000/product", product);
      commit("newProduct", res.data);
    },
    async delPro({commit},id){
        await axios.delete(`http://localhost:3000/product/${id}`);
        commit("delProduct")
    },
    updateWishList({ commit }, wishList) {
      commit("addToWishlist", wishList);
    },
    updatecartList({commit},cartList){
        commit("addTocartlist",cartList)
    },
    addCartData({ commit }, cart) {
      commit("cartData", cart);
    },
    deleteCartData({commit},cart){
        commit("deleteData",cart)
    },
    addCartForm({commit},cartForms){
        commit("cartFormData",cartForms)
    }
  },
  mutations: {
    
    getProduct: (state, product) => (state.product = product),
    newProduct: (state, product) => state.product.push(product),
    delProduct:(state,id)=>{
        let del=state.product.indexOf(id)
        state.product.splice(del,1)
    },
    addToWishlist: (state, wishList) =>
      wishList ? state.wishList++ : state.wishList--,
    addTocartlist:(state,cartList)=>
        cartList?state.cartList++:state.cartList,
    cartData: (state, cart) => state.cart.push(cart),
    deleteData:(state,cart)=>{
        let index=state.cart.indexOf(cart)
        state.cart.splice(index,1)
    },
    cartFormData:(state,cartForms)=>(state.cartForms.push(cartForms))
  },
});

export default store;
