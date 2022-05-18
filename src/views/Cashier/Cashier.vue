<template>
   <section class="sales">
     
    <section class ="vendaprod">
        <form className="new-product"  @submit.prevent ="saveSales()">
          <input type="text"  list="listin" v-model="productselected">
          <datalist id="listin">
             <option v-for="products in listProdutos"
              :key="products.id" 
               v-bind:value= "products.name + '|' + products.id" >{{ products.name }}
              </option>
          </datalist>
            
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
            productselected: {},
            payment: '',
            prince: '',
            amount: '',
           
        };
        
    },
    created (){
       this.id = this.$route.params.id
      if(this.id){
          console.log('escreva alguma coisa')
         db.collection('sales').doc(this.id)
        .get()
        .then(snapshot => {
          const objetosales = snapshot.data()
          this.productselected = objetosales.productselected
          this.payment = objetosales.payment
          this.prince = objetosales.prince
          this.amount = objetosales.amount
        
          
        })
      }
        else {
            this.listar()
        }  
    
     
    },

    
    
    methods:{

        saveSales(){
        if(this.id){
          this.updateSales();
          
        } else {
          this.handleSales();
        }
      },
       listar() {
        getProducts().then((snapshot) => {
          this.listProdutos = [];
          snapshot.forEach( doc => {
            
            let objectProduct = {};
                objectProduct = doc.data ();
                objectProduct.id = doc.id;
                
            ref(this.listProdutos.push(objectProduct));
          });
        }); 
      },
      
     
        handleSales() {
        createSales({
            
              product: this.productselected,
              payment: this.payment,
              prince: this.prince,
               amount: this.amount,
           }).then(() => {
                console.log('salvei')
                this.productselected = ''
                this.payment = ''
                this.prince = ''
                this.amount = ''
               
                this.$router.push({ name: 'ListSales'})
            })
        console.log(this.productselected)
        },

      updateSales () {
           db.collection('sales').doc(this.id).set({productselected: this.productselected,
                payment: this.payment,
                prince: this.prince,
                amount: this.amount,})
                .then(() => {
         
          this.$router.push({ name: 'ListSales' });
          console.log('atualizei')
          window.alert("produto atualizado com sucesso")
        })
      },
    updateProductamount () {
    db.collection('products').doc(this.productselected).update({}).then(() =>
             console.log('diminui o estoque') )}
     
     }
    }
          
</script>
 <style>
 .sales {
     flex-direction: column !important; 
     margin-left: 300px !important;
     
 }
    </style>