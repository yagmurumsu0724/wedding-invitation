import React from 'react';

export default function LocationCard() {
  const ohekaCastleImg = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80";

  return (
    <section className="invitation-section location-section">
      <div className="location-img-wrapper">
        <img 
          src={ohekaCastleImg} 
          alt="Oheka Castle" 
          className="location-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80";
          }}
        />
      </div>

      <h2 className="script-title">Mekan</h2>
      <h3 className="serif-title">OHEKA CASTLE'DA KONAKLAMA</h3>
      
      <div className="gold-divider"></div>

      <ul className="bullet-list">
        <li>42 misafire kadar tarihi Fransız şatosu ihtişamında konaklama</li>
        <li>Antika mobilyalar ve bahçe manzaralı şık, lüks süitler</li>
        <li>Açık büfe kahvaltı, kapalı havuz ve Fransız bahçelerine erişim dahil</li>
        <li>Sınırlı kontenjan — Yerinizi ayırtmak için erken LCV yapınız</li>
      </ul>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <span className="rate-badge">✦ Gecelik 250$'dan Başlayan Fiyatlarla ✦</span>
      </div>
    </section>
  );
}
