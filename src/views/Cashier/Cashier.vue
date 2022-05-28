<template>
    <div>
        <section class="add_product">
            <h1>CAIXA</h1>
            <form className="new-product" @submit.prevent="addProduct()">
                <label for="form-user-name">Escolha o produto</label>
                <input v-model="productselected" type="text" list="listin" />
                <datalist id="listin">
                    <option
                        v-for="products in listProdutos"
                        :key="products.id"
                        :value="products.name"
                    >
                        {{ products.name }}
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
                    type="number"
                    placeholder=""
                />
                <button type="submit">Adicionar Produto</button>
            </form>
        </section>
        <section class="sales">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Valor</th>
                        <th>Pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="sale in sales" :key="sale.product_id">
                        <td>{{ sale.product_name }}</td>
                        <td>
                            R$
                            {{ parseInt(sale.prince) * parseInt(sale.amount) }}
                        </td>
                        <td>{{ sale.payment }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="sell()">Realizar venda</button>
        </section>
    </div>
</template>

// @ is an alias to /src
<script>
import { ref } from 'vue'
import { getProducts } from '../Products/DataService'
import { db } from '../../config/firebase'
import { createSales } from './service'

export default {
    name: 'ListProducts',
    components: {},
    data() {
        return {
            listProdutos: [],
            sales: [],
            id: '',
            productselected: '',
            payment: '',
            prince: '',
            amount: '',
        }
    },
    created() {
        this.id = this.$route.params.id

        if (this.id) {
            console.log('escreva alguma coisa')
            db.collection('sales')
                .doc(this.id)
                .get()
                .then(snapshot => {
                    const objetosales = snapshot.data()
                    this.productselected = objetosales.productselected
                    this.payment = objetosales.payment
                    this.prince = objetosales.prince
                    this.amount = objetosales.amount
                })
        } else {
            this.listar()
        }
    },

    methods: {
        addProduct() {
            ref(
                this.sales.push({
                    payment: this.payment,
                    product_name: this.productselected,
                    product_id: this.listProdutos.find(
                        x => x.name === this.productselected,
                    ).id,
                    amount: this.amount,
                    prince: this.prince,
                }),
            )
            this.payment = ''
            this.productselected = ''
            this.amount = ''
            this.prince = ''
        },
        sell() {
            console.log('Vamos Vender')
            console.log(this.sales)
        },
        saveSales() {
            if (this.id) {
                this.updateSales()
            } else {
                this.handleSales()
            }
        },
        listar() {
            getProducts().then(snapshot => {
                this.listProdutos = []
                snapshot.forEach(doc => {
                    let objectProduct = {}
                    objectProduct = doc.data()
                    objectProduct.id = doc.id

                    ref(this.listProdutos.push(objectProduct))
                })
            })
        },

        handleSales() {
            createSales({
                product: this.productselected,
                payment: this.payment,
                prince: this.prince,
                amount: this.amount,
            }).then(response => {
                this.payment = ''
                this.prince = ''
                this.amount = ''
                this.updateProductamount(this.productselected)

                this.$router.push({ name: 'ListSales' })
            })
        },

        updateSales() {
            db.collection('sales')
                .doc(this.id)
                .set({
                    productselected: this.productselected,
                    payment: this.payment,
                    prince: this.prince,
                    amount: this.amount,
                })
                .then(() => {
                    this.$router.push({ name: 'ListSales' })
                    console.log('atualizei')
                    window.alert('produto atualizado com sucesso')
                })
        },

        updateProductamount(id) {
            db.collection('products')
                .doc(id)
                .update({ amount: 'agoraatualizei' })
                .then(() => {
                    console.log('atualizei')
                })
        },
    },
}
</script>
<style>
h1 {
    position: relative;
    left: 300px;
    top: 70px;
}
.add_product {
    margin-top: 0px !important;
    margin-right: 0px !important;
    margin-bottom: 0px !important;
    margin-left: 255px !important;
    width: 70% !important;

    top: 50px;
}

.new-product {
    position: relative !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-top: 100px !important;
    flex-direction: column !important;

    height: 400px;
}
.new-product input {
    width: 300px;
    border: 1px solid rgb(200, 200, 200);
    outline: 0;
    font-size: 15px;
    padding: 7px;
    border-radius: 10px;
}

.new-product button {
    background: #993399;
    color: white;
    width: 200px;
    height: 30px;
    border-radius: 10px;
    position: relative;
    top: 20px;

    font-family: 'Poppins', sans-serif;
    text-shadow: none;

    border: none;
    cursor: pointer;
}
</style>
