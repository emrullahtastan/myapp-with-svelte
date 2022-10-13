import "./app.css";
import App from "./App.svelte";

let a = [1, 2, 3];

const app = new App({
  target: document.getElementById("app"),
});

export default app;
