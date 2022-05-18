<template>

  
 <section class="list">
 <p>nome preço valor quantidade </p>
     <ul>
      <li class="collection-item" 
        v-for="sales in listSales"
        v-bind:key="sales.id" >
         <div class= "dados" id="name"> {{sales.product }}</div>
     <div class= "dados" id="prince"> {{sales.prince}} </div>
     <div class= "dados" id="amount">   {{sales.amount}} </div>
     <div class= "dados" id="payment">{{sales.payment}}</div>  
      <div class='btn-delete' @click="deleteSales(sales)" >
       <span class="fa fa-trash pointer" ></span>
            </div>
             <div class='btn-edit' @click="edit(sales.id)" >
              <span class="fa fa-pen pointer"></span>
              </div>
              </li>
              </ul>
 </section>
</template>

// @ is an alias to /src



<script>
import { getSales } from '../service'
import { ref } from 'vue';
import {db} from '../../../config/firebase'


export default {
    name: "listSales",
    components: {},
    data() {
        return {
         
          listSales:[],
        
        };
        
    },

     created (){
      this.listar() 
      },
     
     methods:{
       listar() {
        getSales().then((snapshot) => {
          this.listSales = [];
          snapshot.forEach( doc => {
            console.log(doc);
            let objectSales = {};
                objectSales = doc.data ();
                objectSales.id = doc.id;
                
            ref(this.listSales.push(objectSales));
            
          });
        }); 
      },
      
     edit(idsales) {
      this.$router.push({ name: 'cashier' , params: {id: idsales}})

    },
   

     
    }
}   
</script>

<style scoped>
 
.list {
 
  height: 90vh;
}
.list p {
  margin-left:300px!important;
  justify-content: space-around;
}
.collection-item {
    margin-left: 300px!important;
    display:flex;
    
    width: 60%;
    justify-content: space-around;
    padding: 0.7%;
    margin-bottom:40px;
    
}
.dados {
  border-right: 0.6px solid grey;
  border-left: 0px solid grey;
  padding: 0.9%; 
  }
  .pointer {
    cursor: pointer;
}

.btn-delete  {
  margin-left: 100px;
  
  position:relative;
  
  width: 40px;

}

.btn-edit {
 margin-left: 20px;
  width: 40px;
}

#id {
  min-width: 20%;
 
}
#name {
  min-width: 35%;
}
#amount {
  min-width: 1%;
}
#price {
  min-width: 25%;
}
</style>