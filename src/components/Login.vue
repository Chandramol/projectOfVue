<template>
   <div class="d-flex justify-content-around">
        <button @click="signupForm()" class="btn btn-warning text-light">Sign Up</button>
        <button @click="signIn()" class="btn btn-primary">Sign In</button>
    </div>
  <div class="loginForm col-4 m-auto bg-info p-5 rounded">
    <h2 class="text-light mb-5">LogIn Through</h2>
    <form>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Your Name"
        v-model="name"
      /><br />
      <input
        type="text"
        class="form-control"
        placeholder="Password"
        v-model="password"
      /><br />
      <button type="button" class="btn btn-success" @click="loginForm()">Log In</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    async loginForm() {
      console.log("logged In");
      let result =await axios.get(`http://localhost:3000/register?name=${this.name}&password=${this.password}`);
      console.log(result);

      if(result.status==200 && result.data.length>0){
        localStorage.setItem("registration",result.data)
        this.$router.push({
            path:'/home'
        })
      }
      else{
        alert("Invalid userName or Password");
      }
    },
    signupForm(){
      this.$router.push({path:'/'})
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
