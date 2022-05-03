<template>

    <body>
     
   <ul>
    <li class="collection-item" 
        v-for="(Products, key) in listProdutos"
        :key= "products.id" 
     > 
    
        
        {{Products.name }}
        {{Products.prince}}
        {{Products.amount}}
        {{Products.description}}
        {{Products.category}}
           <div class='btn-delete' @click="deleteProduct(index)">
              <span class="fa fa-trash pointer"></span>
            </div>
             <div class='btn-edit' @click="updateProduct(Products.id)">
              <p class="fa fa-pen pointer"></p>
            </div>
        </li>

    </ul>
        
    </body>
</template>

// @ is an alias to /src



<script>
import DataService from '../DataService'


export default {
    name: "listProducts",
    components: {},
    
    data() {
        
      
        return {
        
          listProdutos:[],
      

        };
        
    },
 created (){
    this.listar()
  },
  methods:{
    
    listar() {
     this.listProdutos = DataService.methods();  
     console.log(this.listProdutos)
     }
  }
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
