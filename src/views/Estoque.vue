<template>
  <body>
        
        
        <VueSidebarMenu />
        <Containerestoque />

       
       <button class="btn-sair" @click="signOut" >Sair</button>
       
      </body>
</template>


// @ is an alias to /src
<script setup>

 
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase/compat/app'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
  import VueSidebarMenu from '../components/VueSidebarMenu'
  
  import Containerestoque from '../components/Containerestoque'
 

  const router = useRouter()
  const isLoggedIn = ref(true)
  // runs after firebase is initialized
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        isLoggedIn.value = true // if we have a user
      } else {
        isLoggedIn.value = false // if we do not
      }
  })
  const signOut = () => {
    firebase.auth().signOut()
    router.push('/')
  }

   const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
          alert('voce precisa estar logado para acessar essa rota')
          router.push('/')
      }
  })
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
        })


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
  text-shadow:none;
  margin-left: 85% !important;
  margin-top: 1% !important;
  position:relative;
  border: none;
  cursor: pointer;

}


</style>