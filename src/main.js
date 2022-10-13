import "./app.css";
import App from "./App.svelte";

let a = [1, 2, 3, 4, 5];

const app = new App({
  target: document.getElementById("app"),
});

export default app;
