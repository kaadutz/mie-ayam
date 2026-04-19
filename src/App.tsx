// 1. Mendefinisikan tipe data agar TypeScript tidak protes
type Product = {
  id: number;
  name: string;
  harga: string;
  badge: string;
  desc: string;
  tebal: string;
  isi: string;
};

const NOMOR_WA = "6281234567890"; // Ganti dengan nomor WA kamu

function openWA(pesan: string) {
  window.open(
    `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}

// 2. Memasukkan data produk dengan tipe yang sudah didefinisikan
const products: Product[] = [
  { 
    id: 1, 
    name: "Mie Keriting Premium", 
    harga: "Rp 16.000", 
    badge: "Best Seller", 
    desc: "Tekstur kenyal klasik dengan keriting yang sempurna. Favorit pedagang mie ayam gerobakan.", 
    tebal: "1.5mm", 
    isi: "10-12 porsi" 
  },
  { 
    id: 2, 
    name: "Mie Lebar (Yamin)", 
    harga: "Rp 17.000", 
    badge: "Fresh", 
    desc: "Bentuk pipih lebar, cocok untuk menu Mie Yamin manis atau asin. Tekstur lebih halus dan licin.", 
    tebal: "3mm", 
    isi: "10-12 porsi" 
  },
  { 
    id: 3, 
    name: "Mie Karet Spesial", 
    harga: "Rp 18.000", 
    badge: "Unik", 
    desc: "Diameter tebal, tekstur padat, kenyal dan 'al dente'. Sangat cocok untuk mie ayam kampung.", 
    tebal: "2.5mm", 
    isi: "9-10 porsi" 
  }
];

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-artisan-krem text-artisan-slate font-sans selection:bg-artisan-green selection:text-white">
      
      {/* Efek Tekstur Kasat Mata */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-artisan-krem/90 backdrop-blur-md border-b border-artisan-brown/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-white/50 border border-artisan-green/20 rounded-xl flex items-center justify-center text-artisan-green shadow-sm group-hover:bg-artisan-green group-hover:text-white transition-all duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-artisan-brown group-hover:text-artisan-green transition-colors">
              MieRumah.
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 font-medium text-sm text-artisan-slate/70">
            <a href="#beranda" className="hover:text-artisan-green transition-colors">Beranda</a>
            <a href="#produk" className="hover:text-artisan-green transition-colors">Varian</a>
            <a href="#keunggulan" className="hover:text-artisan-green transition-colors">Keunggulan</a>
          </div>

          <button 
            onClick={() => openWA("Halo, saya mau pesan MieRumah!")}
            className="bg-artisan-brown text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4a332c] hover:shadow-lg hover:shadow-artisan-brown/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Pesan Sekarang
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        <div className="md:w-1/2 flex flex-col items-start animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/60 border border-artisan-green/30 px-4 py-2 rounded-full text-xs font-bold text-artisan-green tracking-widest uppercase mb-6 shadow-sm backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            Pilihan No. 1 Pedagang Mie
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-artisan-brown">
            Kelezatan Otentik <br />
            <span className="text-artisan-green">Mie Artisan</span> <br />
            di Dapurmu.
          </h1>
          
          <p className="text-lg text-artisan-slate/80 leading-relaxed mb-10 max-w-md">
            Mie ayam mentah premium tanpa pengawet. Dibuat dengan cinta dan resep rumahan untuk tekstur kenyal sempurna.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => openWA("Halo, saya mau order mie artisan!")}
              className="bg-artisan-brown text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-artisan-brown/20 hover:bg-[#4a332c] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              Order Sekarang
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button 
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent text-artisan-green border-2 border-artisan-green/50 px-8 py-4 rounded-xl font-medium hover:bg-artisan-green/10 transition-all duration-300"
            >
              Lihat Varian
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-artisan-green/10 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
          
          <div className="relative w-full aspect-[4/3] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white animate-float flex flex-col items-center justify-center text-artisan-slate/30">
             <svg className="w-16 h-16 mb-4 text-artisan-green/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
             <span className="font-medium text-sm tracking-widest uppercase">Foto Produk AI</span>
          </div>
          
          <div className="absolute -bottom-6 -left-8 bg-white p-4 shadow-xl rounded-2xl border border-gray-100 flex items-center gap-4 hover:scale-110 transition-transform duration-300 cursor-default">
             <div className="w-12 h-12 bg-artisan-krem rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-artisan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <div>
               <p className="text-artisan-green font-bold text-sm">100% Halal</p>
               <p className="text-xs text-artisan-slate/60 font-medium">Tanpa Pengawet</p>
             </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-6 opacity-60">
          <div className="h-px bg-artisan-brown/20 flex-1"></div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-artisan-brown/60">Varian Terbaik</span>
          <div className="h-px bg-artisan-brown/20 flex-1"></div>
        </div>
      </div>

      {/* SECTION PRODUK */}
      <section id="produk" className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-artisan-brown font-bold mb-4">Pilih Favorit Kamu</h2>
          <p className="text-artisan-slate/70 max-w-lg mx-auto">Dibuat segar setiap hari, siap dimasak dalam 2 menit. Kenyal, gurih, dan pastinya sehat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 3. Menambahkan tipe parameter secara eksplisit pada map */}
          {products.map((p: Product, index: number) => (
            <div key={p.id} className="group flex flex-col bg-white rounded-3xl border border-artisan-brown/10 p-4 shadow-sm hover:shadow-2xl hover:shadow-artisan-green/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-[4/3] rounded-2xl bg-artisan-krem flex items-center justify-center relative overflow-hidden text-artisan-green/40 mb-4">
                <svg className="w-20 h-20 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m14 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m14 0H4"></path></svg>
                {p.badge && (
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur border border-artisan-green/20 text-[10px] font-bold text-artisan-green px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-grow px-2">
                <h3 className="font-serif text-2xl font-bold text-artisan-brown mb-2 group-hover:text-artisan-green transition-colors">{p.name}</h3>
                <p className="text-artisan-green font-bold text-xl mb-3">{p.harga}<span className="text-sm font-normal text-artisan-slate/60">/kg</span></p>
                <p className="text-sm text-artisan-slate/70 line-clamp-2 mb-5 flex-grow">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-artisan-krem/50 border border-artisan-brown/10 text-xs text-artisan-brown rounded-lg font-semibold">Tebal: {p.tebal}</span>
                  <span className="px-3 py-1.5 bg-artisan-krem/50 border border-artisan-brown/10 text-xs text-artisan-brown rounded-lg font-semibold">Isi: {p.isi}</span>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); openWA(`Halo, saya mau order ${p.name}!`); }}
                  className="w-full h-12 rounded-xl border-2 border-artisan-brown text-artisan-brown font-bold group-hover:bg-artisan-brown group-hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  Pesan Sampel
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION KEUNGGULAN */}
      <section id="keunggulan" className="mt-24 bg-[#4a332c] text-white py-24 rounded-t-[3rem] relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-artisan-green font-bold tracking-widest uppercase text-sm mb-4 block">Kualitas Premium</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-artisan-krem">Dibuat Berbeda, Dirasakan Bedanya.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            {[
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
                title: "Bahan Alami", 
                desc: "Tepung terigu protein tinggi, telur segar, tanpa tambahan pewarna buatan." 
              },
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, 
                title: "Gilingan Sempurna", 
                desc: "Rasio adonan rahasia yang menghasilkan tekstur kenyal dan tidak mudah putus." 
              },
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
                title: "Fresh Made to Order", 
                desc: "Tidak ada stok gudang lama. Pesan hari ini, mie akan digiling hari ini juga." 
              }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                {f.icon}
                <h3 className="text-xl font-bold mb-4 text-artisan-krem">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
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
                  <p className="text-sm text-artisan-slate/60 mt-1">Pembelian > 50kg</p>
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
          
          <div 
            className="w-full lg:w-1/2 h-80 bg-artisan-krem rounded-3xl overflow-hidden relative border-4 border-white shadow-xl flex items-center justify-center group cursor-pointer bg-cover bg-center"
            style={{ backgroundImage: 'url("https://maps.app.goo.gl/yKs3gzkZURYrkea76")' }}
            onClick={() => window.open('https://maps.app.goo.gl/yKs3gzkZURYrkea76', '_blank')}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="w-10 h-10 bg-artisan-krem rounded-full flex items-center justify-center text-artisan-green">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <span className="font-bold text-artisan-brown block">Lokasi Pabrik Kami</span>
                  <span className="text-sm text-artisan-slate/60">Kota Sukabumi (Klik untuk Buka Map)</span>
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
                  <span className="leading-relaxed">Jl. Taman Bahagia, Benteng, Kec. Warudoyong, Kota Sukabumi, Jawa Barat 43132</span>
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
