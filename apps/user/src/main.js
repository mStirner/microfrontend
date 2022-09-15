// user app
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

export default App;

// create vue app
const app = createApp(App);

app.use(router);

window.mount = () => {
    console.log("mount called")
    app.mount("#app");
};