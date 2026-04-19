const NOMOR_WA = "6281234567890"; // Ganti dengan nomor WA kamu

function openWA(pesan: string) {
  window.open(
    `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-artisan-krem text-artisan-slate font-sans selection:bg-artisan-green selection:text-white">
      
      {/* --- TOP NAVIGATION --- */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-artisan-brown/10 bg-artisan-krem/90 backdrop-blur-md px-6 lg:px-10 py-4 shadow-sm">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 bg-white/50 border border-artisan-green/20 rounded-xl flex items-center justify-center text-artisan-green shadow-sm group-hover:bg-artisan-green group-hover:text-white transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          </div>
          <h2 className="font-serif text-artisan-brown text-2xl font-bold leading-tight tracking-wide group-hover:text-artisan-green transition-colors">
            MieRumah.
          </h2>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            <a className="text-artisan-slate font-medium hover:text-artisan-green transition-colors" href="#home">Beranda</a>
            <a className="text-artisan-slate font-medium hover:text-artisan-green transition-colors" href="#products">Produk</a>
            <a className="text-artisan-slate font-medium hover:text-artisan-green transition-colors" href="#features">Kualitas</a>
            <a className="text-artisan-slate font-medium hover:text-artisan-green transition-colors" href="#pricing">Grosir</a>
            <a className="text-artisan-slate font-medium hover:text-artisan-green transition-colors" href="#lokasi">Lokasi</a>
          </div>
          <button 
            onClick={() => openWA("Halo, saya mau pesan MieRumah!")}
            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-artisan-brown hover:bg-[#4a332c] hover:shadow-lg transition-all text-white text-sm font-bold tracking-wide transform hover:-translate-y-0.5"
          >
            Hubungi WhatsApp
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="px-4 py-8 md:px-10 lg:px-20 flex justify-center" id="home">
        <div className="w-full max-w-[1200px]">
          <div className="flex min-h-[560px] flex-col gap-6 bg-white rounded-3xl md:gap-8 items-center justify-center p-8 text-center shadow-2xl shadow-artisan-brown/5 relative overflow-hidden border border-white">
            
            {/* Latar Belakang Dekoratif (Ganti URL Gambar Nanti) */}
            <div className="absolute inset-0 bg-artisan-green/5 opacity-50"></div>
            
            <div className="flex flex-col gap-5 z-10 max-w-3xl items-center animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-artisan-krem border border-artisan-green/30 text-artisan-green text-xs font-bold uppercase tracking-wider shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                Pilihan No. 1 Pedagang Mie
              </span>
              
              <h1 className="font-serif text-artisan-brown text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mt-2">
                Mie Ayam Mentah Premium <br/>
                <span className="text-artisan-green italic font-normal">Kualitas Pabrik</span>
              </h1>
              
              <p className="text-artisan-slate/80 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-2">
                Solusi terbaik untuk usaha kuliner Anda. Tanpa pengawet, tekstur kenyal alami, diproduksi harian. Siap antar ke lokasi Anda.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 z-10 mt-4">
              <button 
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                className="flex cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-artisan-brown hover:bg-[#4a332c] hover:shadow-xl hover:shadow-artisan-brown/20 transition-all text-white text-base font-bold transform hover:-translate-y-1"
              >
                Lihat Katalog
              </button>
              <button 
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="flex cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-transparent hover:bg-artisan-krem border-2 border-artisan-green/50 text-artisan-green text-base font-bold transition-all"
              >
                Harga Grosir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST & SAFETY (KUALITAS) --- */}
      <section className="px-4 py-16 md:px-10 lg:px-20 flex justify-center" id="features">
        <div className="w-full max-w-[1200px] flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="font-serif text-artisan-brown text-4xl font-bold leading-tight">
              Jaminan Kualitas & Keamanan
            </h2>
            <p className="text-artisan-slate/80 text-lg max-w-[720px]">
              Kami mengutamakan kesehatan konsumen Anda dengan standar produksi yang ketat dan transparan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Sertifikasi Halal", desc: "Bahan baku 100% halal, amanah untuk ketenangan usaha Anda.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
              { title: "Izin Resmi P-IRT", desc: "Terdaftar di Dinas Kesehatan, sangat aman dikonsumsi.", icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
              { title: "Tanpa Pengawet", desc: "Bebas Formalin & Boraks. Menggunakan tepung protein tinggi.", icon: <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /> },
              { title: "Fresh Made Daily", desc: "Produksi subuh, kirim pagi. Dijamin fresh sampai di tempat.", icon: <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 rounded-2xl border border-artisan-brown/10 bg-white p-8 hover:shadow-xl hover:-translate-y-1 hover:border-artisan-green/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-artisan-krem flex items-center justify-center text-artisan-green">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <h3 className="font-serif text-artisan-brown text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-artisan-slate/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCT CATALOG --- */}
      <section className="px-4 py-16 md:px-10 lg:px-20 flex justify-center bg-white border-y border-artisan-brown/10" id="products">
        <div className="w-full max-w-[1200px] flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-artisan-green font-bold uppercase tracking-wider text-sm">Katalog Produk</span>
              <h2 className="font-serif text-artisan-brown text-4xl font-bold leading-tight">Varian Mie Unggulan</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Mie Keriting Premium", price: "Rp 16.000", badge: "Best Seller", desc: "Tekstur kenyal klasik dengan keriting yang sempurna. Favorit pedagang mie ayam gerobakan.", tebal: "1.5mm", isi: "10-12 porsi", emoji: "🍜" },
              { name: "Mie Lebar (Yamin)", price: "Rp 17.000", badge: "", desc: "Bentuk pipih lebar, cocok untuk menu Mie Yamin manis atau asin. Tekstur lebih halus.", tebal: "3mm", isi: "10-12 porsi", emoji: "🍲" },
              { name: "Mie Karet Spesial", price: "Rp 18.000", badge: "Unik", desc: "Diameter tebal, tekstur padat, kenyal dan 'al dente'. Sangat cocok untuk mie ayam kampung.", tebal: "2.5mm", isi: "9-10 porsi", emoji: "🥢" }
            ].map((p, i) => (
              <div key={i} className="group flex flex-col bg-artisan-krem/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-artisan-brown/10 duration-500">
                <div className="w-full aspect-[4/3] bg-artisan-krem relative flex items-center justify-center overflow-hidden">
                   <span className="text-7xl group-hover:scale-125 transition-transform duration-700 opacity-80">{p.emoji}</span>
                   {p.badge && (
                     <div className="absolute top-4 right-4 bg-artisan-brown text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                       {p.badge}
                     </div>
                   )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-artisan-brown text-2xl font-bold leading-tight">{p.name}</h3>
                  </div>
                  <p className="text-artisan-green font-bold text-xl mb-4">{p.price}<span className="text-sm font-normal text-artisan-slate/60">/kg</span></p>
                  <p className="text-artisan-slate/70 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1.5 bg-white border border-artisan-brown/10 text-xs text-artisan-brown rounded-lg font-semibold shadow-sm">Tebal: {p.tebal}</span>
                    <span className="px-3 py-1.5 bg-white border border-artisan-brown/10 text-xs text-artisan-brown rounded-lg font-semibold shadow-sm">Isi: {p.isi}</span>
                  </div>
                  <button 
                    onClick={() => openWA(`Halo, saya mau pesan sampel ${p.name}`)}
                    className="w-full h-12 rounded-xl border-2 border-artisan-brown text-artisan-brown font-bold hover:bg-artisan-brown hover:text-white transition-all"
                  >
                    Pesan Sampel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHOLESALE PRICING (GROSIR) --- */}
      <section className="px-4 py-20 md:px-10 lg:px-20 flex justify-center bg-artisan-brown text-white relative overflow-hidden" id="pricing">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-16 items-center relative z-10">
          
          <div className="flex flex-col gap-6 flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-artisan-krem w-fit text-xs font-bold uppercase tracking-widest border border-white/20">Mitra Usaha</span>
            <h2 className="font-serif text-5xl font-bold leading-tight">
              Makin Banyak,<br/>Makin Untung!
            </h2>
            <p className="text-artisan-krem/80 text-lg leading-relaxed">
              Bergabunglah dengan ratusan mitra kami. Dapatkan harga khusus grosir untuk meningkatkan margin keuntungan usaha mie ayam Anda.
            </p>
            <ul className="flex flex-col gap-4 mt-4">
              {[
                "Prioritas produksi setiap hari",
                "Konsistensi rasa dan tekstur terjamin",
                "Bisa request ukuran/ketebalan khusus (Min. 20kg)"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4">
                  <svg className="w-6 h-6 text-artisan-green bg-white rounded-full p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-artisan-krem font-medium">{text}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => openWA("Halo, saya ingin daftar menjadi Mitra Grosir!")}
              className="mt-6 flex w-fit cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-artisan-green hover:bg-[#3d630c] transition-colors text-white text-base font-bold shadow-lg"
            >
              Daftar Mitra via WhatsApp
            </button>
          </div>

          <div className="flex-1 w-full bg-white text-artisan-slate rounded-3xl shadow-2xl p-8 lg:p-10">
            <h3 className="font-serif text-3xl font-bold mb-8 text-center text-artisan-brown">Skema Harga Grosir</h3>
            <div className="flex flex-col divide-y divide-artisan-brown/10">
              
              <div className="flex justify-between items-center py-5">
                <div>
                  <p className="font-bold text-artisan-brown text-lg">Eceran / Trial</p>
                  <p className="text-sm text-artisan-slate/60 mt-1">Min. Pembelian 1kg</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-artisan-brown">Rp 18.000<span className="text-sm font-normal text-artisan-slate/50">/kg</span></p>
                </div>
              </div>
              
              <div className="flex justify-between items-center py-6 bg-artisan-krem/50 -mx-10 px-10 border-l-4 border-artisan-green shadow-inner">
                <div>
                  <p className="font-bold text-artisan-brown text-lg">Paket Usaha Kecil</p>
                  <p className="text-sm text-artisan-slate/60 mt-1">Pembelian 5 - 10kg</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <p className="font-bold text-2xl text-artisan-green">Rp 16.000<span className="text-sm font-normal text-artisan-slate/50">/kg</span></p>
                  <span className="text-[10px] font-bold text-white bg-artisan-green px-3 py-1 rounded-full shadow-sm">HEMAT</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-5">
                <div>
                  <p className="font-bold text-artisan-brown text-lg">Paket Usaha Menengah</p>
                  <p className="text-sm text-artisan-slate/60 mt-1">Pembelian 11 - 30kg</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-artisan-brown">Rp 14.500<span className="text-sm font-normal text-artisan-slate/50">/kg</span></p>
                </div>
              </div>

              <div className="flex justify-between items-center py-5">
                <div>
                  <p className="font-bold text-artisan-brown text-lg">Paket Partai Besar</p>
                  <p className="text-sm text-artisan-slate/60 mt-1">Pembelian &gt; 50kg</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-artisan-brown">Rp 13.000<span className="text-sm font-normal text-artisan-slate/50">/kg</span></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- DELIVERY MAP & INFO (LOKASI PABRIK) --- */}
      <section className="px-4 py-16 md:px-10 lg:px-20 flex justify-center bg-white border-b border-artisan-brown/10" id="lokasi">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Kotak Peta Lokasi */}
          <div className="w-full lg:w-1/2 h-80 bg-artisan-krem rounded-3xl overflow-hidden relative border-4 border-white shadow-xl flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-artisan-green/10 group-hover:bg-artisan-green/5 transition-colors duration-500"></div>
            {/* Ikon Peta Estetik */}
            <svg className="w-32 h-32 text-artisan-brown/20 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-artisan-krem rounded-full flex items-center justify-center text-artisan-green">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span className="font-bold text-artisan-brown block">Lokasi Pabrik Kami</span>
                  <span className="text-sm text-artisan-slate/60">Jakarta & Sekitarnya</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-artisan-brown text-4xl font-bold mb-4">Jangkauan Pengiriman</h2>
              <p className="text-artisan-slate/80">Kami memastikan mie sampai ke tangan Anda dalam kondisi paling segar setiap paginya.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-white p-3 rounded-xl border border-artisan-brown/10 shadow-sm text-artisan-green"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg></div>
                <div>
                  <h3 className="font-bold text-artisan-brown text-lg">Gratis Ongkir (Area Terdekat)</h3>
                  <p className="text-sm text-artisan-slate/70 mt-1">Khusus pembelian minimal 10kg untuk area dalam kota yang terjangkau kurir internal kami.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-white p-3 rounded-xl border border-artisan-brown/10 shadow-sm text-artisan-green"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <div>
                  <h3 className="font-bold text-artisan-brown text-lg">Jadwal Pengiriman</h3>
                  <p className="text-sm text-artisan-slate/70 mt-1">Pengiriman dilakukan setiap hari mulai pukul 05.00 - 09.00 pagi agar mie bisa langsung diolah.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="mt-1 bg-white p-3 rounded-xl border border-artisan-brown/10 shadow-sm text-artisan-green"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div>
                <div>
                  <h3 className="font-bold text-artisan-brown text-lg">Luar Kota</h3>
                  <p className="text-sm text-artisan-slate/70 mt-1">Melayani pengiriman via Paxel (Sameday Delivery) dengan *packaging* khusus agar tetap aman.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="px-4 py-20 md:px-10 lg:px-20 flex justify-center bg-artisan-krem">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          <h2 className="font-serif text-artisan-brown text-4xl font-bold mb-12 text-center">Kata Mitra Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { text: "Semenjak ganti pake mie dari sini, pelanggan pada muji mienya lebih kenyal dan gak gampang lembek. Omzet naik alhamdulillah.", name: "Mas Budi", toko: "Mie Ayam Baros" },
              { text: "Pengiriman selalu tepat waktu tiap subuh. Kualitas stabil banget, gak pernah ngecewain selama 2 tahun langganan.", name: "Pak Asep", toko: "Mie Yamin Sentral" },
              { text: "Seneng banget nemu pabrik yang bisa request ukuran mie lebar. Pas banget buat menu andalan resto kami.", name: "Ibu Yani", toko: "Resto Chinese Food" }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-artisan-brown/10 shadow-lg shadow-artisan-brown/5 relative">
                <div className="flex gap-1 text-artisan-green mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-base text-artisan-slate/80 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-artisan-krem flex items-center justify-center text-artisan-brown font-bold text-xl">{t.name[0]}</div>
                  <div>
                    <p className="text-base font-bold text-artisan-brown">{t.name}</p>
                    <p className="text-sm text-artisan-green font-medium">{t.toko}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-artisan-brown text-white pt-20 pb-10 px-4 md:px-10 lg:px-20 flex justify-center rounded-t-[3rem]">
        <div className="w-full max-w-[1200px] flex flex-col">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            
            <div className="flex flex-col gap-6 max-w-sm">
              <div className="flex items-center gap-3 text-artisan-green">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M8 12h8M12 8v8"/></svg>
                </div>
                <span className="font-serif text-white text-3xl font-bold">MieRumah.</span>
              </div>
              <p className="text-white/70 text-base leading-relaxed">
                Mitra terpercaya pedagang mie ayam. Menyediakan mie mentah berkualitas, halal, higienis, dan tanpa pengawet.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-artisan-green text-lg">Navigasi</h4>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#home">Beranda</a>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#products">Katalog Produk</a>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#pricing">Daftar Harga Grosir</a>
              </div>
              <div className="flex flex-col gap-5">
                <h4 className="font-bold text-artisan-green text-lg">Produk</h4>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#products">Mie Keriting</a>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#products">Mie Lebar (Yamin)</a>
                <a className="text-sm text-white/70 hover:text-white transition-colors" href="#products">Mie Karet</a>
              </div>
              <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                <h4 className="font-bold text-artisan-green text-lg">Hubungi Kami</h4>
                <div className="flex gap-3 text-sm text-white/70 items-center">
                  <svg className="w-5 h-5 text-artisan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex gap-3 text-sm text-white/70 items-start">
                  <svg className="w-5 h-5 text-artisan-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="leading-relaxed">DKI Jakarta & Sekitarnya</span>
                </div>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>© 2026 MieRumah. All rights reserved.</p>
            <p>Dibuat untuk kelancaran usaha kulinermu.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
