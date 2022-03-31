<template>
    <body>
        <form className="new-task" @submit.prevent="handleSubmit">
            <label for="form-user-name">Nome</label>
            <input
                id="form-user-name"
                type="name"
                placeholder="Nome"
                v-model="name"
            />
            <label for="form-user-email">Email</label>
            <input
                id="form-user-email"
                type="email"
                placeholder="Email"
                v-model="email"
            />
            <label for="form-user-telefone">Telefone</label>
            <input
                id="form-user-telefone"
                type="text"
                placeholder="Telefone"
                v-model="telefone"
            />
            <button type="submit">Adicionar  Usuário</button>
        </form>
    </body>
</template>

// @ is an alias to /src
<script>
import UserDataService from './UserDataService'



export default {
    name: "add-user",
    data() {
        return {
            id: null,
            name: '',
            email: '',
            telefone: ''
        }
    },
    methods: {
        handleSubmit(event){
            UserDataService.createUser({name: this.name, email: this.email, telefone: this.telefone}).then(() => {
                console.log('salvei')
                this.name = ''
                this.email = ''
                this.telefone = ''
            })
        }
    }
}

</script>

<style scoped>
body {
    border: none !important;
    height: 100vh !important;
    background-color: #ffff !important;
    overflow: hidden !important;
    width: 100%;
}

.btn-sair {
    background: #993399;
    color: white;

    border-radius: 10px;
    height: 5vh !important ;
    width: 10% !important;

    font-family: 'Poppins', sans-serif;
    text-shadow: none;
    margin-left: 85% !important;
    margin-top: 1% !important;
    position: relative;
    border: none;
    cursor: pointer;
}
</style>
