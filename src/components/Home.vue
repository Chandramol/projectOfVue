<template>
  <h1>Hi User! Welcome to Home Product Page</h1><br>
  <!-- navigation bar -->
  <nav>
    <ul>
      <li><a href="#">Product</a></li>
      <router-link to="/cart">
        <li><a href="">Cart
          <span class="text-warning">{{ cartList }}</span>
        </a></li>
      </router-link>
      <li>
        <a href="#"
          >wishList
          <span class="text-warning">{{ wishList }}</span>
        </a>
      </li>
      <li @click="logOut()"><a href="#">Log Out</a></li>
    </ul>
  </nav>
  <!-- enter details -->
  <div class="productForm col-4 m-auto mt-5 rounded p-5">
    <h1>Add Product to Your Cart</h1>
    <input
      type="text"
      placeholder="Enter the Product"
      class="form-control"
      v-model="product.name"
    /><br />
    <input
      type="number"
      placeholder="Price of Product"
      class="form-control"
      v-model="product.price"
    /><br />
    <button type="button" v-on:click="addProduct()" class="btn btn-primary">
      Add On
    </button>
  </div>
  <hr />
  <!-- added product -->
  <div class="col-6 m-auto">
    <h1>Added products</h1>
    <br />
    <table class="table-primary m-auto table-bordered">
      <tr>
        <th>No.</th>
        <th>Product Name.</th>
        <th>Product Price.</th>
        <th>Actions</th>
        <th>Delete</th>
      </tr>
      <tr v-for="val in getState" :key="val.name">
        <td>{{ val.id }}</td>
        <td>{{ val.name }}</td>
        <td>{{ val.price }}</td>
        <td>
          <button @click="addCart(val.id)" class="btn btn-secondary">
            Add cart</button
          >&nbsp;
          <button
            @click="wishcart(val.id)"
            :class="
              val.is_whiteList == true ? 'btn btn-warning' : 'btn btn-info'
            "
          >
            Add WishList</button
          >&nbsp;
        </td>
        <td>
          <button class="btn btn-danger" @click="delProduct(val.id)">Del</button>
        </td>
      </tr>
    </table>
  </div>
  <!-- added to cart  form-->
  <div v-if="show" class="cartForm col-5 m-auto p-5 position-relative">
    <h3 class="mb-5 text-warning text-decoration-underline">
      Enter Detail to throw in Cart-list
    </h3>
    <div v-for="item in getCartForm" :key="item">
      <input type="radio" id="add1" @click="addressForm()" class="form-check-input" />&nbsp;
      <label for="add1">{{ item.address }}</label>
    </div>
    <input
      type="text"
      placeholder="First Name"
      v-model="cartForm.fname"
      class="form-control"
    /><br />
    <input
      type="text"
      placeholder="Last Name"
      v-model="cartForm.lname"
      class="form-control"
    /><br />
    <input
      type="text"
      placeholder="Enter Your Conatct"
      v-model="cartForm.contact"
      class="form-control"
    /><br />
    <textarea
      placeholder="Address"
      class="form-control"
      v-model="cartForm.address"
    ></textarea
    ><br />
    <button @click="closeForm()" class="closeBtn"></button>
    <button @click="submitCart()" class="btn btn-secondary">Submit</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
      show: false,
      cartForm: {
        fname: "",
        lname: "",
        contact: "",
        address: "",
      },
      cartStored: "",
      updateCart:""
    };
  },
  methods: {
    ...mapActions([
      "getPro",
      "addPro",
      "delPro",
      "updateWishList",
      "updatecartList",
      "addCartData",
      "addCartForm",
    ]),
    addProduct() {
      this.addPro({
        name: this.product.name,
        price: this.product.price,
      });
      this.product={
        name:'',
        price:''
      }
    },
    delProduct(id) {
      this.delPro(id);
    },
    logOut() {
      localStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
    addCart(id) {
      this.show = true;
      this.getState.map((value) => {
        if (id == value.id) {
          value.is_cartList=!value.is_cartList;
          this.updateCart=value.is_cartList
          this.cartStored = value;
        }
      });
    },
    closeForm() {
      this.show = false;
    },
    submitCart() {
      console.log("submit data");
      this.addCartData(this.cartStored);
      alert("Your product added in cart successfully...");
      this.addCartForm(this.cartForm);
      this.show = false;
      this.updatecartList(this.updateCart);
    },
    wishcart(id) {
      console.log("wishcart", this.getState);
      this.getState.map((value) => {
        if (id == value.id) {
          value.is_whiteList = !value.is_whiteList;
          this.updateWishList(value.is_whiteList);
        }
      });
      console.log(this.wishList);
    },
    addressForm() {
      this.addCartData(this.cartStored);
      alert("Your product added in cart successfully...");
      this.show = false;
    },
  },
  computed: {
    ...mapGetters(["getState", "getCartForm"]),
    ...mapState(["wishList","cartList"]),
  },
  mounted() {
    this.getPro();
  },
};
</script>

<style>
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
.productForm {
  background-color: antiquewhite;
}
.cartForm {
  background-color: rgb(224, 255, 245);
  position: relative;
  top: -741px;
  left: -53px;
}
.closeBtn {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}
</style>
