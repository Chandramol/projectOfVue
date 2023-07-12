<template>
    <h1>bjkhb</h1>
</template>

<script>
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
        }
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