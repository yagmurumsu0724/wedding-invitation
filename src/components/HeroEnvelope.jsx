import React from 'react';
import { ChevronDown } from 'lucide-react';
import vintagePaperFrameImg from '../assets/vintage-paper-frame.jpg';
import vintageFlowerBranchImg from '../assets/vintage-flower-branch.jpg';
import goldRoseSealImg from '../assets/gold-rose-wax-seal.jpg';

export default function HeroEnvelope({ isOpen, onToggleOpen }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onToggleOpen();
  };

  return (
    <section className={`envelope-hero ${isOpen ? 'opened' : ''}`} onClick={onToggleOpen}>
      {/* Outer Parchment Envelope Container */}
      <div className="vintage-envelope-card">
        {/* 1. Yırtık Gazete & Botanik Çerçeve */}
        <div className="vintage-paper-frame-container">
          <img 
            src={vintagePaperFrameImg} 
            alt="Vintage Paper Frame" 
            className="vintage-paper-frame-img"
          />
        </div>

        {/* 2. İç Yeşil Davetiye Kartı */}
        <div className="green-inner-card">
          {/* 3. Zambak Çiçeği İllüstrasyonu (Sol Alt) */}
          <div className="vintage-lily-wrapper">
            <img 
              src={vintageFlowerBranchImg} 
              alt="Vintage Lily" 
              className="vintage-lily-img"
            />
          </div>

          {/* Dört Köşeli Altın Yıldız İkonu */}
          <div className="gold-sparkle-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#C5A059"/>
              <path d="M19 2L20 6L24 7L20 8L19 12L18 8L14 7L18 6L19 2Z" fill="#D4AF37" opacity="0.7"/>
            </svg>
          </div>

          {/* DÜĞÜN DAVETİYESİ */}
          <div className="envelope-subtext">D Ü Ğ Ü N   D A V E T İ Y E S İ</div>

          {/* Emma ve James */}
          <div className="envelope-names">Emma ve James</div>

          {/* Tarih ve Mekan */}
          <div className="envelope-date-location">
            15 EKİM 2026 • OHEKA KALESİ
          </div>

          {/* 4. 3D Gül Kabartmalı Altın Mühür Medalyonu */}
          <div className="wax-seal-wrapper" onClick={handleClick}>
            <div 
              className={`wax-seal-img-box ${isOpen ? 'seal-open' : ''}`} 
              title="Davetiyeyi Açmak İçin Mühüre Dokunun"
              onClick={handleClick}
            >
              <img 
                src={goldRoseSealImg} 
                alt="Gül Mühür" 
                className="gold-rose-seal-img" 
                onClick={handleClick}
              />
            </div>
            
            <div className="wax-seal-hint" onClick={handleClick}>
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
      </div>
    </section>
  );
}
