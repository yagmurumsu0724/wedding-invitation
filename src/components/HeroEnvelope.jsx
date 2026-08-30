import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroEnvelope({ isOpen, onToggleOpen }) {
  return (
    <section className={`envelope-hero ${isOpen ? 'opened' : ''}`} onClick={onToggleOpen}>
      {/* 1. Vintage yırtık gazete/botanik çerçeve görseli (Sol/Sağ kenarlar) */}
      <img 
        src="/assets/vintage-paper-frame.jpg" 
        alt="Vintage Frame" 
        className="vintage-frame-overlay"
      />

      {/* 2. Vintage Botanik Çiçek Dalı (Sağ/Sol zarif dokunuş) */}
      <img 
        src="/assets/vintage-flower-branch.jpg" 
        alt="Vintage Flower" 
        className="vintage-flower-branch"
      />

      {/* Üst Desenli Dantel Kenarlık */}
      <div 
        className="envelope-lace-border top" 
        style={{ 
          backgroundImage: 'url(/assets/lace-border-scallop.svg)',
          height: '35px',
          transform: 'none',
          top: 0
        }}
      ></div>

      <div className="envelope-content-container">
        {/* Dört Köşeli Altın Yıldız İkonu */}
        <div className="gold-sparkle-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#C5A059"/>
            <path d="M19 2L20 6L24 7L20 8L19 12L18 8L14 7L18 6L19 2Z" fill="#D4AF37" opacity="0.7"/>
          </svg>
        </div>

        {/* Başlık */}
        <div className="envelope-subtext">D Ü Ğ Ü N   D A V E T İ Y E S İ</div>

        {/* İsimler */}
        <div className="envelope-names">Emma ve James</div>

        {/* Tarih ve Mekan */}
        <div className="envelope-date-location">
          15 EKİM 2026 • OHEKA KALESİ
        </div>

        {/* 3. Özel Gül Kabartmalı Altın Mühür İkonu */}
        <div className="wax-seal-wrapper">
          <div className={`wax-seal-img-box ${isOpen ? 'seal-open' : ''}`} title="Davetiyeyi Açmak İçin Mühüre Dokunun">
            <img 
              src="/assets/gold-rose-wax-seal.png" 
              alt="Gül Mühür" 
              className="gold-rose-seal-img" 
            />
          </div>
          
          <div className="wax-seal-hint">
            <span>
              {isOpen ? '✦  D A V E T İ Y E   A Ç I L D I  ✦' : '✦  M Ü H Ü R E   D O K U N A R A K   D A V E T İ Y E Y İ   A Ç I N  ✦'}
            </span>
            <ChevronDown 
              size={18} 
              color="#E2D1B3" 
              className={`bounce-arrow ${isOpen ? 'rotated' : ''}`} 
              style={{ marginTop: '8px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
