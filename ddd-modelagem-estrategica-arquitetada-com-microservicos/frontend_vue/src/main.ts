import { createApp } from 'vue'
import App from "./App.vue";
import './style.css'
import { AxiosAdapter } from './infra/http/HttpClient';
import { AccountGatewayHttp } from './infra/gateway/AccountGateway';

const app = createApp(App);
const httpClient = new AxiosAdapter();
const accountGateway = new AccountGatewayHttp(httpClient);
app.provide("accountGateway", accountGateway);
app.mount('#app');
