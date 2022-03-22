
  
<template>

<div class="container">
<h1>Login</h1>
  <div class="single-input">
<input type="text" placeholder="Email" v-model="email"/>

   </div>
  <div class="single-input">
    <input type="password" placeholder="Password" v-model="password"/>
  </div>
 <p v-if="errMsg">{{ errMsg }}</p>
   <button @click="signIn">Entrar</button>
</div>
   
</template>




<script setup>

  import { ref } from 'vue'
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import { useRouter } from 'vue-router' // import router
 
 
  const email = ref('')
  const password = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const router = useRouter() // get a reference to our vue router
  const signIn = () => { // we also renamed this method
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/') // redirect to the feed
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'user-not-found':
              errMsg.value = 'No account with that email was found'
              break
       
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
}
  
</script>
 
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
     background-color: #ffff;
    
}
h1{
    margin-top: 100px;
    text-align: center;
}

.container {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    box-shadow: 0 0 5px rgba(0,0,1,3);
    padding: 30px 4%;
    border-radius: 15px;
font-family: 'Poppins', sans-serif;
}

.container div.single-input{
    position: relative;
    margin: 40px 10px;
    width:100%;
   
   
}

.container div.single-input input{
    position: relative;
    border-radius: 10px;
    width:100%;
    height: 30px;
    padding: 7px;
    border: 0;
    border-bottom: 2px solid rgb(200,200,200);
    outline: 0;
    font-size:15px;
    font-family: 'Poppins', sans-serif;
}
.container div.single-input input:focus {
border-bottom: 2px solid #993399;
}

button { 
    
  background: #993399;
  color: white;
  
  border-radius: 10px;
  height: 50px;
  width: 70%;
  
  font-family: 'Poppins', sans-serif;
  text-shadow:none;
  margin-left: 15%;
  position:relative;
  border: none;
}

button:hover{
   background: #e0bcdd;
   cursor: pointer;

}

</style>