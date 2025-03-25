'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ScrollAnimation = dynamic(() => import('@/components/ui/ScrollAnimation'), { 
  ssr: false 
});

const AnimatedCounter = dynamic(() => import('@/components/ui/AnimatedCounter').then(mod => mod.AnimatedCounter), { 
  ssr: false,
  loading: () => <div className="text-3xl md:text-4xl font-bold text-blue-600">0</div>
});

const ButtonGlow = dynamic(() => import('@/components/ui/ButtonGlow'), { 
  ssr: false 
});

export default function WhyWebsite() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Ajouter les styles d'animation
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0);
        }
        25% {
          transform: translateY(-20px) translateX(10px);
        }
        50% {
          transform: translateY(0) translateX(20px);
        }
        75% {
          transform: translateY(20px) translateX(10px);
        }
        100% {
          transform: translateY(0) translateX(0);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 0.1;
          transform: scale(1);
        }
        50% {
          opacity: 0.2;
          transform: scale(1.05);
        }
      }
    `;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section avec style moderne et fond bleu foncé uni */}
      <section className="relative py-16 overflow-hidden bg-[#0c1425]">
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
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Pourquoi votre entreprise a <span className="text-blue-400">besoin</span> d'un site web ?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Dans l'ère numérique actuelle, un site web n'est plus un luxe mais une nécessité pour toute entreprise qui souhaite prospérer.
            </p>
          </motion.div>
          
          {/* Stats Cards - Intégrées directement dans la première section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
            {isLoaded && (
              <>
                <ScrollAnimation className="p-8 bg-gray-800/40 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-700"></div>
                  <AnimatedCounter 
                    end={81} 
                    duration={2.5} 
                    className="text-4xl font-bold text-blue-400 mb-2"
                    suffix="%"
                  />
                  <p className="text-gray-300">des consommateurs recherchent un produit en ligne avant d'acheter</p>
                </ScrollAnimation>
                
                <ScrollAnimation 
                  className="p-8 bg-gray-800/40 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 relative overflow-hidden group"
                  delay={0.2}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-700"></div>
                  <AnimatedCounter 
                    end={75} 
                    duration={2.5} 
                    className="text-4xl font-bold text-purple-400 mb-2"
                    suffix="%"
                  />
                  <p className="text-gray-300">jugent la crédibilité d'une entreprise selon son site web</p>
                </ScrollAnimation>
                
                <ScrollAnimation 
                  className="p-8 bg-gray-800/40 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 relative overflow-hidden group"
                  delay={0.4}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/20 rounded-full blur-3xl group-hover:bg-teal-400/30 transition-all duration-700"></div>
                  <div className="text-4xl font-bold text-teal-400 mb-2">24/7</div>
                  <p className="text-gray-300">votre site web travaille pour vous, même quand vous dormez</p>
                </ScrollAnimation>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section avec style moderne */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Les <span className="text-blue-400">avantages</span> d'un site web professionnel
            </h2>
            <p className="text-lg text-gray-300">
              Un site web bien conçu offre de nombreux avantages qui peuvent transformer votre entreprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoaded && (
              <>
                <ScrollAnimation className="bg-gray-800/40 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-700/50 relative overflow-hidden group">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-700"></div>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Visibilité mondiale</h3>
                      <p className="text-gray-300">
                        Un site web vous permet d'atteindre des clients potentiels dans le monde entier, 24h/24 et 7j/7.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation 
                  className="bg-gray-800/40 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-700/50 relative overflow-hidden group"
                  delay={0.2}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-400/20 transition-all duration-700"></div>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Rentabilité</h3>
                      <p className="text-gray-300">
                        Un site web est l'un des moyens les plus rentables pour promouvoir votre entreprise et générer des leads.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation 
                  className="bg-gray-800/40 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-700/50 relative overflow-hidden group"
                  delay={0.3}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-400/20 transition-all duration-700"></div>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-teal-500 to-green-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Crédibilité</h3>
                      <p className="text-gray-300">
                        Un site web professionnel renforce la crédibilité de votre entreprise et inspire confiance à vos clients potentiels.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation 
                  className="bg-gray-800/40 backdrop-blur-md rounded-lg p-6 shadow-xl border border-gray-700/50 relative overflow-hidden group"
                  delay={0.4}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-400/20 transition-all duration-700"></div>
                  <div className="flex items-start mb-4">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Accessibilité</h3>
                      <p className="text-gray-300">
                        Vos clients peuvent accéder à vos produits et services à tout moment, ce qui améliore leur expérience et satisfaction.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Études de cas Section */}
      <section className="py-16 bg-[#0c1425] relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Études de <span className="text-blue-400">cas</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Découvrez comment un site web a transformé ces entreprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {isLoaded && (
              <>
                <ScrollAnimation className="bg-gray-800/40 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-gray-700/50 group">
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src="/images/realisations/clem-detailing.png" 
                      alt="Clem Detailing" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">Clem Detailing Car</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">
                      Pour ce spécialiste du detailing automobile, nous avons mis en place un système de réservation en ligne qui a révolutionné sa gestion des rendez-vous. Cette solution a permis de :
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                      <li>Faciliter la prise de rendez-vous pour les clients 24h/24</li>
                      <li>Réduire le temps passé au téléphone pour l'équipe</li>
                      <li>Augmenter le chiffre d'affaires grâce à une meilleure organisation</li>
                      <li>Offrir une expérience client moderne et professionnelle</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                      <ButtonGlow 
                        href="https://clemdetailing.fr/" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visiter le site
                      </ButtonGlow>
                    </div>
                  </div>
                </ScrollAnimation>
                
                <ScrollAnimation 
                  className="bg-gray-800/40 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-gray-700/50 group"
                  delay={0.2}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image 
                      src="/images/realisations/lifespa.png" 
                      alt="Life Spa" 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">Life Spa</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">
                      Pour l'ouverture de ce nouveau magasin de spas, nous avons créé un site vitrine élégant qui a contribué au succès du lancement. Les bénéfices ont été immédiats :
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                      <li>Présentation professionnelle des produits et services</li>
                      <li>Établissement d'une présence en ligne avant même l'ouverture physique</li>
                      <li>Génération de demandes de devis dès les premiers jours</li>
                      <li>Renforcement de la crédibilité de la marque sur le marché local</li>
                    </ul>
                    <div className="flex justify-center mt-6">
                      <ButtonGlow 
                        href="https://lifespa.fr/" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visiter le site
                      </ButtonGlow>
                    </div>
                  </div>
                </ScrollAnimation>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section avec fond multicolore */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900 via-indigo-900 to-pink-900"></div>
        
        {isLoaded && (
          <>
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                  initial={{ 
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    opacity: 0.1 + Math.random() * 0.2
                  }}
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0]
                  }}
                  transition={{ 
                    duration: 10 + Math.random() * 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
            
            <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10 mix-blend-overlay"></div>
          </>
        )}
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Prêt à transformer votre présence en ligne ?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <ButtonGlow 
                href="/contact" 
                size="lg"
                variant="primary"
                icon={
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                }
              >
                Démarrer mon projet
              </ButtonGlow>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
