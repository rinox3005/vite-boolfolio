import { createApp } from "vue";

//import style
import "./assets/scss/main.scss";

//import vue root component
import App from "./App.vue";

// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//app mount
createApp(App).mount("#app");
