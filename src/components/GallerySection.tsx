import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';

import galleryStrength from '@/assets/gallery-strength.jpg';
import galleryCardio from '@/assets/gallery-cardio.jpg';
import galleryGroup from '@/assets/gallery-group.jpg';
import galleryPersonal from '@/assets/gallery-personal.jpg';
import galleryEquipment from '@/assets/gallery-equipment.jpg';
import galleryTransform from '@/assets/gallery-transform.jpg';
import galleryFunctional from '@/assets/gallery-functional.jpg';
import gymInterior from '@/assets/gym-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: galleryStrength, alt: 'Strength Training' },
  { src: galleryCardio, alt: 'Cardio Machines' },
  { src: galleryGroup, alt: 'Group Sessions' },
  { src: galleryPersonal, alt: 'Personal Training' },
  { src: galleryEquipment, alt: 'Premium Equipment' },
  { src: galleryTransform, alt: 'Transformations' },
  { src: galleryFunctional, alt: 'Functional Training' },
  { src: gymInterior, alt: 'Gym Interior' },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
        scale: 0.8, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'back.out(1.5)',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="red-accent-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Inside <span className="text-primary">Trio Fitness</span>
          </h2>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-condensed text-sm tracking-widest uppercase text-primary-foreground">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <Image
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
