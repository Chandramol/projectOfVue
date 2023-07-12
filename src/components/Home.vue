<template>
  <h1>Hi User! Welcome to Home Product Page</h1>
  <nav>
    <ul>
      <li><a href="#">Product</a></li>
      <router-link to='/cart'>
        <li><a href="">Cart</a></li>
      </router-link>
      <li><a href="#">WishList</a></li>
      <li @click="logOut()"><a href="#">Log Out</a></li>
    </ul>
  </nav>
  <div class="productForm col-4 m-auto mt-5 rounded p-5">
    <h1>Add Product to Your Cart</h1>
    <input
      type="text"
      placeholder="Enter the Product"
      class="form-control"
      v-model="name"
    /><br />
    <input
      type="number"
      placeholder="Price of Product"
      class="form-control"
      v-model="price"
    /><br />
    <button type="button" v-on:click="addProduct()" class="btn btn-primary">
      Add On
    </button>
  </div>
  <hr>
  
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
      detail: [],
    };
  },
  methods: {
    ...mapActions(["getPro","addPro"]),
    addProduct(){
      this.addPro({
        name:this.name,
        price:this.price
      })
      alert("added to cart")
      this.$router.push({path:'/cart'})
    },
    logOut() {
      localStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
  },
  computed:mapGetters(["getState"]),
  mounted(){
    this.getPro()
  }
};
</script>

<style >

h1 {
  color: rgb(249, 168, 19);
  margin-bottom: 30px;
}
ul {
  display: flex;
  list-style: none;
  justify-content: center;
}
ul li a {
  text-decoration: none;
  background-color: gray;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  transition: all 0.5s;
}
ul li a:hover {
  background-color: rgb(188, 187, 187);
  color: orange;
}
</style>
