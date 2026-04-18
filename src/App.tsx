import React from 'react';

function App() {
  const handleOrder = () => {
    const pesan = "Halo, saya tertarik untuk pesan Mie Ayam Mentah Artisan-nya!";
    const nomorWA = "6281234567890"; // Ganti dengan nomor WA kamu
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-artisan-krem font-sans text-artisan-slate overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Ikon mangkuk sederhana */}
          <svg className="w-8 h-8 text-artisan-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10" />
          </svg>
          <h1 className="text-3xl font-serif font-bold text-artisan-brown tracking-wide">
            MieRumah.
          </h1>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-artisan-slate">
          <a href="#beranda" className="hover:text-artisan-green transition">Beranda</a>
          <a href="#keunggulan" className="hover:text-artisan-green transition">Kualitas</a>
        </div>

        <button 
          onClick={handleOrder}
          className="bg-artisan-green hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-md"
        >
          Pesan via WA
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="beranda" className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-start">
          <div className="bg-white/60 px-4 py-1.5 rounded-full border border-artisan-brown/20 mb-6">
            <span className="text-artisan-green font-bold text-xs uppercase tracking-widest">
              🌾 Freshly Crafted Everyday
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-artisan-brown mb-6 leading-[1.1]">
            Kelezatan Otentik <br />
            <span className="text-artisan-green">Mie Artisan</span> di Dapurmu.
          </h2>
          
          <p className="text-lg text-artisan-slate/80 mb-8 max-w-md leading-relaxed">
            Mie ayam mentah premium tanpa bahan pengawet. Dibuat dengan resep rumahan untuk tekstur kenyal sempurna dan rasa yang tak terlupakan.
          </p>
          
          <button 
            onClick={handleOrder}
            className="bg-artisan-brown hover:bg-yellow-900 text-white px-8 py-3.5 rounded-lg shadow-lg transition font-medium text-lg"
          >
            Order Sekarang
          </button>
        </div>

        {/* --- AREA GAMBAR AI --- */}
        <div className="md:w-1/2 relative w-full">
          <div className="absolute inset-0 bg-artisan-green/10 rounded-3xl transform rotate-3 scale-105"></div>
          
          <div className="relative w-full aspect-[4/3] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
             {/* Nanti ganti link 'src' ini dengan URL gambar AI buatanmu */}
             <img 
               src="https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=1000&auto=format&fit=crop" 
               alt="Mie Ayam Mentah Artisan" 
               className="w-full h-full object-cover hover:scale-105 transition duration-700"
             />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white py-3 px-6 shadow-xl rounded-2xl border border-gray-100 flex items-center gap-3 animate-bounce">
             <span className="text-2xl">✨</span>
             <div>
               <p className="text-artisan-green font-bold text-sm">100% Halal</p>
               <p className="text-xs text-gray-500">Tanpa Pengawet</p>
             </div>
          </div>
        </div>
      </header>

      {/* --- KEUNGGULAN SECTION --- */}
      <section id="keunggulan" className="bg-white py-20 mt-12 border-t border-artisan-krem">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif text-artisan-brown">Mengapa Memilih Mie Kami?</h3>
            <p className="text-gray-500 mt-2">Dibuat dengan cinta dan bahan berkualitas tinggi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Fitur 1 */}
            <div className="p-6 rounded-2xl bg-artisan-krem/30 hover:bg-artisan-krem/60 transition">
              <div className="w-16 h-16 bg-artisan-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🌱</div>
              <h4 className="text-xl font-bold text-artisan-brown mb-2">Bahan Alami</h4>
              <p className="text-gray-600 text-sm">Hanya menggunakan tepung pilihan dan telur segar tanpa pewarna buatan.</p>
            </div>
            {/* Fitur 2 */}
            <div className="p-6 rounded-2xl bg-artisan-krem/30 hover:bg-artisan-krem/60 transition">
              <div className="w-16 h-16 bg-artisan-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🍜</div>
              <h4 className="text-xl font-bold text-artisan-brown mb-2">Tekstur Sempurna</h4>
              <p className="text-gray-600 text-sm">Proses penggilingan rahasia menghasilkan mie yang kenyal dan tidak mudah putus.</p>
            </div>
            {/* Fitur 3 */}
            <div className="p-6 rounded-2xl bg-artisan-krem/30 hover:bg-artisan-krem/60 transition">
              <div className="w-16 h-16 bg-artisan-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⏱️</div>
              <h4 className="text-xl font-bold text-artisan-brown mb-2">Fresh & Praktis</h4>
              <p className="text-gray-600 text-sm">Dibuat setiap hari sesuai pesanan. Sangat mudah direbus dalam 2 menit saja.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
