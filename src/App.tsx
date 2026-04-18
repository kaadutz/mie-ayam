import React from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

  .mr-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .mr-root {
    font-family: 'DM Sans', sans-serif;
    background: #FAFAF7;
    color: #2C2A1E;
    overflow-x: hidden;
  }
  .mr-serif { font-family: 'Playfair Display', serif; }

  .mr-nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 20px 40px;
    border-bottom: 0.5px solid rgba(0,0,0,0.08);
    background: rgba(250,250,247,0.95);
    position: sticky; top: 0; z-index: 100;
  }
  .mr-logo { display: flex; align-items: center; gap: 10px; }
  .mr-logo-icon {
    width: 38px; height: 38px; background: #3B6D11; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
  }
  .mr-logo-text { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: #3B6D11; }
  .mr-nav-links { display: flex; gap: 32px; }
  .mr-nav-link { font-size: 14px; font-weight: 400; color: #888780; text-decoration: none; cursor: pointer; transition: color 0.2s; }
  .mr-nav-link:hover { color: #3B6D11; }
  .mr-btn-wa {
    background: #3B6D11; color: white; border: none;
    padding: 10px 22px; border-radius: 100px; font-size: 14px; font-weight: 500;
    cursor: pointer; transition: background 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .mr-btn-wa:hover { background: #27500A; }

  .mr-hero {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0;
    min-height: 540px; align-items: center;
    padding: 60px 40px 40px;
    background: linear-gradient(135deg, #FAFAF7 60%, #EAF3DE 100%);
  }
  .mr-hero-left { padding-right: 40px; }
  .mr-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: #EAF3DE; border: 0.5px solid #C0DD97;
    padding: 6px 14px; border-radius: 100px;
    font-size: 11px; font-weight: 500; color: #3B6D11;
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 20px;
  }
  .mr-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 52px; line-height: 1.1; font-weight: 900;
    color: #2C2A1E; margin-bottom: 18px;
  }
  .mr-hero-title span { color: #3B6D11; }
  .mr-hero-sub {
    font-size: 16px; line-height: 1.7; color: #5F5E5A;
    max-width: 400px; margin-bottom: 32px;
  }
  .mr-hero-cta { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
  .mr-btn-primary {
    background: #2C2A1E; color: white; border: none;
    padding: 14px 28px; border-radius: 12px; font-size: 15px; font-weight: 500;
    cursor: pointer; transition: background 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .mr-btn-primary:hover { background: #3B6D11; }
  .mr-btn-secondary {
    background: transparent; color: #3B6D11; border: 1.5px solid #C0DD97;
    padding: 13px 24px; border-radius: 12px; font-size: 15px; font-weight: 500;
    cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .mr-btn-secondary:hover { background: #EAF3DE; }

  .mr-hero-right { position: relative; }
  .mr-hero-img-wrap {
    background: #C0DD97; border-radius: 24px; overflow: hidden;
    aspect-ratio: 4/3; position: relative;
  }
  .mr-hero-img-placeholder {
    width: 100%; height: 100%;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: linear-gradient(145deg, #C0DD97, #97C459);
    gap: 10px;
  }
  .mr-placeholder-icon { font-size: 48px; }
  .mr-placeholder-text { font-size: 13px; color: #27500A; font-weight: 500; text-align: center; line-height: 1.5; }
  .mr-float-badge {
    position: absolute; bottom: -12px; left: 20px;
    background: white; border: 0.5px solid rgba(0,0,0,0.1);
    border-radius: 16px; padding: 12px 18px;
    display: flex; align-items: center; gap: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  .mr-float-icon { font-size: 22px; }
  .mr-float-label { font-size: 12px; font-weight: 500; color: #3B6D11; }
  .mr-float-sub { font-size: 11px; color: #888780; margin-top: 1px; }

  .mr-stats {
    display: flex; gap: 32px; margin-top: 36px; padding-top: 28px;
    border-top: 0.5px solid rgba(0,0,0,0.08);
  }
  .mr-stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #2C2A1E; }
  .mr-stat-label { font-size: 12px; color: #888780; margin-top: 2px; }

  .mr-divider {
    padding: 32px 40px;
    display: flex; align-items: center; gap: 12px;
    border-top: 0.5px solid rgba(0,0,0,0.06);
  }
  .mr-divider-line { flex: 1; height: 0.5px; background: rgba(0,0,0,0.08); }
  .mr-divider-text { font-size: 11px; color: #B4B2A9; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; }

  .mr-section { padding: 48px 40px; }
  .mr-section-header { margin-bottom: 36px; }
  .mr-section-eyebrow { font-size: 11px; font-weight: 500; color: #3B6D11; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }
  .mr-section-title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: #2C2A1E; }
  .mr-section-sub { font-size: 15px; color: #5F5E5A; margin-top: 8px; }

  .mr-products { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .mr-product-card {
    background: white; border-radius: 20px;
    border: 0.5px solid rgba(0,0,0,0.07);
    overflow: hidden; cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .mr-product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.10); }
  .mr-product-img {
    background: #EAF3DE; aspect-ratio: 1/1;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 6px; position: relative;
  }
  .mr-product-img.amber-bg { background: #FAEEDA; }
  .mr-product-img.coral-bg { background: #FAECE7; }
  .mr-product-img.pink-bg { background: #FBEAF0; }
  .mr-product-emoji { font-size: 40px; }
  .mr-upload-hint { font-size: 11px; color: #B4B2A9; text-align: center; line-height: 1.5; padding: 0 12px; }
  .mr-product-tag {
    position: absolute; top: 12px; right: 12px;
    background: white; border-radius: 100px; padding: 4px 10px;
    font-size: 10px; font-weight: 500; color: #3B6D11;
    border: 0.5px solid #C0DD97;
  }
  .mr-product-body { padding: 16px 18px 18px; }
  .mr-product-name { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: #2C2A1E; }
  .mr-product-desc { font-size: 12px; color: #888780; line-height: 1.6; margin: 6px 0 14px; }
  .mr-product-footer { display: flex; align-items: center; justify-content: space-between; }
  .mr-product-price { font-size: 17px; font-weight: 500; color: #3B6D11; }
  .mr-product-price span { font-size: 11px; color: #B4B2A9; font-weight: 400; }
  .mr-product-order {
    background: #3B6D11; color: white; border: none;
    padding: 8px 16px; border-radius: 100px; font-size: 12px; font-weight: 500;
    cursor: pointer; transition: background 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .mr-product-order:hover { background: #27500A; }

  .mr-features { background: #2C2A1E; padding: 56px 40px; }
  .mr-features .mr-section-eyebrow { color: #97C459; }
  .mr-features .mr-section-title { color: #FAFAF7; }
  .mr-features .mr-section-sub { color: #B4B2A9; }
  .mr-feature-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 36px; }
  .mr-feature-card {
    background: rgba(255,255,255,0.04); border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 18px; padding: 28px 24px; transition: background 0.2s;
  }
  .mr-feature-card:hover { background: rgba(255,255,255,0.07); }
  .mr-feature-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; color: #97C459; margin-bottom: 12px; }
  .mr-feature-title { font-size: 16px; font-weight: 500; color: #FAFAF7; margin-bottom: 8px; }
  .mr-feature-desc { font-size: 13px; color: #888780; line-height: 1.7; }

  .mr-cta-section {
    background: #3B6D11; padding: 56px 40px;
    display: flex; justify-content: space-between; align-items: center; gap: 32px;
  }
  .mr-cta-title { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700; color: white; margin-bottom: 10px; }
  .mr-cta-sub { font-size: 15px; color: rgba(255,255,255,0.7); max-width: 440px; line-height: 1.7; }
  .mr-btn-white {
    background: white; color: #3B6D11; border: none;
    padding: 16px 32px; border-radius: 14px; font-size: 15px; font-weight: 500;
    cursor: pointer; white-space: nowrap; transition: opacity 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .mr-btn-white:hover { opacity: 0.9; }

  .mr-footer {
    background: #1C1A10; padding: 28px 40px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .mr-footer-logo { font-family: 'Playfair Display', serif; font-size: 20px; color: #EAF3DE; font-weight: 700; }
  .mr-footer-copy { font-size: 12px; color: #5F5E5A; }
`;

// ✏️ Ganti nomor WA kamu di sini
const NOMOR_WA = "6281234567890";

function openWA(pesan) {
  window.open(
    `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}

const products = [
  {
    id: 1,
    name: "Mie Lebar",
    desc: "Tekstur lembut & kenyal sempurna. Cocok untuk mie ayam kuah dengan bumbu kaya rasa.",
    tag: "Best Seller",
    emoji: "🍜",
    bgClass: "",
    harga: "Rp 15rb",
    // ✏️ Ganti src dengan URL foto aslimu
    foto: null,
  },
  {
    id: 2,
    name: "Mie Keriting",
    desc: "Keriting alami yang menyerap saus lebih baik. Sajian mie ayam kering yang juara.",
    tag: "Favorit",
    emoji: "🌀",
    bgClass: "amber-bg",
    harga: "Rp 15rb",
    foto: null,
  },
  {
    id: 3,
    name: "Mie Karet",
    desc: "Kenyal ekstrem dengan gigitan yang memuaskan. Sensasi mie yang beda dari biasanya.",
    tag: "Unik",
    emoji: "🎯",
    bgClass: "coral-bg",
    harga: "Rp 15rb",
    foto: null,
  },
  {
    id: 4,
    name: "Pangsit",
    desc: "Kulit tipis isi daging ayam pilihan. Sempurna sebagai pelengkap mie ayam favoritmu.",
    tag: "Pelengkap",
    emoji: "🥟",
    bgClass: "pink-bg",
    harga: "Rp 12rb",
    foto: null,
  },
];

export default function App() {
  return (
    <div className="mr-root">
      <style>{styles}</style>

      {/* NAV */}
      <nav className="mr-nav">
        <div className="mr-logo">
          <div className="mr-logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
              <path d="M8 12h8M12 8v8"/>
            </svg>
          </div>
          <span className="mr-logo-text">MieRumah.</span>
        </div>
        <div className="mr-nav-links">
          <a className="mr-nav-link" href="#beranda">Beranda</a>
          <a className="mr-nav-link" href="#produk">Produk</a>
          <a className="mr-nav-link" href="#keunggulan">Kualitas</a>
        </div>
        <button className="mr-btn-wa" onClick={() => openWA("Halo, saya tertarik dengan produk MieRumah!")}>
          Pesan via WA
        </button>
      </nav>

      {/* HERO */}
      <section className="mr-hero" id="beranda">
        <div className="mr-hero-left">
          <div className="mr-badge">🌾 Freshly Crafted Everyday</div>
          <h1 className="mr-hero-title mr-serif">
            Mie Artisan <br />
            <span>Premium</span><br />
            Langsung ke Dapur
          </h1>
          <p className="mr-hero-sub">
            Mie ayam mentah premium tanpa pengawet. Dibuat setiap hari dari bahan pilihan — tepung terbaik, telur segar, resep turun-temurun.
          </p>
          <div className="mr-hero-cta">
            <button className="mr-btn-primary" onClick={() => openWA("Halo, saya mau order mie artisan!")}>
              Order Sekarang
            </button>
            <button className="mr-btn-secondary" onClick={() => document.getElementById("produk").scrollIntoView({ behavior: "smooth" })}>
              Lihat Produk
            </button>
          </div>
          <div className="mr-stats">
            <div>
              <div className="mr-stat-num">4</div>
              <div className="mr-stat-label">Varian produk</div>
            </div>
            <div>
              <div className="mr-stat-num">0%</div>
              <div className="mr-stat-label">Pengawet buatan</div>
            </div>
            <div>
              <div className="mr-stat-num">2'</div>
              <div className="mr-stat-label">Waktu memasak</div>
            </div>
          </div>
        </div>
        <div className="mr-hero-right">
          <div className="mr-hero-img-wrap">
            {/* ✏️ Ganti dengan <img src="URL_FOTO" ... /> setelah foto tersedia */}
            <div className="mr-hero-img-placeholder">
              <div className="mr-placeholder-icon">🍜</div>
              <div className="mr-placeholder-text">Upload foto produk utama<br />di sini nanti</div>
            </div>
          </div>
          <div className="mr-float-badge">
            <div className="mr-float-icon">✅</div>
            <div>
              <div className="mr-float-label">100% Halal</div>
              <div className="mr-float-sub">Tanpa Pengawet</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mr-divider">
        <div className="mr-divider-line"></div>
        <div className="mr-divider-text">4 produk pilihan kami</div>
        <div className="mr-divider-line"></div>
      </div>

      {/* PRODUK */}
      <section className="mr-section" id="produk">
        <div className="mr-section-header">
          <div className="mr-section-eyebrow">Varian Produk</div>
          <div className="mr-section-title mr-serif">Pilih Favorit Kamu</div>
          <div className="mr-section-sub">Semua varian dibuat segar setiap hari, siap dimasak dalam 2 menit.</div>
        </div>
        <div className="mr-products">
          {products.map((p) => (
            <div className="mr-product-card" key={p.id}>
              <div className={`mr-product-img ${p.bgClass}`}>
                <div className="mr-product-tag">{p.tag}</div>
                {p.foto ? (
                  <img src={p.foto} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <>
                    <div className="mr-product-emoji">{p.emoji}</div>
                    <div className="mr-upload-hint">Upload foto<br />{p.name.toLowerCase()}</div>
                  </>
                )}
              </div>
              <div className="mr-product-body">
                <div className="mr-product-name mr-serif">{p.name}</div>
                <div className="mr-product-desc">{p.desc}</div>
                <div className="mr-product-footer">
                  <div className="mr-product-price">{p.harga} <span>/ porsi</span></div>
                  <button className="mr-product-order" onClick={() => openWA(`Halo, saya mau order ${p.name}!`)}>
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="mr-features" id="keunggulan">
        <div className="mr-section-header">
          <div className="mr-section-eyebrow">Keunggulan Kami</div>
          <div className="mr-section-title mr-serif">Dibuat Berbeda,<br />Dirasakan Bedanya.</div>
          <div className="mr-section-sub">Bukan sekadar mie — ini pengalaman masak yang autentik.</div>
        </div>
        <div className="mr-feature-grid">
          {[
            { num: "01", title: "Bahan Alami Pilihan", desc: "Tepung terigu premium, telur kampung segar, tanpa pewarna atau pengawet buatan apapun." },
            { num: "02", title: "Proses Giling Rahasia", desc: "Rasio adonan dan teknik penggilingan yang sudah teruji menghasilkan tekstur yang konsisten sempurna." },
            { num: "03", title: "Fresh Setiap Hari", desc: "Dibuat sesuai pesanan, dikirim di hari yang sama. Tidak ada stok lama di gudang." },
          ].map((f) => (
            <div className="mr-feature-card" key={f.num}>
              <div className="mr-feature-num">{f.num}</div>
              <div className="mr-feature-title">{f.title}</div>
              <div className="mr-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mr-cta-section">
        <div>
          <div className="mr-cta-title mr-serif">Siap Masak Mie Terbaik?</div>
          <div className="mr-cta-sub">Chat kami sekarang via WhatsApp. Respon cepat, pengiriman bisa diatur sesuai kebutuhanmu.</div>
        </div>
        <button className="mr-btn-white" onClick={() => openWA("Halo MieRumah! Saya ingin pesan mie artisan.")}>
          Chat via WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer className="mr-footer">
        <div className="mr-footer-logo">MieRumah.</div>
        <div className="mr-footer-copy">© 2025 MieRumah · Semua hak dilindungi</div>
      </footer>
    </div>
  );
}
