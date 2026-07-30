class Component {
    constructor(props = {}) {
        this.props = props;
    }
 
    render() {
        throw new Error("Method render() belum dibuat di class turunannya!");
    }
}
 
class Produk extends Component {
    #nama;
    #harga;
 
    constructor(props) {
        super(props);
        this.#nama = props.nama;
        this.#harga = props.harga;
    }
 
    render() {
        return `${this.#nama} - Rp ${this.#harga}`;
    }
}
 
const p1 = new Produk({ nama: "binder", harga: 60000 });
console.log(p1.render());