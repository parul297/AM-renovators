import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import airport1 from '../../assets/PersonalPics/airport1.jpg';
import BadmintonInaugration2 from '../../assets/PersonalPics/BadmintonInaugration2.JPG';
import BadmintonInaugration3 from '../../assets/PersonalPics/BadmintonInaugration3.JPG';

const ProjectTeaser = () => {
  const navigate = useNavigate();

  const images = [
    { id: 1, src: airport1 },
    { id: 2, src: BadmintonInaugration2 },
    { id: 3, src: BadmintonInaugration3 },
  ];

  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '12px', fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#2563eb', marginBottom: '10px',
          }}>
            Our Work
          </p>
          <h2 style={{
            fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700,
            color: '#0f172a', margin: '0 0 10px 0', lineHeight: 1.2,
          }}>
            A glimpse behind the scenes
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
            Real moments from our projects — there's more where this came from.
          </p>
        </div>

        {/* 3-image layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gridTemplateRows: '240px 240px',
          gap: '10px',
        }}>
          {/* Left tall image */}
          <div
            onClick={() => navigate('/gallery')}
            style={{
              gridRow: 'span 2',
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            <img
              src={images[0].src} alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'brightness(0.88)', transition: 'transform 0.6s ease, filter 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.filter = 'brightness(1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.88)'; }}
            />
            {/* subtle dark vignette bottom */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Top-right image — partially cropped / blurred edges for mystery */}
          <div
            onClick={() => navigate('/gallery')}
            style={{
              position: 'relative', borderRadius: '14px',
              overflow: 'hidden', cursor: 'pointer',
            }}
          >
            <img
              src={images[1].src} alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'brightness(0.82) saturate(0.9)',
                transition: 'transform 0.6s ease, filter 0.4s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'brightness(1) saturate(1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(0.82) saturate(0.9)'; }}
            />
          </div>

          {/* Bottom-right — frosted "unlock" tile */}
          <div
            onClick={() => navigate('/gallery')}
            style={{
              position: 'relative', borderRadius: '14px',
              overflow: 'hidden', cursor: 'pointer',
            }}
          >
            <img
              src={images[2].src} alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                filter: 'blur(6px) brightness(0.6)',
                transform: 'scale(1.08)',
                transition: 'filter 0.5s ease, transform 0.5s ease' }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'blur(0px) brightness(0.85)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'blur(6px) brightness(0.6)'; e.currentTarget.style.transform = 'scale(1.08)'; }}
            />
            {/* Lock/reveal overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.18)',
                border: '1.5px solid rgba(255,255,255,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '10px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
                20+ photos inside
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: '28px' }}>
          <button
            onClick={() => navigate('/gallery')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#1d4ed8', color: '#fff',
              border: 'none', borderRadius: '8px',
              padding: '11px 22px', fontSize: '14px', fontWeight: 600,
              cursor: 'pointer', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1e40af'}
            onMouseLeave={e => e.currentTarget.style.background = '#1d4ed8'}
          >
            See everything
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectTeaser;