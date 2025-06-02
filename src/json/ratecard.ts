interface RateCardProps {
    type: string;
    price: string;
    description: string[];
    whatsappLink: string;
}

export const ratecard: RateCardProps[] = [
    {
        type: "Starter",
        price: "Rp 500.000,-",
        description: [
            "✅ Desain responsif & modern",
            "✅ SSL",
            "✅ Fokus promosi 1 produk / layanan",
            "✅ Cocok untuk campaign, iklan, promo",
            "✅ Estimasi selesai 2-3 hari",
            "💡 Domain + Hosting bisa dibantu (opsional)",
        ],
        whatsappLink: "https://wa.me/6282137527284?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20Starter%20Rp500.000%2C%20boleh%20saya%20tanya-tanya%3F"
    },
    {
        type: "Basic",
        price: "Rp 750.000,-",
        description: [
            "✅ Halaman: Tentang, Layanan, Galeri, Kontak",
            "✅ SSL",
            "✅ Mobile-friendly",
            "✅ Bisa custom sesuai bidang usaha",
            "✅ Estimasi selesai 3-5 hari",
            "💡 Domain + Hosting bisa dibantu (opsional)",
        ],
        whatsappLink: "https://wa.me/6282137527284?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20Basic%20Rp750.000%2C%20saya%20ingin%20buat%20website%20untuk%20bisnis%20saya."
    },
    {
        type: "Plus",
        price: "Rp 1.500.000,-",
        description: [
            "✅ CMS custom (bukan WordPress)",
            "✅ SSL",
            "✅ Posting berita, tiket, atau produk",
            "✅ Admin panel untuk kelola konten",
            "✅ Bisa multi user & role admin",
            "💡 Domain + Hosting bisa dibantu (opsional)",
        ],
        whatsappLink: "https://wa.me/6282137527284?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20Plus%20Rp1.500.000%2C%20dan%20butuh%20website%20dengan%20CMS%20custom%20%2B%20admin%20panel."
    }
];
