import { Component } from "./Component.js";
export class Footer extends Component {
render() {
const tahun = new Date().getFullYear();
return `
<hr/>
<footer>
<small>&copy; ${tahun} SMK bisa SMK hebat</small>
</footer>
`;
}
}