import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Footer from '../components/Footer/Footer';
import airport1 from '../assets/PersonalPics/airport1.jpg';
import airport2 from '../assets/PersonalPics/airport2.jpg';
import BadmintonInaugration1 from '../assets/PersonalPics/BadmintonInaugration1.JPG';
import BadmintonInaugration2 from '../assets/PersonalPics/BadmintonInaugration2.JPG';
import BadmintonInaugration3 from '../assets/PersonalPics/BadmintonInaugration3.JPG';
import BadmintonInaugration4 from '../assets/PersonalPics/BadmintonInaugration4.JPG';
import BadmintonInaugration5 from '../assets/PersonalPics/BadmintonInaugration5.JPG';
import BadmintonInaugration6 from '../assets/PersonalPics/BadmintonInaugration6.JPG';
import BadmintonInaugration7 from '../assets/PersonalPics/BadmintonInaugration7.JPG';
import inFrontOFFlowers from '../assets/PersonalPics/inFrontOFFlowers.JPG';
import withshaikh from '../assets/PersonalPics/withshaikh.jpg';

const images = [
  airport1, airport2,
  BadmintonInaugration1, BadmintonInaugration2, BadmintonInaugration3,
  BadmintonInaugration4, BadmintonInaugration5, BadmintonInaugration6,
  BadmintonInaugration7, inFrontOFFlowers, withshaikh,
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePrev = (e) => {
    e?.stopPropagation();
    setIsLoaded(false);
    setSelected(i => (i > 0 ? i - 1 : i));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setIsLoaded(false);
    setSelected(i => (i < images.length - 1 ? i + 1 : i));
  };

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  // Responsive masonry columns
  const getColumnCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [columnCount, setColumnCount] = useState(3);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cols = Array(columnCount).fill().map(() => []);
  images.forEach((src, i) => {
    cols[i % columnCount].push({ src, i });
  });

  // Get gap size based on screen width
  const getGapSize = () => {
    if (windowWidth < 640) return '20px';
    if (windowWidth < 1024) return '28px';
    return '32px';
  };

  return (
    <div style={{ minHeight: '100vh', background: '#faf9ff' }}>

      {/* Elegant Header */}
      <div style={{
        padding: '80px 24px 60px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Decorative element */}
        <div style={{
          display: 'inline-flex',
          justifyContent: 'center',
          marginBottom: '24px',
        }}>
          <div style={{
            width: '50px',
            height: '2px',
            background: 'linear-gradient(90deg, #8b5cf6, #6366f1)',
            borderRadius: '2px',
          }} />
        </div>
        
        <h1 style={{
          fontSize: 'clamp(42px, 8vw, 72px)',
          fontWeight: 700,
          color: '#1f2937',
          margin: 0,
          marginBottom: '20px',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}>
          Moments that{' '}
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            matter
          </span>
        </h1>
        
        <p style={{
          fontSize: 'clamp(16px, 4vw, 18px)',
          color: '#6b7280',
          maxWidth: '550px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          A curated collection of memories, captured in time
        </p>
      </div>

      {/* Responsive Masonry Grid with increased gap */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px 24px 100px',
        display: 'grid',
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gap: getGapSize(),
        alignItems: 'start',
      }}>
        {cols.map((col, ci) => (
          <div key={ci} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: getGapSize(),
          }}>
            {col.map(({ src, i }, idx) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#f3f4f6',
                  transition: 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)',
                }}
                onMouseEnter={e => {
                  if (windowWidth > 768) {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(139,92,246,0.15)';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={src}
                    alt={`Memory ${i + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseEnter={e => {
                      if (windowWidth > 768) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                  {/* Hover Overlay - only on desktop */}
                  {windowWidth > 768 && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(139,92,246,0.8) 0%, rgba(139,92,246,0) 60%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      padding: '24px',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '0'}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'white',
                        padding: '8px 20px',
                        borderRadius: '40px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transform: 'translateY(20px)',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(0)'}>
                        <Maximize2 size={16} style={{ color: '#8b5cf6' }} />
                        <span style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '13px' }}>View</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Premium Lightbox - Fixed button positions */}
      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'all 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={22} />
          </button>

          {/* Prev Button - Left side, vertically centered */}
          <button
            onClick={handlePrev}
            disabled={selected === 0}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: selected === 0 ? 'default' : 'pointer',
              opacity: selected === 0 ? 0.3 : 1,
              transition: 'all 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => {
              if (selected !== 0) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronLeft size={26} />
          </button>

          {/* Image Container */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {!isLoaded && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '40px',
                height: '40px',
                border: '3px solid rgba(255,255,255,0.2)',
                borderTopColor: '#fff',
                borderRadius: '50%',
                animation: 'spin 0.6s linear infinite',
              }} />
            )}
            
            <img
              src={images[selected]}
              alt=""
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '12px',
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 0.3s',
              }}
              onLoad={() => setIsLoaded(true)}
            />
            
            {/* Image Info Bar - Bottom center */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
              padding: '10px 20px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(8px)',
              borderRadius: '40px',
              border: '1px solid rgba(255,255,255,0.1)',
              width: 'fit-content',
              margin: '20px auto 0',
            }}>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', letterSpacing: '0.5px' }}>
                {String(selected + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Next Button - Right side, vertically centered */}
          <button
            onClick={handleNext}
            disabled={selected === images.length - 1}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              width: '56px',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: selected === images.length - 1 ? 'default' : 'pointer',
              opacity: selected === images.length - 1 ? 0.3 : 1,
              transition: 'all 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => {
              if (selected !== images.length - 1) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <ChevronRight size={26} />
          </button>

          {/* Thumbnail Navigation - Bottom */}
          {windowWidth > 768 && (
            <div style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px',
              padding: '12px 20px',
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '60px',
              overflowX: 'auto',
              maxWidth: '85vw',
              zIndex: 10,
            }}>
              {images.map((img, idx) => {
                const isActive = idx === selected;
                return (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLoaded(false);
                      setSelected(idx);
                    }}
                    style={{
                      width: '55px',
                      height: '55px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: isActive ? '2px solid #8b5cf6' : '2px solid transparent',
                      cursor: 'pointer',
                      padding: 0,
                      background: 'transparent',
                      transition: 'all 0.2s',
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Gallery;