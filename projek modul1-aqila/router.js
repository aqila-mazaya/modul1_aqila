import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { KontakPage } from "./pages/KontakPage.js";
export const routes = {
"/home": HomePage,
"/about": AboutPage,
"/kontak": KontakPage,
};
export function router() {
let path = window.location.hash.replace("#", "");
if (path === "") {
path = "/home";
}
const PageClass = routes[path] || HomePage;
const page = new PageClass(
    
    {
        namaSekolah: "SMK Sunfloo"
    }
);
document.getElementById("app").innerHTML = page.render();
}