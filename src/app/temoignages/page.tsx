'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PlaceholderAvatar = dynamic(() => import('@/components/ui/PlaceholderAvatar'), {
  ssr: false
});

const ScrollAnimation = dynamic(() => import('@/components/ui/ScrollAnimation'), { 
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

// Fonction pour générer les étoiles de notation
const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <FaStar 
      key={i} 
      className={`inline-block ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
    />
  ));
};

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-slider
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section avec style amélioré */}
      <section className="py-16 bg-gray-900 relative overflow-hidden">
        {/* Grille futuriste */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ils nous font <span className="text-blue-400">confiance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de notre travail et pourquoi ils nous recommandent pour leurs projets digitaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section avec style amélioré */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {isLoaded && [...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 30}px`,
                height: `${Math.random() * 80 + 30}px`,
                opacity: 0.1 + Math.random() * 0.15,
                animation: `float ${Math.random() * 10 + 10}s linear infinite, pulse ${Math.random() * 2 + 2}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {isLoaded && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Slider Controls avec style amélioré */}
                <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 z-20 hidden md:block">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transition-all duration-300 border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 relative z-10 overflow-hidden"
                      aria-label="Previous testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                    </button>
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                  </motion.div>
                </div>
                <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 z-20 hidden md:block">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full bg-transparent text-white flex items-center justify-center transition-all duration-300 border-2 border-white/30 backdrop-blur-sm group-hover:border-white/50 relative z-10 overflow-hidden"
                      aria-label="Next testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
                    </button>
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
                  </motion.div>
                </div>

                {/* Testimonials Slider avec style amélioré */}
                <div className="overflow-hidden rounded-xl">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {testimonials.map((testimonial) => (
                      <div 
                        key={testimonial.id} 
                        className="min-w-full p-4"
                      >
                        <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50 relative overflow-hidden group">
                          {/* Glassmorphism effects */}
                          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-700"></div>
                          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-700"></div>
                          
                          <div className="relative z-10">
                            <motion.div 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="flex items-center mb-6"
                            >
                              <div className="mr-4 transform hover:scale-105 transition-transform duration-300">
                                <PlaceholderAvatar name={testimonial.name} className="w-16 h-16 text-xl shadow-lg" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                                <p className="text-gray-300">{testimonial.role}, {testimonial.company}</p>
                                <div className="mt-1">
                                  {renderStars(testimonial.rating)}
                                </div>
                              </div>
                            </motion.div>
                            <motion.div 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              className="relative"
                            >
                              <svg className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/70" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.4c0-1.3-0.8-2.4-2-2.8v-1.6c0-2.2-1.8-4-4-4h-8zM10 10h8c1.1 0 2 0.9 2 2v1.6c-0.6-0.3-1.3-0.4-2-0.4h-8c-0.7 0-1.4 0.1-2 0.4v-1.6c0-1.1 0.9-2 2-2zM8 15.6c0.6-0.3 1.3-0.4 2-0.4h8c1.1 0 2 0.9 2 2v6.4c0 1.1-0.9 2-2 2h-10c-1.1 0-2-0.9-2-2v-6.4c0-0.7 0.1-1.4 0.4-2 0.3 0.3 0.6 0.4 1 0.4 0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.2-0.7-0.4-1 0.2 0 0.4 0 0.6 0z"></path>
                              </svg>
                              <p className="text-gray-300 italic pl-6 leading-relaxed">{testimonial.content}</p>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots indicator avec style amélioré */}
                <div className="flex justify-center mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                        currentSlide === index 
                          ? 'bg-gradient-to-r from-blue-400 to-blue-600 w-8' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Grid avec style moderne */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Témoignages <span className="text-blue-400">en vedette</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Quelques-uns de nos clients satisfaits qui ont vu leur activité se transformer grâce à nos solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoaded && testimonials.map((testimonial, index) => (
              <ScrollAnimation 
                key={testimonial.id}
                delay={index * 0.1}
                className="bg-gray-800/40 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-700/50 relative overflow-hidden group"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-700"></div>
                <div className="flex items-center mb-4">
                  <div className="mr-3">
                    <PlaceholderAvatar name={testimonial.name} className="w-12 h-12 text-sm shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 text-sm italic">"{testimonial.content.substring(0, 120)}..."</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action avec style moderne et animation de bouton */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {isLoaded && [...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 backdrop-blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                opacity: 0.1 + Math.random() * 0.2,
                animation: `float ${Math.random() * 10 + 10}s linear infinite, pulse ${Math.random() * 2 + 2}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à rejoindre nos clients satisfaits ?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
            
            <motion.div
              className="relative inline-block group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent text-white font-bold rounded-full text-lg relative z-10 overflow-hidden border-2 border-white/30 backdrop-blur-sm inline-flex items-center gap-2 group-hover:border-white/50 transition-all duration-300"
              >
                <span className="relative z-10">Démarrer mon projet</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
                <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              </a>
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300 group-hover:duration-200"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
