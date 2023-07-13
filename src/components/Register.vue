<template>
    <div class="d-flex justify-content-around">
        <button @click="signupForm()" class="btn btn-warning text-light">Sign Up</button>
        <button class="btn btn-light">Welcome to shopping center</button>
        <button @click="signIn()" class="btn btn-primary">Sign In</button>
    </div>
    <hr>
  <div class="register col-4 m-auto bg-dark rounded p-5">
    <h1 class="text-light mb-5">Register New User here</h1>
    <form>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your Name"
        v-model="register.name"
      /><br />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Email Address"
        v-model="register.email"
      /><br />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your Contact"
        v-model="register.contact"
      /><br />
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your City"
        v-model="register.city"
      /><br />
      <input
        type="text"
        class="form-control"
        placeholder="Set Your Password"
        v-model="register.password"
      /><br />

      <button type="button" class="btn btn-success" @click="registerForm()">
        Register
      </button>

    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      register: {
        name: "",
        email: "",
        contact: "",
        city: "",
        password: "",
      },
    };
  },
  methods: {
    async registerForm() {
      console.log("redistered");
      let result = await axios.post("http://localhost:3000/register", {
        name: this.register.name,
        email: this.register.email,
        contact: this.register.contact,
        city: this.register.city,
        password: this.register.password,
      });
      console.log(result);

      if (result.status == 201) {
        alert("Your data has been successfully registered");
        // localStorage.setItem("registration", result.data);
        this.$router.push({ path: "/login" });
      }
    },
    signIn(){
        this.$router.push({path:'/login'})
    }
  },
  mounted(){
    let store=localStorage.getItem("registration")
    if(store){
      this.$router.push({path:'/home'})
    }
  }
};
</script>
