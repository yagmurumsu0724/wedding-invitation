import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

export default function HeroEnvelope({ isOpen, onToggleOpen }) {
  return (
    <section className={`envelope-hero ${isOpen ? 'opened' : ''}`} onClick={onToggleOpen}>
      {/* Üst Dantel Kenarlık */}
      <div className="envelope-lace-border top" style={{ backgroundImage: 'url(/assets/lace-border.svg)' }}></div>

      <div style={{ marginTop: 'auto', marginBottom: 'auto', zIndex: 3, padding: '20px 0' }}>
        <Sparkles size={24} color="#C5A059" style={{ opacity: 0.9, marginBottom: '8px' }} />
        <div className="envelope-subtext">DÜĞÜN DAVETİYESİ</div>
        <div className="envelope-names">Emma & James</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', letterSpacing: '3px', color: '#D4AF37', marginTop: '6px' }}>
          15 EKİM 2026 • OHEKA CASTLE
        </div>

        {/* İnteraktif Altın Mühür */}
        <div className="wax-seal-wrapper" style={{ marginTop: '30px', marginBottom: '20px' }}>
          <div className={`wax-seal ${isOpen ? 'seal-open' : ''}`} title="Davetiyeyi Açmak İçin Tıklayın">
            <div className="wax-seal-inner">
              <span className="wax-seal-text">EJ</span>
            </div>
          </div>
          
          <div className="wax-seal-hint" style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <span>
              {isOpen ? '✦ DAVETİYE AÇILDI ✦' : '✦ MÜHÜRE DOKUNARAK DAVETİYEYİ AÇIN ✦'}
            </span>
            <ChevronDown 
              size={20} 
              color="#E2D1B3" 
              className={`bounce-arrow ${isOpen ? 'rotated' : ''}`} 
            />
          </div>
        </div>
      </div>

      {/* Alt Dantel Kenarlık */}
      <div className="envelope-lace-border bottom" style={{ backgroundImage: 'url(/assets/lace-border.svg)' }}></div>
    </section>
  );
}
