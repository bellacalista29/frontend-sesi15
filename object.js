let pegawai = {
    namaDepan : "Toni",
    namaBelakang : "Stark",
    greeting : function() {
        console.log('Hello!');
    },
    getNamaLengkap: function() {
        return this.namaDepan + ' ' + this.namaBelakang;
    }
};

console.log(pegawai.namaDepan);
console.log(pegawai);
console.log(pegawai.hasOwnProperty("namaTengah")); //method has own property itu dari parent prototype di js

// pegawai.greeting = function() {
//     console.log('Hello ' + pegawai.namaDepan);
// }

pegawai.greeting();
console.log(pegawai.getNamaLengkap());