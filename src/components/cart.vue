<template>
    <h1>Hi User! Welcome to Home Product Page</h1>
     <nav>
    <ul>
        <router-link to='/home'>
        <li><a href="">Product</a></li>
      </router-link>
      <router-link to='/cart'>
        <li><a href="">Cart</a></li>
      </router-link>
      <li><a href="#">WishList</a></li>
      <li @click="logOut()"><a href="#">Log Out</a></li>
    </ul>
  </nav>
    <div class="col-6 m-auto">
    <h1>Added products</h1>
  <table  class="table table-bordered table-primary">
    <tr>
      <th>No</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>other</th>
    </tr>
    <tr v-for="val in getState" :key="val.name">
      <td>{{ val.id }}</td>
      <td>{{ val.name }}</td>
      <td>{{ val.price }}</td>
    </tr>
  </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default{
        name:'Cart',
        data(){
            return{
                product:'',
                price:''
            }
        },
        methods:{
            addProduct(){
                console.log("added");
            }
        },
        computed:mapGetters(["getState"]),
    }
</script>

<style>
.productForm{
    background-color: antiquewhite;
}
h1{
  color: rgb(249, 168, 19);
  margin-bottom: 30px;
}
</style>