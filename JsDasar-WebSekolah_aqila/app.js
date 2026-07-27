import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";

const navbar = new Navbar({ activePage: "home" }).render();
const footer = new Footer().render();

// Tempel dua component ini berurutan ke #app
document.getElementById("app").innerHTML = navbar + footer;

