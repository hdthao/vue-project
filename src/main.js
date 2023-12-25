import { createApp } from 'vue';
import ToastService from 'primevue/toastservice';
import store from './store';
import PrimeVue from 'primevue/config';
import axios from 'axios';
import App from './App.vue';
import './style.css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeicons/primeicons.css';

axios.defaults.baseURL = 'https://6588e84f324d4171525843de.mockapi.io/todo';
const app = createApp(App);
app.use(PrimeVue);
app.use(store);
app.use(ToastService);
app.mount('#app');
