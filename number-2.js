/*
Buat sebuah class dengan nama Student. 
Class ini akan menyimpan nama, NIM dan daftar nilai (disimpan dalam array) dari seorang mahasiswa. 
Di class ini juga dapat melakukan penambahaan data nilai baru ke dalam daftar nilai, 
mengambil nilai rata rata dari daftar nilai, dan menentukan predikat (A, B+, B, C+, C, D, E).
*/

class Student
{
    nama;
    nim;
    daftarNilai = [];

    constructor(nama, nim, daftarNilai)
    {
        this.nama = nama;
        this.nim = nim;
        this.daftarNilai= daftarNilai;
    }
    getStudent()
    {
        const student = {
            nama: this.nama,
            nim: this.nim,
            daftar_nilai: this.daftarNilai
        }
        return student;
    }
    tambahNilai(nilai)
    {
        this.daftarNilai.push(nilai);
    }
    average()
    {
        let avg;
        let total = 0;
        for (let i = 0; i < this.daftarNilai.length; i++) {
            total += this.daftarNilai[i];
        }
        avg = total / this.daftarNilai.length

        return avg;
    }
    predikat()
    {
        let predikat = 'Predikat ';
        if (this.average() <= 100 && this.average() >= 90) {
            predikat += 'A';
        }else if (this.average() <= 89 && this.average() >= 80) {
            predikat += 'B+';
        }else if (this.average() <= 79 && this.average() >= 70) {
            predikat += 'B';
        }else if (this.average() <= 69 && this.average() >= 60) {
            predikat += 'C+';
        }else if (this.average() <= 59 && this.average() >= 50) {
            predikat += 'C';
        }else if (this.average() <= 49 && this.average() >= 40) {
            predikat += 'D';
        }else if (this.average() <= 39 && this.average() >= 30) {
            predikat += 'E';
        }else{
            predikat += 'tidak ada';
        }

        return predikat;
    }
}

const mhs = new Student('Rizky', 552012, [70, 80, 100])
const student = mhs.getStudent();
const nilai = mhs.tambahNilai(100);
const avg = mhs.average();
const predikat = mhs.predikat();
console.log(student);
console.log(`Nilai rata rata = ${avg}`);
console.log(predikat);