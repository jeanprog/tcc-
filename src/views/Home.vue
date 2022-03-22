<template>
  
  
        <button @click="signOut">Logout</button>
      
      
      
</template>


// @ is an alias to /src
<script setup>
  import { ref, watchEffect } from 'vue' // used for conditional rendering
  import firebase from 'firebase/compat/app'
  import { useRouter } from 'vue-router'
  import { onBeforeUnmount } from 'vue'
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
    router.push('/sign-in')
  }

   const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
          alert('voce precisa estar logado para acessar essa rota')
          router.push('/sign-in')
      }
  })
  onBeforeUnmount(() => {
      // clear up listener
      authListener()
        })

</script>
