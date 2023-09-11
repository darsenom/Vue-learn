import './assets/main.css' 

import PrimeVue from 'primevue/config'; 
// import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css' 
import 'primeicons/primeicons.css'; 
import 'primevue/resources/themes/arya-purple/theme.css'
import Sidebar from 'primevue/sidebar';

 


//--------------------------firebase--------------------------//

import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIO6wL0qdP40hc_l2EKj8C2dYTQZ6Tq0M",
    authDomain: "learn-vue-296af.firebaseapp.com",
    projectId: "learn-vue-296af",
    storageBucket: "learn-vue-296af.appspot.com",
    messagingSenderId: "1051761731287",
    appId: "1:1051761731287:web:1b6f988d46b7f89a5e7292"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);

//--------------------------firebase--------------------------//

import { createApp } from 'vue' 
import App from './App.vue' 
import router from './router' 
 
const app = createApp(App) 
 
app.use(router) 
app.use(PrimeVue); 
 
import ToastService from 'primevue/toastservice';
app.use(ToastService);

app.mount('#app')



