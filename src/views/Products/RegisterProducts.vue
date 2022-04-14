<template>
    <body>
        <form className="new-product" @submit.prevent="handleProducts">
            <label for="form-user-name">Nome</label>
            <input
                id="form-user-name"
                v-model="name"
                type="name"
                placeholder=""
            />
            <label for="form-user-description">descrição</label>
            <input
                id="form-user-description"
                v-model="description"
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
            <button type="submit">Adicionar produto</button>
        </form>
    </body>
</template>

// @ is an alias to /src
<script>
import DataService from './DataService'

export default {
    name: 'Addproducts ',
    data() {
        return {
            id: null,
            name: '',
            description: '',
            prince: '',
            amount: '',
        }
    },
    methods: {
        handleProducts() {
            DataService.createProduct({
                name: this.name,
                description: this.description,
                prince: this.prince,
                amount: this.amount,
            }).then(() => {
                console.log('salvei')
                this.name = ''
                this.description = ''
                this.prince = ''
                this.amount = ''
            })
        },
    },
}
</script>

<style scoped>


    
    
</style>
