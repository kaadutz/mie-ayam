const NOMOR_WA = "6281234567890"; // Ganti nomor WA di sini

function openWA(pesan: string) {
  window.open(
    `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}

const products = [
  { id: 1, name: "Mie Lebar", desc: "Tekstur lembut & kenyal sempurna.", harga: "Rp 15.000" },
  { id: 2, name: "Mie Keriting", desc: "Keriting alami yang menyerap saus lebih baik.", harga: "Rp 15.000" },
  { id: 3, name: "Mie Karet", desc: "Kenyal ekstrem dengan gigitan yang memuaskan.", harga: "Rp 15.000" },
  { id: 4, name: "Pangsit Ayam", desc: "Kulit tipis isi daging ayam pilihan.", harga: "Rp 12.000" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-artisan-bg text-artisan-text font-sans overflow-x-hidden selection:bg-artisan-primary selection:text-white">
      
      {/* NAVBAR (Sticky & Glassmorphism) */}
      <nav className="sticky top-0 z-50 bg-artisan-bg/80 backdrop-blur-md border-b border-artisan-surface/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-artisan-primary to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                <path d="M8 12h8M12 8v8"/>
              </svg>
            </div>
            <span className="font-serif text-2xl font-bold tracking-wide text-artisan-text group-hover:text-artisan-primary transition-colors">
              MieRumah.
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 font-medium text-sm text-gray-500">
            <a href="#beranda" className="hover:text-artisan-primary transition-colors">Beranda</a>
            <a href="#produk" className="hover:text-artisan-primary transition-colors">Varian</a>
            <a href="#keunggulan" className="hover:text-artisan-primary transition-colors">Keunggulan</a>
          </div>

          <button 
            onClick={() => openWA("Halo, saya mau pesan MieRumah!")}
            className="bg-artisan-text text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-artisan-primary hover:shadow-lg hover:shadow-artisan-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Pesan via WA
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-16">
        
        {/* Teks Kiri */}
        <div className="md:w-1/2 flex flex-col items-start animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-artisan-surface border border-orange-200/50 px-4 py-2 rounded-full text-xs font-bold text-artisan-primary tracking-widest uppercase mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            Freshly Crafted Everyday
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-artisan-text">
            Mie Artisan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-artisan-primary to-orange-400">
              Premium
            </span> <br />
            Langsung ke Dapur.
          </h1>
          
          <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-md">
            Mie ayam mentah premium tanpa pengawet. Dibuat setiap hari dari tepung terbaik dan telur segar dengan resep turun-temurun.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => openWA("Halo, saya mau order mie artisan!")}
              className="bg-artisan-primary text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-artisan-primary/20 hover:bg-orange-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              Order Sekarang
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button 
              onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-artisan-text border-2 border-artisan-surface px-8 py-4 rounded-xl font-medium hover:border-artisan-primary/30 hover:bg-artisan-surface/50 transition-all duration-300"
            >
              Lihat Varian
            </button>
          </div>
        </div>

        {/* Gambar Kanan (Animasi Float) */}
        <div className="md:w-1/2 relative w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-artisan-primary/10 to-artisan-green/10 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
          
          <div className="relative w-full aspect-[4/3] bg-artisan-surface rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white animate-float">
             <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center gap-4 text-orange-800/40">
                <svg className="w-16 h-16 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span className="font-medium text-sm tracking-wide">Area Foto Produk</span>
             </div>
          </div>
          
          {/* Badge Melayang */}
          <div className="absolute -bottom-6 -left-8 bg-white p-4 shadow-xl rounded-2xl border border-gray-100 flex items-center gap-4 hover:scale-110 transition-transform duration-300 cursor-default">
             <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-artisan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <div>
               <p className="text-artisan-green font-bold text-sm">100% Halal</p>
               <p className="text-xs text-gray-400 font-medium">Tanpa Pengawet</p>
             </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-6 opacity-60">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">4 Varian Terbaik</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>
      </div>

      {/* SECTION PRODUK */}
      <section id="produk" className="container mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif text-artisan-text font-bold mb-4">Pilih Favorit Kamu</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Dibuat segar setiap hari, siap dimasak dalam 2 menit. Kenyal, gurih, dan pastinya sehat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, index) => (
            <div key={p.id} className="group bg-white rounded-3xl border border-gray-100 p-3 shadow-sm hover:shadow-2xl hover:shadow-artisan-primary/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-square rounded-2xl bg-artisan-surface flex items-center justify-center relative overflow-hidden text-artisan-primary/40">
                <svg className="w-16 h-16 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur text-[10px] font-bold text-artisan-primary px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Fresh
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-2xl font-bold text-artisan-text mb-2 group-hover:text-artisan-primary transition-colors">{p.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-6">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg text-artisan-primary">{p.harga}</div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); openWA(`Halo, saya mau order ${p.name}!`); }}
                    className="w-10 h-10 rounded-full bg-artisan-surface flex items-center justify-center text-artisan-text group-hover:bg-artisan-primary group-hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION KEUNGGULAN (Dark Mode Vibe) */}
      <section id="keunggulan" className="mt-24 bg-artisan-text text-white py-24 rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-artisan-primary font-bold tracking-widest uppercase text-sm mb-4 block">Kualitas Premium</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">Dibuat Berbeda, Dirasakan Bedanya.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
            {[
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
                title: "Bahan Alami", 
                desc: "Tepung terigu protein tinggi, telur segar, tanpa tambahan bahan kimia." 
              },
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>, 
                title: "Gilingan Sempurna", 
                desc: "Teknik rahasia menghasilkan rasio kenyal yang pas, tidak gampang putus." 
              },
              { 
                icon: <svg className="w-10 h-10 mb-6 text-artisan-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>, 
                title: "Fresh Made to Order", 
                desc: "Tidak ada stok gudang. Pesan hari ini, digiling hari ini juga." 
              }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300">
                {f.icon}
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-8 text-center text-sm border-t border-white/10">
        <p>© 2026 MieRumah. Dibuat dengan penuh dedikasi dan tepung berkualitas.</p>
      </footer>
    </div>
  );
}
