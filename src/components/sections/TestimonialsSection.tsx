'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const PlaceholderAvatar = dynamic(() => import('@/components/ui/PlaceholderAvatar'), {
  ssr: false
});

// Type pour les témoignages
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Fabien Segas',
    role: 'Client',
    company: 'QMI',
    content: "Je suis très satisfait du travail de Geremy en tant que concepteur de site web. Il a rapidement cerné mes besoins et a su y répondre de manière efficace. Le résultat est à la hauteur de mes attentes, et le projet a été réalisé dans des délais très courts. Je le recommande sans hésitation !",
    rating: 5
  },
  {
    id: 2,
    name: 'Hugo Fabre',
    role: 'Client',
    company: '',
    content: "Je recommande Le connecteur Digital. Très professionnel, résultats correspondants à mes attentes et très bon relationnel. Ne pas hésiter !!",
    rating: 5
  },
  {
    id: 3,
    name: 'Clement Petrau',
    role: 'Client',
    company: '',
    content: "Je recommande",
    rating: 5
  },
  {
    id: 4,
    name: 'Mathieu Vasset',
    role: 'Client',
    company: '',
    content: "Très bon contact, à l'écoute des besoins et à de bonnes idées afin d'améliorer ma visibilité. Je recommande",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [direction, setDirection] = useState(0); // Pour l'animation de direction
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fonction pour générer les étoiles en fonction de la note
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`inline-block ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Navigation automatique
  useEffect(() => {
    if (!autoPlayEnabled) return;
    
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlayEnabled]);

  // Pause auto-play when user interacts with carousel
  const pauseAutoPlay = () => {
    setAutoPlayEnabled(false);
    // Resume after 10 seconds of inactivity
    setTimeout(() => setAutoPlayEnabled(true), 10000);
  };

  // Gestion du drag avec Framer Motion
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    pauseAutoPlay();
    
    if (info.offset.x > 100) {
      // Swipe droite
      setDirection(-1);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    } else if (info.offset.x < -100) {
      // Swipe gauche
      setDirection(1);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const goToSlide = (index: number) => {
    pauseAutoPlay();
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Variants d'animation pour les témoignages
  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  // Effet de lueur pour les boutons sur mobile
  const glowVariants = {
    initial: { 
      opacity: 0.3,
      scale: 1,
    },
    animate: { 
      opacity: [0.3, 0.6, 0.3],
      scale: 1.05,
      transition: {
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.4,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <section id="temoignages" className="py-8 pt-4 pb-0 md:py-12 md:pb-0 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ce que nos clients disent</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les retours d'expérience de ceux qui nous ont fait confiance pour leur présence digitale.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={activeIndex}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={handleDragEnd}
                className={`w-full px-4 ${isMobile ? 'cursor-grab active:cursor-grabbing' : ''}`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl relative overflow-hidden"
                  whileTap={isMobile ? { scale: 0.98 } : undefined}
                >
                  {/* Effet de lueur sur mobile pour le témoignage */}
                  {isMobile && (
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-indigo-600/10 to-pink-600/10 rounded-2xl z-0"
                      variants={{
                        initial: { opacity: 0.1 },
                        animate: { 
                          opacity: [0.1, 0.2, 0.1],
                          transition: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                          }
                        }
                      }}
                      initial="initial"
                      animate="animate"
                    />
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 relative z-10">
                    <div className="mb-4 sm:mb-0 sm:mr-4 flex justify-center">
                      <PlaceholderAvatar name={testimonials[activeIndex].name} className="w-16 h-16 text-xl" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-bold text-white">{testimonials[activeIndex].name}</h3>
                      <p className="text-gray-300">{testimonials[activeIndex].role}
                        {testimonials[activeIndex].company && `, ${testimonials[activeIndex].company}`}
                      </p>
                      <div className="mt-1">
                        {renderStars(testimonials[activeIndex].rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-200 italic text-lg leading-relaxed text-center sm:text-left relative z-10">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-sky-500 to-purple-500 w-8 h-3' 
                    : 'bg-gray-500/70 w-3 h-3'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Aller au témoignage ${index + 1}`}
              >
                {/* Effet de lueur sur mobile pour l'indicateur actif */}
                {isMobile && activeIndex === index && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-pink-600/60 rounded-full z-0"
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Boutons de navigation */}
          <div className="flex justify-center mt-6 md:justify-between md:mt-0 md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2">
            <motion.button
              onClick={() => {
                pauseAutoPlay();
                setDirection(-1);
                setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
              }}
              className="relative group w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full mx-2 md:mx-0 md:-ml-5 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Témoignage précédent"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              
              {/* Effet de lueur sur mobile */}
              {isMobile && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-pink-600/60 z-0"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />
              )}
            </motion.button>
            
            <motion.button
              onClick={() => {
                pauseAutoPlay();
                setDirection(1);
                setActiveIndex((activeIndex + 1) % testimonials.length);
              }}
              className="relative group w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full mx-2 md:mx-0 md:-mr-5 overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Témoignage suivant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                <path d="M9 18l6-6-6-6" />
              </svg>
              
              {/* Effet de lueur sur mobile */}
              {isMobile && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-pink-600/60 z-0"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
