 
 <template>
 <section class="list">
     
   <ul>
    <p>nome preço valor quantidade </p>
      <li class="collection-item" 
        v-for="products in listProdutos"
        v-bind:key="products.id" 
     > 
     <div class= "dados" id="name"> {{products.name }}</div>
     <div class= "dados" id="prince"> {{products.prince}} </div>
     <div class= "dados" id="amount">   {{products.amount}} </div>
     <div class= "dados" id="description">{{products.description}}</div>  
       
     
        
       
           <div class='btn-delete' @click= "deleteproduct(products)">
              <span class="fa fa-trash pointer"></span>
            </div>
             <div class='btn-edit' @click="edit(products.id)">
              <span class="fa fa-pen pointer"></span>
            </div>
        </li>

    </ul>
    
        
    </section>
</template>

// @ is an alias to /src



<script>
import { getProducts } from '../DataService'
import { deleteProducts } from '../DataService'
import { ref } from 'vue';
import {db} from '../../../config/firebase'



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
        getProducts().then((snapshot) => {
          this.listProdutos = [];
          snapshot.forEach( doc => {
            console.log(doc);
            let objectProduct = {};
                objectProduct = doc.data ();
                objectProduct.id = doc.id;
                
            ref(this.listProdutos.push(objectProduct));
          });
        }); 
      },
    edit(idproduct) {
      this.$router.push({ name: 'RegisterProducts' , params: {id: idproduct}})

    },
   

     deleteproduct(products) {
     
      if (window.confirm("deseja mesmo deletar o produto?")) {
      
      
          db.collection('products').doc(products.id).delete().then(() => {
            console.log("Document deleted!");
            
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },

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
  border-left: 0.px solid grey;
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
