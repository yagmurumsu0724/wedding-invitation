import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, HeartHandshake, X } from 'lucide-react';

export default function RsvpFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    plus_one: 'no',
    guest_count: '1',
    dietary_notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const existingRsvps = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      const newEntry = { ...formData, id: Date.now(), timestamp: new Date().toISOString() };
      localStorage.setItem('wedding_rsvps', JSON.stringify([...existingRsvps, newEntry]));

      setSubmittedData(newEntry);
      setIsSubmitting(false);
      setShowModal(true);

      if (formData.attending === 'yes') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#D4AF37', '#FAF9F6', '#2F3E2E']
        });
      }
    }, 600);
  };

  return (
    <section className="invitation-section rsvp-section" id="rsvp">
      <div className="rsvp-header">
        <span className="rsvp-deadline">15 Temmuz'a Kadar</span>
        <h3 className="rsvp-subtitle">Kutlamaya Hazır Mısınız?</h3>
        <p className="rsvp-desc">Aşağıdaki formu doldurarak katılım durumunuzu bize bildirin!</p>
      </div>

      <form onSubmit={handleSubmit} className="custom-form">
        {/* Ad Soyad */}
        <div className="form-group">
          <label className="field-label">Adınız ve Soyadınız *</label>
          <input 
            type="text" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            placeholder="Örn: Eleanor Vance" 
          />
        </div>

        {/* Katılım Durumu */}
        <div className="form-group">
          <label className="field-label">❤️ Bu özel günümüzde bizi onurlandıracak mısınız? *</label>
          <label className="radio-option">
            <input 
              type="radio" 
              name="attending" 
              value="yes" 
              checked={formData.attending === 'yes'}
              onChange={handleChange}
              required 
            />
            Evet, sevgiyle katılacağım!
          </label>
          <label className="radio-option">
            <input 
              type="radio" 
              name="attending" 
              value="no" 
              checked={formData.attending === 'no'}
              onChange={handleChange}
            />
            Maalesef katılamayacağım.
          </label>
        </div>

        {/* Yanında Misafir Getirecek Mi? */}
        {formData.attending === 'yes' && (
          <>
            <div className="form-group">
              <label className="field-label">❤️ Yanınızda misafir getirecek misiniz?</label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="plus_one" 
                  value="no" 
                  checked={formData.plus_one === 'no'}
                  onChange={handleChange}
                />
                Hayır, tek başıma katılacağım.
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="plus_one" 
                  value="yes" 
                  checked={formData.plus_one === 'yes'}
                  onChange={handleChange}
                />
                Evet, yanımda misafir getireceğim!
              </label>
            </div>

            {/* Kişi Sayısı */}
            <div className="form-group">
              <label className="field-label">❤️ Kaç kişi katılacaksınız?</label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="guest_count" 
                  value="1" 
                  checked={formData.guest_count === '1'}
                  onChange={handleChange}
                />
                Sadece ben
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="guest_count" 
                  value="2" 
                  checked={formData.guest_count === '2'}
                  onChange={handleChange}
                />
                Ben + 1 Misafir
              </label>
            </div>

            {/* Beslenme & Notlar */}
            <div className="form-group">
              <label className="field-label">❤️ Beslenme Tercihleri / Çifte Notunuz</label>
              <textarea 
                name="dietary_notes" 
                rows="3"
                value={formData.dietary_notes}
                onChange={handleChange}
                placeholder="Vejetaryen, alerji durumu veya güzel dilekleriniz..." 
              />
            </div>
          </>
        )}

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Gönderiliyor...' : 'KATILIM BİLDİR (RSVP)'}
        </button>
      </form>

      {/* Onay Modalı */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowModal(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              {submittedData?.attending === 'yes' ? (
                <CheckCircle2 size={48} color="#C5A059" />
              ) : (
                <HeartHandshake size={48} color="#C5A059" />
              )}
            </div>

            <h3 className="script-title" style={{ fontSize: '2.5rem' }}>
              {submittedData?.attending === 'yes' ? 'Sabırsızlıkla Bekliyoruz!' : 'Teşekkür Ederiz!'}
            </h3>

            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: '#2D2D2D', margin: '10px 0' }}>
              {submittedData?.name ? `Sayın ${submittedData.name},` : ''}
            </p>

            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, marginBottom: '20px' }}>
              {submittedData?.attending === 'yes'
                ? 'Katılım bildiriminiz alındı. Özel günümüzü Oheka Castle\'da birlikte kutlamak için sabırsızlanıyoruz!'
                : 'Bilgilendirmeniz için teşekkür ederiz. Düğün günümüzde aramızda olamayacağınız için üzgünüz!'}
            </p>

            <button className="gold-btn" style={{ width: '100%' }} onClick={() => setShowModal(false)}>
              KAPAT
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
