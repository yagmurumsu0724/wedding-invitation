import React from 'react';
import { Heart, Wine, Camera, UtensilsCrossed, Music } from 'lucide-react';

export default function TimelineSection() {
  const scheduleItems = [
    {
      time: "15:30",
      label: "NİKAH TÖRENİ",
      icon: <Heart size={22} color="#C5A059" />
    },
    {
      time: "16:30",
      label: "KOKTEYL SAATİ",
      icon: <Wine size={22} color="#C5A059" />
    },
    {
      time: "17:00",
      label: "FOTOĞRAF ÇEKİMİ",
      icon: <Camera size={22} color="#C5A059" />
    },
    {
      time: "18:30",
      label: "DÜĞÜN YEMEĞİ",
      icon: <UtensilsCrossed size={22} color="#C5A059" />
    },
    {
      time: "20:00",
      label: "DANS & PARTİ",
      icon: <Music size={22} color="#C5A059" />
    }
  ];

  return (
    <section className="invitation-section timeline-section">
      <h2 className="script-title">günün</h2>
      <h3 className="serif-title">AKIŞI</h3>
      <div className="gold-divider"></div>

      <div className="timeline-items">
        <div className="timeline-line"></div>
        {scheduleItems.map((item, index) => (
          <div key={index} className="timeline-row">
            <div className="timeline-icon-box">
              {item.icon}
            </div>
            <div className="timeline-desc">
              <span className="timeline-time">{item.time}</span>
              <span className="timeline-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
