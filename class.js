//kalau class urutan code mempengaruhi, jadi harus dideclare dulu baru dipakai, beda dengan function
class Avenger {
    constructor(nama)
    {
        this.nama = nama;
    }

    getNama()
    {
        return this.nama;
    }
}

let spiderman = new Avenger("Peter Parker");
console.log(spiderman);