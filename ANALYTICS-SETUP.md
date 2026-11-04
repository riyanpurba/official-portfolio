# Setup GA4 + GTM + Search Console — riyanpurba.vercel.app

ID yang dipakai: GTM `GTM-MRXZR54Q`, GA4 `G-09V67FP9VR`.

## Arsitektur
Situs hanya memuat **GTM** (snippet di `index.html`). GA4 dipasang **di dalam GTM**, bukan lewat gtag langsung.
Sebelumnya GA4 (gtag) dan GTM dimuat bersamaan: kalau GTM juga punya tag GA4, pageview terhitung dua kali. Itu sudah dihapus.
Situs mengirim event ke `dataLayer` (`src/utils/analytics.ts`); GTM meneruskannya ke GA4.

## Event yang dikirim
| Event | Kapan |
|---|---|
| `click_whatsapp` | klik link wa.me |
| `click_miqvero` | klik link ke MIQVERO |
| `download_cv` -> `file_download` di GA4 | klik link PDF (CV) |
| `click_email` | klik mailto |
| `click_social` | klik GitHub / LinkedIn / Instagram |
| `click_outbound` | klik link keluar lainnya |
| `generate_lead` | form kontak terkirim (email berhasil / tombol WhatsApp), param `method` |

## 1. GTM
1. tagmanager.google.com -> container `GTM-MRXZR54Q` -> **Admin -> Import Container**.
2. Pilih `gtm-container-import.json`, workspace **Existing**, pilih **Merge -> Rename conflicting tags**.
3. Buka **Preview**, masukkan `https://riyanpurba.vercel.app/`, dan cek tag "GA4 - Configuration" menyala di Page View.
4. Klik tombol WhatsApp / unduh CV / kirim form dan cek event ikut menyala.
5. Kalau container lama sudah punya tag GA4 Configuration, **jangan dobel**: hapus salah satunya.
6. **Submit -> Publish**.

## 2. GA4
1. analytics.google.com -> Admin -> Data streams -> pilih stream web `riyanpurba.vercel.app` dan pastikan Measurement ID `G-09V67FP9VR`.
2. **Admin -> Events**, tandai `generate_lead` sebagai **Key event** (opsional: `click_whatsapp`).
3. Cek **Reports -> Realtime** saat Anda membuka situs.
4. **Admin -> Product links -> Search Console links -> Link**, pilih properti GSC Anda, agar laporan pencarian muncul di GA4.

## 3. Search Console
1. Properti `https://riyanpurba.vercel.app/` (tipe URL prefix). Tag verifikasi sudah ada di `index.html` (`google-site-verification`); **jangan dihapus**.
2. **Sitemaps** -> kirim `sitemap.xml`.
3. **URL inspection** -> `https://riyanpurba.vercel.app/` -> Request indexing.

## Cek cepat setelah deploy
- Lihat sumber halaman: ada `GTM-MRXZR54Q`, tidak ada `gtag/js`.
- DevTools -> Network: hanya satu `gtm.js`, dan request `collect` ke GA4 satu per pageview.

## Catatan
- Untuk pengunjung UE/privasi ketat, pertimbangkan banner persetujuan cookie dan Consent Mode di GTM.
- Setelah `npm install`, `react-gtm-module` sudah tidak dipakai lagi.
