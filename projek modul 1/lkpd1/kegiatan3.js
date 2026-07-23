//variabel nama dan umur
let umur = 15;
let nama = "aqila";
let lulus = true;
 
console.log(nama + " berumur " + umur + " tahun.");

//program lulus atau tidak
let nilai = 60;
 
if (nilai >= 75) {
    console.log("Lulus");
} else {
    console.log("sorry gaks lulus");
}

//perulangan 1-20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

//hitung luas persegi
function hitungluaspersegi(sisi){
    return sisi*sisi;
}
let sisipersegi = 5;
let luas = hitungluaspersegi(sisipersegi);

console.log("luas persegi dengan sisi" + sisipersegi + "adalah" 
    + luas);