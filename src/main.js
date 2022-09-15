import { createApp } from "vue";
import Main from "./App.vue";

import UserApp from '../apps/user/src/main.js';
import AdminApp from '../apps/admin/src/main.js';


const main = createApp(Main);

main.component("UserApp", UserApp);
main.component("AdminApp", AdminApp);

main.mount("#main");