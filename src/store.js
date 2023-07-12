import {createStore} from 'vuex'
import axios from 'axios'

const store=createStore({
    state:{
        product:[
           
        ]
    },
    getters:{
        getState: state => state.product
    },
    actions:{
        async getPro({commit}){
            let res=await axios.get("http://localhost:3000/product")
            commit("getProduct",res.data)
        },
        async addPro({commit},product){
            let res=await axios.post("http://localhost:3000/product",
                product
            )
            commit("newProduct",res.data)
        }

    },
    mutations:{
        getProduct:(state,product)=>(state.product=product),
        newProduct:(state,product)=>state.product.push(product)
    }
})

export default store;
