class Rekening {
  constructor() {
    this.saldo = 0;
  }

  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`Berhasil setor Rp ${jumlah}. Saldo saat ini: Rp ${this.saldo}`);
  }

  tarik(jumlah) {
    if (jumlah <= this.saldo) {
      this.saldo -= jumlah;
      console.log(`Berhasil tarik Rp ${jumlah}. Saldo sisa: Rp ${this.saldo}`);
    } else {
      console.log("Saldo tidak cukup");
    }
  }

  getSaldo() {
    return this.saldo;
  }
}

// Contoh Penggunaan:
const rek = new Rekening();

rek.setor(100000); // Saldo bertambah 100rb
rek.tarik(30000);  // Berhasil tarik 30rb
rek.tarik(90000);  // Gagal: Saldo tidak cukup
console.log(`Total Saldo Akhir: Rp ${rek.getSaldo()}`);
