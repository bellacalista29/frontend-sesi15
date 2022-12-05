function Pegawai(namaDepan, namaBelakang) {
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;

    this.getNamaLengkap = function() {
        return this.namaDepan + ' ' + this.namaBelakang;
    }
}

let pegawai1 = new Pegawai('Toni', 'Stark');
console.log(pegawai1);
console.log(Pegawai.prototype);
console.log(pegawai1.getNamaLengkap());

console.log(pegawai1 instanceof Pegawai); //pegawai 1 adalah dari constructor Pegawai = true
console.log(pegawai1 instanceof Object); //pegawai 1 adalah Object = true
//semua adalah prototype dari object