import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HeroEnvelope({ isOpen, onToggleOpen }) {
  return (
    <section className={`envelope-hero ${isOpen ? 'opened' : ''}`} onClick={onToggleOpen}>
      {/* Üst Dantel Kenarlık */}
      <div className="envelope-lace-border top" style={{ backgroundImage: 'url(/assets/lace-border.svg)' }}></div>

      <div style={{ marginTop: '10px' }}>
        <Sparkles size={20} color="#C5A059" style={{ opacity: 0.8, marginBottom: '6px' }} />
        <div className="envelope-subtext">DÜĞÜN DAVETİYESİ</div>
        <div className="envelope-names">Emma & James</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', letterSpacing: '3px', color: '#D4AF37' }}>
          15 EKİM 2026 • OHEKA CASTLE
        </div>
      </div>

      {/* İnteraktif Altın Mühür */}
      <div className="wax-seal-wrapper">
        <div className="wax-seal" title="Davetiyeyi Açmak İçin Tıklayın">
          <div className="wax-seal-inner">
            <span className="wax-seal-text">EJ</span>
          </div>
        </div>
        <span className="wax-seal-hint">
          {isOpen ? '✦ ZARFI KAPATMAK İÇİN DOKUNUN ✦' : '✦ ZARFI AÇMAK İÇİN MÜHÜRE DOKUNUN ✦'}
        </span>
      </div>

      {/* Alt Dantel Kenarlık */}
      <div className="envelope-lace-border bottom" style={{ backgroundImage: 'url(/assets/lace-border.svg)' }}></div>
    </section>
  );
}
