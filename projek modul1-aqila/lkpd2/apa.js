class Hewan{

    makan(){

        console.log("Sedang makan");

    }

}
class Kucing extends Hewan{

}
const kucing = new Kucing();

kucing.makan();

//1
class OrangTua{

    citaCita(){

        console.log("PNS");

    }

}
class Anak extends OrangTua{

    citaCita(){

        console.log("Pengusaha");

    }

}