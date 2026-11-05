# Template Undangan Digital: Panduan Mengubah Data

Template ini hanya satu file: `undangan-digital.html`. Tidak perlu install apa pun. Buka file dengan editor teks (VS Code, Notepad++, dan sejenisnya), ubah data, simpan, lalu buka di browser untuk memeriksa hasilnya.

## 1. Ubah data utama

Cari blok ini di dalam file (dekat bagian bawah, di dalam `<script>`):

```js
// ===== UBAH DATA DI SINI =====
var D = {
  groom: "Rizky", bride: "Amelia",
  groomFull: "Rizky Pratama, S.T.", groomParents: "Putra dari Bapak ... & Ibu ...",
  brideFull: "Amelia Putri, S.Pd.", brideParents: "Putri dari Bapak ... & Ibu ...",
  date: "2027-01-17T10:00:00+07:00",
  waNumber: "6281234567890",
  events: [ ... ]
};
```

| Field | Fungsi | Contoh |
|---|---|---|
| `groom`, `bride` | Nama panggilan, tampil besar di sampul dan hero | `"Rizky"`, `"Amelia"` |
| `groomFull`, `brideFull` | Nama lengkap beserta gelar | `"Rizky Pratama, S.T."` |
| `groomParents`, `brideParents` | Keterangan orang tua | `"Putra dari Bapak A & Ibu B"` |
| `date` | Tanggal dan jam acara utama, dipakai untuk hitung mundur dan tulisan tanggal | `"2027-01-17T10:00:00+07:00"` |
| `waNumber` | Nomor WhatsApp mempelai yang menerima RSVP | `"6281234567890"` |
| `events` | Daftar acara (kartu di bagian Acara) | lihat bagian 2 |

Catatan penting:
- **Format `date`:** `TAHUN-BULAN-TANGGALTJAM:MENIT:00+07:00`. `+07:00` untuk WIB, `+08:00` untuk WITA, `+09:00` untuk WIT.
- **Format `waNumber`:** awali dengan `62`, tanpa `+`, tanpa `0` di depan, tanpa spasi atau tanda hubung. Contoh: `0812-3456-7890` ditulis `6281234567890`.
- Pastikan `waNumber` diisi **nomor mempelai**, bukan nomor Anda, supaya RSVP tidak masuk ke Anda.
- Tanda kutip dua (`"`) jangan sampai terhapus. Jika di dalam teks ada tanda kutip, tulis dengan `\"`.

## 2. Ubah atau tambah acara

Setiap acara adalah satu blok di dalam `events`. Salin satu blok untuk menambah acara, hapus satu blok untuk mengurangi.

```js
events: [
  { title: "Akad nikah", time: "10.00 WIB", place: "Masjid Contoh Raya", address: "Jl. Contoh No. 1, Medan", map: "https://maps.google.com/?q=Medan" },
  { title: "Resepsi",    time: "12.00 WIB sampai selesai", place: "Gedung Serbaguna Contoh", address: "Jl. Contoh No. 2, Medan", map: "https://maps.google.com/?q=Medan" }
]
```

- Setiap blok dipisahkan **koma**, kecuali blok terakhir (tanpa koma setelahnya).
- Tanggal yang tampil di kartu selalu mengikuti `date`. Jika resepsi di hari berbeda, kabari saya supaya fitur tanggal per acara bisa ditambahkan.
- **Link peta (`map`):** buka lokasi di Google Maps, tekan Bagikan, lalu salin link-nya dan tempel di `map`.

## 3. Ganti foto

Foto di template ini hanyalah **ilustrasi dummy**. Untuk memakai foto asli klien:

1. Taruh foto di folder yang sama dengan `undangan-digital.html` (atau di subfolder, misalnya `foto/`).
2. Cari `var PHOTOS = [` di dalam skrip. Ganti seluruh isinya dengan nama file foto, enam foto berurutan:

```js
var PHOTOS = ["foto/1.jpg", "foto/2.jpg", "foto/3.jpg", "foto/4.jpg", "foto/5.jpg", "foto/6.jpg"];
```

3. Ganti juga `var ALTS = [...]` dengan deskripsi singkat tiap foto (untuk pembaca layar), misalnya `"Rizky dan Amelia di taman"`.
4. Hapus baris catatan `<p class="note">Foto contoh. ...</p>` di bagian galeri.

Keterangan:
- **Foto pertama** (`PHOTOS[0]`) juga dipakai sebagai foto lengkung di bagian atas, jadi pilih foto terbaik untuk urutan pertama.
- Tata letak galeri: foto 1 tinggi, foto 4 lebar, sisanya kotak. Foto dipotong otomatis agar pas, jadi hindari foto yang objek pentingnya berada di tepi.
- Kecilkan ukuran foto sebelum dipakai (disarankan kurang dari 300 KB per foto, lebar sekitar 1000 px) agar undangan cepat terbuka di HP.

