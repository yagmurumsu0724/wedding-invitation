import React, { useState, useRef } from 'react';
import './styles/theme.css';
import HeroEnvelope from './components/HeroEnvelope';
import LocationCard from './components/LocationCard';
import TimelineSection from './components/TimelineSection';
import DetailsSection from './components/DetailsSection';
import RsvpFormSection from './components/RsvpFormSection';
import FooterSection from './components/FooterSection';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const cardRef = useRef(null);

  const handleToggleEnvelope = () => {
    const nextState = !isEnvelopeOpen;
    setIsEnvelopeOpen(nextState);

    if (nextState) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    }
  };

  return (
    <div className="app-wrapper">
      <main className="wedding-container">
        {/* Module 1: Mühürlü Dijital Zarf (Tam Ekran Kapak) */}
        <HeroEnvelope 
          isOpen={isEnvelopeOpen} 
          onToggleOpen={handleToggleEnvelope} 
        />

        {/* Ana Davetiye Kartı Gövdesi (Mühüre Dokununca Açılır) */}
        <div 
          ref={cardRef}
          className={`invitation-card-body ${isEnvelopeOpen ? 'revealed' : 'locked'}`}
        >
          {/* Module 2: Oheka Castle Konaklama & Fiyat Bilgisi */}
          <LocationCard />

          {/* Module 3: Akış Programı / Saat Çizelgesi */}
          <TimelineSection />

          {/* Module 4: Dress Code, Servis, Otel & Registry */}
          <DetailsSection />

          {/* Module 5: İnteraktif LCV / RSVP Katılım Formu */}
          <RsvpFormSection />

          {/* Module 6: Siyah-Beyaz Fotoğraf & Teşekkür İmzası */}
          <FooterSection />
        </div>
      </main>

      {/* Romantic Background Audio Toggle */}
      <AudioPlayer />
    </div>
  );
}
