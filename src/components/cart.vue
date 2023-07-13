<template>
   <h1>Hi User! Welcome to Home Product Page</h1><br>
  <!-- navigation bar -->
  <nav>
    <ul>
      <router-link to="/home">
        <li><a href="">Product</a></li>
      </router-link>
      <li><a href="#">Cart</a></li>
      <li><a href="#">WishList
        <span>{{ wishList }}</span>
      </a></li>
      <li @click="logOut()"><a href="#">Log Out</a></li>
    </ul>
  </nav>
  <!-- your cartlist -->
  <div class="col-6 m-auto">
    <h1>Your cart list products</h1>
    <br />
    <table class="table-primary m-auto table-bordered">
      <tr>
        <th>No.</th>
        <th>Product Name.</th>
        <th>Product Price.</th>
        <th>other</th>
      </tr>
      <tr v-for="val in getCart" :key="val.id">
        <td>{{ val.id }}</td>
        <td>{{ val.name }}</td>
        <td>{{ val.price }}</td>
        <td>
          <button @click="deleteCart(val.id)" class="btn btn-danger">Remove Cart</button>
        </td>
      </tr>
     
    </table>
  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  name: "Cart",
  methods:{
    ...mapActions(["deleteCartData"]),
    deleteCart(id){
      this.deleteCartData(id);
      alert("Your cart has been Deleted");
    }
  },
  computed:{
    ...mapGetters(["getCart"])
  }
};
</script>
