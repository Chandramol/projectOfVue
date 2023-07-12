<template>
  <h1>Hi User! Welcome to Home Product Page</h1>
  <nav>
    <ul>
      <li><a href="#">Product</a></li>
      <li><a href="#">Cart</a></li>
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
      Add
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
      detail:[]
    };
  },
  methods: {
    addProduct() {
      this.detail.push(this.product)
    },
    logOut() {
      localStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style scoped>
body {
  background-color: antiquewhite;
}
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
