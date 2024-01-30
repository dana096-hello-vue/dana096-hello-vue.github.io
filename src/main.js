import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfjkP7NDWgRTL30Y7wngkj4qbu9lVMc2c",
  authDomain: "dana096-hello-vue.firebaseapp.com",
  projectId: "dana096-hello-vue",
  storageBucket: "dana096-hello-vue.appspot.com",
  messagingSenderId: "664267509585",
  appId: "1:664267509585:web:f8fe5a37143b6846920d70",
  measurementId: "G-GF3HCZX2QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
