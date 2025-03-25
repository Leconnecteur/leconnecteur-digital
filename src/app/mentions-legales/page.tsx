'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ScrollAnimation = dynamic(() => import('@/components/ui/ScrollAnimation'), { 
  ssr: false 
});

export default function MentionsLegales() {
  const [, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section avec titre animé */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10"></div>
        
        {/* Cercles flous décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mentions Légales
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          ></motion.div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
            <ScrollAnimation>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">1. Informations légales</h2>
                  <p className="text-gray-300 mb-4">
                    Le site Le Connecteur Digital est édité par :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><span className="font-medium text-white">Raison sociale :</span> Le Connecteur Digital</li>
                    <li><span className="font-medium text-white">Forme juridique :</span> Auto-entrepreneur</li>
                    <li><span className="font-medium text-white">Siège social :</span> 22 Impasse des Aubépines, 64210 Bidart</li>
                    <li><span className="font-medium text-white">SIRET :</span> 123 456 789 00012</li>
                    <li><span className="font-medium text-white">Directeur de la publication :</span> Gérémy Lourenco</li>
                    <li><span className="font-medium text-white">Email :</span> contact@leconnecteurdigital.fr</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">2. Hébergement</h2>
                  <p className="text-gray-300 mb-4">
                    Le site Le Connecteur Digital est hébergé par :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><span className="font-medium text-white">Raison sociale :</span> Vercel Inc.</li>
                    <li><span className="font-medium text-white">Adresse :</span> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                    <li><span className="font-medium text-white">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">vercel.com</a></li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">3. Propriété intellectuelle</h2>
                  <p className="text-gray-300 mb-4">
                    L&apos;ensemble du contenu du site Le Connecteur Digital (textes, images, vidéos, logos, icônes, structure, base de données, etc.) est protégé par le droit d&apos;auteur et reste la propriété exclusive de Le Connecteur Digital ou de ses partenaires.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Le Connecteur Digital.
                  </p>
                  <p className="text-gray-300">
                    Toute exploitation non autorisée du site ou de l&apos;un quelconque des éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">4. Liens hypertextes</h2>
                  <p className="text-gray-300 mb-4">
                    Le site Le Connecteur Digital peut contenir des liens hypertextes vers d&apos;autres sites internet. Le Connecteur Digital n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                  </p>
                  <p className="text-gray-300">
                    La création de liens hypertextes vers le site Le Connecteur Digital nécessite une autorisation préalable écrite.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">5. Limitation de responsabilité</h2>
                  <p className="text-gray-300 mb-4">
                    Le Connecteur Digital s&apos;efforce d&apos;assurer au mieux de ses possibilités l&apos;exactitude et la mise à jour des informations diffusées sur son site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis.
                  </p>
                  <p className="text-gray-300">
                    Toutefois, Le Connecteur Digital ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur son site. En conséquence, Le Connecteur Digital décline toute responsabilité pour tout dommage résultant notamment d&apos;une imprécision ou inexactitude des informations disponibles sur ce site, ou pour toute atteinte résultant d&apos;une intrusion frauduleuse d&apos;un tiers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-400">6. Droit applicable et juridiction compétente</h2>
                  <p className="text-gray-300 mb-4">
                    Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            
            <div className="mt-12 text-center">
              <Link 
                href="/politique-de-confidentialite" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Voir notre politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
