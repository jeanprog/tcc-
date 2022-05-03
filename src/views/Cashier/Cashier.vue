<template>
 <section class="sales">
     
    <section class ="vendaprod">
        <form className="new-product"  @change ="handleSales($event)">
          <select name="product" id="product">
             <option v-for="products in listProdutos"
              :key="products.id" 
              :value="products.name">{{ products.name }}
              </option>
      </select>
            
            <label for="form-user-description">tipo de pagamento</label>
            <input
                id="form-user-description"
                v-model="payment"
                type="text"
                placeholder=""
            />
            <label for="form-user-prince">valor</label>
            <input
                id="form-user-prince"
                v-model="prince"
                type="text"
                placeholder=""
            />
             <label for="form-user-amount">quantidade</label>
            <input
                id="form-user-amount"
                v-model="amount"
                type="text"
                placeholder=""
            />
            <button type="submit">Salvar</button>
        </form>
   </section>
      
        
        
  
        
    </section>
</template>

// @ is an alias to /src



<script>
import { getProducts } from '../Products/DataService'
import { ref } from 'vue';
import {db} from '../../config/firebase'
import {createSales} from './service'




export default {
    name: "listProducts",
    components: {},
    data() {
        return {
          
             
          listProdutos:[],
          
          
           
            id: '',
            product: '',
            payment: '',
            prince: '',
            amount: '',
           
        };
        
    },
    created() {
        this.listar()
        
    },
   
    
    methods:{
       listar() {
        getProducts().then((snapshot) => {
          this.listProdutos = [];
          snapshot.forEach( doc => {
            console.log (doc)
            let objectProduct = {};
                objectProduct = doc.data ();
                objectProduct.id = doc.id;
                
            ref(this.listProdutos.push(objectProduct));
          });
        }); 
      },
   
     
        handleSales() {
            createSales({
                product: this.product,
                payment: this.payment,
                prince: this.prince,
                amount: this.amount,
            }).then(() => {
                console.log('salvei')
                this.product = ''
                this.payment = ''
                this.prince = ''
                this.amount = ''
                
            })
        },
      
    }
}
    </script>

    <style>
 .sales {
     flex-direction: column !important; 
     margin-left: 300px !important;
     
 }
    </style>
