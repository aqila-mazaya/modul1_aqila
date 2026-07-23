class Rekening {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }
    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log(`Berhasil menyetor: Rp${jumlah}`);
        } else {
            console.log("Jumlah setoran harus lebih dari 0");
        }
    }

    tarik(jumlah) {
        if (jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log(`Berhasil menarik: Rp${jumlah}`);
        } else {
            console.log("Saldo tidak cukup");
        }
    }

  
    getSaldo() {
        return this.#saldo;
    }
}

const rekeningSaya = new Rekening();

console.log("Saldo awal:", rekeningSaya.getSaldo()); 

rekeningSaya.setor(90000); 
console.log("Saldo setelah setor:", rekeningSaya.getSaldo()); 

rekeningSaya.tarik(40000); 
console.log("Saldo setelah tarik:", rekeningSaya.getSaldo()); 

rekeningSaya.tarik(70000); 
console.log("Saldo akhir:", rekeningSaya.getSaldo()); 