## 4. Teks lain yang perlu dicek manual

Beberapa teks tidak dibaca dari blok `D`, jadi ubah langsung di bagian HTML:

| Teks | Cari kata ini |
|---|---|
| Judul tab browser | `<title>Undangan Pernikahan ...` |
| Label sampul untuk pembaca layar | `aria-label="Rizky dan Amelia"` |
| Kalimat pembuka dan doa | `Dengan memohon rahmat dan ridho ...` (sesuaikan dengan agama atau adat klien) |
| Kalimat penutup | `Merupakan kehormatan bagi kami ...` |
| Teks alt foto lengkung di atas | `alt="Foto contoh pasangan ..."` |

## 5. Ubah warna (opsional)

Di bagian atas `<style>` ada variabel warna:

```css
:root{ --bg:#E9EEE8; --card:#F6F8F4; --fg:#1E2D26; --brass:#8A6A38; --pine:#1E2D26; --gold:#C2A06A; ... }
```

- `--pine` adalah warna sampul. `--gold` adalah warna tombol di sampul dan hiasan.
- `--brass` adalah warna aksen di mode terang. Versi mode gelap ada di dua baris di bawahnya (di dalam `@media (prefers-color-scheme:dark)` dan `:root[data-theme="dark"]`).
- Untuk membuat tema baru, ganti nilai warna ini saja. Pastikan teks tetap mudah dibaca di atas warna latarnya.

## 6. Link undangan per tamu

Setelah di-deploy, tambahkan `?to=` dan nama tamu di belakang alamat:

```
https://undangan-rizky-amelia.vercel.app/?to=Bapak%20Budi%20dan%20Keluarga
```

- Spasi ditulis `%20`. Atau pakai tautan pembuat link seperti "URL encode" di Google untuk mengubah nama otomatis.
- Nama tamu muncul di sampul dan terisi otomatis di kolom nama formulir RSVP.
- Tanpa `?to=`, sampul menampilkan "Tamu Undangan".
- Tips: buat daftar nama tamu di spreadsheet, lalu gabungkan dengan rumus `="https://alamat-undangan/?to="&SUBSTITUTE(A2;" ";"%20")` supaya link per tamu jadi otomatis.

## 7. Deploy ke Vercel (per klien)

1. Buat folder baru berisi `undangan-digital.html` yang **diganti namanya menjadi `index.html`**, beserta folder foto (jika ada).
2. Buka vercel.com, pilih Add New lalu Project. Untuk cara tercepat tanpa Git, install Vercel CLI (`npm i -g vercel`), masuk ke folder tadi, jalankan `vercel`, dan ikuti petunjuknya. Atau unggah folder ke repositori GitHub lalu impor repositori itu di Vercel.
3. Setelah selesai, Vercel memberi alamat `nama-proyek.vercel.app`. Nama proyek bisa diatur agar mudah diingat, misalnya `undangan-rizky-amelia`.
4. Jika klien ingin domain sendiri, tambahkan di Settings lalu Domains pada proyek tersebut.

## 8. Daftar periksa sebelum dikirim ke klien

- [ ] Nama mempelai, orang tua, dan gelar sudah benar (cek ejaan dua kali)
- [ ] Tanggal dan jam benar, hitung mundur menunjukkan angka yang masuk akal
- [ ] Zona waktu pada `date` sesuai (WIB, WITA, atau WIT)
- [ ] Link peta membuka lokasi yang tepat
- [ ] `waNumber` adalah nomor mempelai, coba kirim RSVP uji coba dan pastikan pesan masuk
- [ ] Foto dummy sudah diganti dan catatan "Foto contoh" sudah dihapus
- [ ] Kalimat pembuka sesuai dengan keyakinan dan adat klien
- [ ] Sudah dibuka di HP (Android dan iPhone, jika memungkinkan) serta di laptop
- [ ] Link contoh dengan `?to=` sudah dicoba

## Kendala yang sering terjadi

| Masalah | Penyebab dan solusi |
|---|---|
| Halaman kosong atau tombol tidak bekerja | Ada tanda kutip atau koma yang terhapus di blok `D`. Periksa lagi, atau tempel ulang dari panduan ini. |
| Hitung mundur menunjukkan "0" atau acara sudah dimulai | Format `date` salah, atau tanggalnya sudah lewat. |
| Foto tidak muncul | Nama file atau folder salah (huruf besar dan kecil dibedakan), atau foto tidak ikut ter-upload ke Vercel. |
| Nama tamu tidak muncul | Link tidak memakai `?to=`, atau dibuka dari halaman demo di Claude (fitur ini hanya bekerja setelah Anda deploy sendiri). |
| RSVP masuk ke nomor yang salah | `waNumber` belum diganti. |
