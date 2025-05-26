const RateCard = () => {
    return (
        <div className="min-h-screen bg-black flex flex-wrap items-center justify-center">
            <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items-center container gap-4 p-4">
                {/* Landing Page */}
                <div className="py-10 px-8 w-full md:max-w-sm bg-white z-30 rounded-xl shadow-md">
                    <h2 className="text-gray-500 font-semibold text-xl mb-2">Landing Page</h2>
                    <div className="text-center py-2">
                        <h1 className="text-gray-700 text-4xl font-black">Rp 500.000,-</h1>
                        <p className="text-xs text-gray-400 mt-1">*Belum termasuk domain & hosting</p>
                    </div>
                    <div className="mt-4">
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✅ Desain responsif & modern</li>
                            <li>✅ Fokus promosi 1 produk / layanan</li>
                            <li>✅ Cocok untuk campaign, iklan, promo</li>
                            <li>✅ Estimasi selesai 2–3 hari</li>
                            <li>💡 Domain + Hosting bisa dibantu (opsional)</li>
                        </ul>
                    </div>
                    <button className="w-full mt-6 py-2 text-white font-semibold bg-gray-700 hover:bg-gray-800 transition">Buy Now</button>
                </div>

                {/* Company Profile */}
                <div className="py-10 px-8 w-full md:max-w-sm bg-purple-500 z-40 rounded-xl shadow-lg text-white">
                    <h2 className="font-semibold text-xl mb-2">Company Profile</h2>
                    <div className="text-center py-2">
                        <h1 className="text-4xl font-black">Rp 750.000,-</h1>
                        <p className="text-xs text-white text-opacity-80 mt-1">*Belum termasuk domain & hosting</p>
                    </div>
                    <div className="mt-4">
                        <ul className="text-sm text-white text-opacity-90 space-y-2">
                            <li>✅ Halaman: Tentang, Layanan, Galeri, Kontak</li>
                            <li>✅ Mobile-friendly</li>
                            <li>✅ Bisa custom sesuai bidang usaha</li>
                            <li>✅ Estimasi selesai 3–5 hari</li>
                            <li>💡 Rekomendasi hosting mulai Rp 300rb / tahun</li>
                        </ul>
                    </div>
                    <button className="w-full mt-6 py-2 font-semibold bg-purple-400 hover:bg-purple-800 transition">Buy Now</button>
                </div>

                {/* CMS Portal */}
                <div className="py-10 px-8 w-full md:max-w-sm bg-white z-30 rounded-xl shadow-md">
                    <h2 className="text-gray-500 font-semibold text-xl mb-2">CMS Portal Berita / Tiket</h2>
                    <div className="text-center py-2">
                        <h1 className="text-gray-700 text-4xl font-black">Rp 1.500.000,-</h1>
                        <p className="text-xs text-gray-400 mt-1">*Belum termasuk domain & server</p>
                    </div>
                    <div className="mt-4">
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li>✅ CMS custom (bukan WordPress)</li>
                            <li>✅ Posting berita, tiket, atau produk</li>
                            <li>✅ Admin panel untuk kelola konten</li>
                            <li>✅ Bisa multi user & role admin</li>
                            <li>💡 Server VPS mulai dari Rp 50rb / bulan</li>
                        </ul>
                    </div>
                    <button className="w-full mt-6 py-2 text-white font-semibold bg-gray-700 hover:bg-gray-800 transition">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export { RateCard };
