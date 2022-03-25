import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD_gOY8mJg5DIJJbj8IGcmc-d7dWrluqkU",
    authDomain: "tcc1-f6fa9.firebaseapp.com",
    projectId: "tcc1-f6fa9",
    storageBucket: "tcc1-f6fa9.appspot.com",
    messagingSenderId: "677312789428",
    appId: "1:677312789428:web:46f67dd811976303b450e1",
    measurementId: "G-BR6P2QNVT7"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

// Initialize Firebase

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueSidebarMenu);
app.mount("#app");

