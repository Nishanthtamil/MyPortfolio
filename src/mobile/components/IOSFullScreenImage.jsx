import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const IOSFullScreenImage = ({ image, src, alt = 'Gallery photo', onClose }) => {
  const imageUrl = src || (typeof image === 'string' ? image : image?.img || image?.src || image?.url);

  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageUrl) return null;

  const handleTouchStart = (e) => {
    startYRef.current = e.touches[0].clientY;
    currentYRef.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentYRef.current = e.touches[0].clientY;
    const deltaY = currentYRef.current - startYRef.current;
    if (deltaY > 0) {
      setDragY(deltaY);
    } else {
      setDragY(0);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaY = currentYRef.current - startYRef.current;
    if (deltaY > 80) {
      onClose?.();
    } else {
      setDragY(0);
    }
  };

  const opacity = Math.max(0.4, 1 - dragY / 400);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-colors duration-200 select-none"
      style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header / Close Button */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-4 pt-12 pb-4 ios-safe-top">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md active:bg-white/35 text-white text-sm font-medium transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
          <span>Close</span>
        </button>
      </div>

      {/* Centered Image Container */}
      <div
        className="w-full h-full flex items-center justify-center p-4 cursor-pointer"
        style={{
          transform: `translateY(${dragY}px) scale(${Math.max(0.85, 1 - dragY / 1000)})`,
          transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose?.();
          }
        }}
      >
        <img
          src={imageUrl}
          alt={alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default IOSFullScreenImage;
