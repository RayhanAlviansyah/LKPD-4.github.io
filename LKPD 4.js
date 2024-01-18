// No 1

let PABP = 70
let Matematika = 82
let DPK = 77

let rata = ( PABP + Matematika + DPK ) / 3

if(rata >= 80 && rata <=100) {
grade = "A";}

else if (rata >=75 && rata <80) {
grade = "B";}

else if (rata >=65 && rata <75) {
grade = "C";}

else if (rata >=45 && rata <65) {
grade = "D";}

else if (rata >=0 && rata <45) {
grade = "E";}

else {grade = "K"}

console.log (grade)
console.log ("nilai rata rata nya adalah: " + rata )

// matikan codingan di atas ini supaya codingan di bawah ini berjalan

//No 2

let input = prompt ("input 11 digit")

let gol = parseInt (input[0])
let dd = parseInt (input.substring (1,3))
let mm = parseInt (input.substring (3,5))
let thn = parseInt (input.substring (5,9))
let urt = parseInt (input.substring (9))

let mmname = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]

let namabln = mmname [ mm - 1 ]

console.log (`golongan ${gol},tanggal ${dd}, bulan ${namabln}, tahun ${thn} nomor urut ${urt}`)

// matikan codingan di atas supaya codiangan di bawah ini berjalan dengan aman

// no 3

let jam = Number(prompt("masukan jam"));
let menit = Number(prompt("masukan menit"));
let detik = Number(prompt("masukan detik")) + 1;

if (detik > 59) {
  hasil = detik = 0;
  hasilm = menit + 1;
  hasilj = jam;
  hasilsemua = `jadi bila kita menambahkan 1 detik maka waktu yang akan keluar adalah ${hasilj}:${hasilm}:${hasil}`;

  if (hasilm > 59) {
    hasil = detik = 0;
    hasilm = menit = 0;
    hasilj = jam + 1;
    hasilsemua = `jadi bila kita menambahkan 1 detik maka waktu akan keluar adalah ${hasilj}:${hasilm}:${hasil}`;
  }

  if (hasilj > 23) {
    hasil = detik = 0;
    hasilm = menit = 0;
    hasilj = jam = 0;
    hasilsemua = `jadi bila kita menambahkan 1 detik maka waktu akan keluar adalah ${hasilj}:${hasilm}:${hasil}`;
  }
  console.log(hasilsemua);
} else {
  console.log(
    `jadi bilangan kita menambahkan 1 detik adalah ${jam}:${menit}:${detik}`
  );
}
