// admin app
import { createApp } from "vue";
import App from "./App.vue";
export default App;

// create vue app
const app = createApp(App);

window.mount = () => {
    console.log("mount called")
    app.mount("#app");
};