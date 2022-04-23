<template>

    <body>
     
   <ul>
      <li class="collection-item" 
        v-for="products in listProdutos"
        v-bind:key="products.id" 
     > 
        {{products.name }}
        {{products.prince}}
        {{products.amount}}
        {{products.description}}
        {{products.category}}
           <div class='btn-delete' @click="deleteProduct(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
             <div class='btn-edit' @click="updateProduct(products.id)">
              <p class="fa fa-pen pointer"></p>
            </div>
        </li>

    </ul>
        
    </body>
</template>

// @ is an alias to /src



<script>
import { getProducts } from '../DataService'
import { ref } from 'vue';

export default {
    name: "listProducts",
    components: {},
    data() {
        return {
          listProdutos:[],
        };
        
    },
    methods:{
      listar() {
        getProducts().then((snapshot) => {
          this.listProdutos = [];
          snapshot.forEach( item => {
            console.log(item);
            ref(this.listProdutos.push(item));
          });
        }); 
      }
    },
    created (){
      this.listar()
    },
}
</script>

<style scoped>

.collection-item {
    margin-left: 250px;
    display: flex;
}
.pointer {
    cursor: pointer;
}

.btn-delete {
  margin-left: 60px;
}
.btn-edit {
  margin-left: 40px;

}
</style>
