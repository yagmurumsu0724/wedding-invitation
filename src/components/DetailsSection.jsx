import React from 'react';
import { Shirt, Bus, Hotel, Gift } from 'lucide-react';

export default function DetailsSection() {
  return (
    <section className="invitation-section details-section">
      <h2 className="script-title">önemli</h2>
      <h3 className="serif-title">DETAYLAR</h3>
      <div className="gold-divider"></div>

      {/* KIYAFET KODU */}
      <div className="detail-block">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
          <Shirt size={20} color="#C5A059" />
        </div>
        <h4>KIYAFET KODU (DRESS CODE)</h4>
        <p>Yarı resmi ve şık. Konseptimize uygun pastel ve doğal tonları tercih edebilirsiniz.</p>
      </div>

      {/* ULAŞIM */}
      <div className="detail-block">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
          <Bus size={20} color="#C5A059" />
        </div>
        <h4>ULAŞIM & SERVİS</h4>
        <p>Tören alanından resepsiyona konuklarımız için özel servis araçları kaldırılacaktır. Servisler nikah töreninin hemen ardından hareket edecektir.</p>
      </div>

      {/* KONAKLAMA */}
      <div className="detail-block">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
          <Hotel size={20} color="#C5A059" />
        </div>
        <h4>KONAKLAMA</h4>
        <p>Şehir dışından gelen konuklarımız için resepsiyon alanına 5 dakika mesafede Marriott Otel bulunmaktadır.</p>
        <a 
          href="#book" 
          className="gold-btn" 
          onClick={(e) => {
            e.preventDefault();
            alert("Marriott Otel Rezervasyon Sayfasına Yönlendiriliyorsunuz...");
          }}
        >
          REZERVASYON YAP
        </a>
      </div>

      {/* HEDİYE LİSTESİ */}
      <div className="detail-block" style={{ marginBottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
          <Gift size={20} color="#C5A059" />
        </div>
        <h4>DÜĞÜN HEDİYE LİSTESİ</h4>
        <p>Varlığınız bizim için en büyük hediyedir. Yine de bizi bir armağanla onurlandırmak isterseniz hediye listemize göz atabilirsiniz.</p>
        <a 
          href="#registry" 
          className="gold-btn"
          onClick={(e) => {
            e.preventDefault();
            alert("Emma & James Düğün Hediye Listesi Açılıyor...");
          }}
        >
          HEDİYE LİSTESİ
        </a>
      </div>
    </section>
  );
}
