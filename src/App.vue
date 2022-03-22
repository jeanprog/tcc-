<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
    </nav>
    <router-view />
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
#app {
  
 font-family: 'Poppins', sans-serif;
  
}

*{
  background-color: #993399;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
