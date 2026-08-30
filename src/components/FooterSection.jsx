import React from 'react';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  const coupleBwImg = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80";

  return (
    <footer className="footer-section">
      <h2 className="script-title" style={{ fontSize: '3.2rem', marginBottom: '10px' }}>teşekkür ederiz</h2>
      
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.85rem', letterSpacing: '3px', color: '#757575', textTransform: 'uppercase' }}>
        TÜM SEVGİLERİMİZLE • EMMA & JAMES
      </p>

      <div className="footer-photo-frame">
        <img 
          src={coupleBwImg} 
          alt="Emma & James" 
          className="footer-photo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80";
          }}
        />
      </div>

      <div style={{ marginTop: '25px', color: 'var(--gold-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <Heart size={14} fill="#C5A059" color="#C5A059" />
        <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#888' }}>
          15 EKİM 2026 • OHEKA CASTLE
        </span>
        <Heart size={14} fill="#C5A059" color="#C5A059" />
      </div>
    </footer>
  );
}
