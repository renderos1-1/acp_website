"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ExpertCardProps {
    name: string;
    position: string;
    quote: string;
    imageUrl: string;
    isReversed?: boolean;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, position, quote, imageUrl, isReversed = false }) => {
    return (
        <div className="relative">
            <div className={`bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md p-6 md:p-8`}>
                <p className="text-gray-700 mb-6 text-base leading-relaxed">&#34;{quote}&#34;</p>
                <div className="flex items-center">
                    <div className={`flex items-center ${isReversed ? 'flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 relative">
                            <Image
                                src={imageUrl}
                                alt={`Foto de ${name}`}
                                fill
                                sizes="(max-width: 768px) 56px, 56px"
                                className="object-cover object-center"
                                onError={() => {
                                    // This is handled differently with Next.js Image
                                    console.error(`Error loading image for ${name}`);
                                    // Next.js Image has built-in error handling that shows
                                    // a placeholder when images fail to load
                                }}
                            />
                        </div>
                        <div className={`${isReversed ? 'mr-4' : 'ml-4'}`}>
                            <p className="font-semibold text-gray-800">{name}</p>
                            <p className="text-sm text-gray-500">{position}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Gray background accent */}
            <div className={`absolute ${isReversed ? '-left-2' : '-right-2'} -bottom-2 w-full h-full bg-gray-200 -z-10 rounded-lg`}></div>
        </div>
    );
};

const ExpertsSection: React.FC = () => {
    const experts = [
        {
            name: "Lic. Luis Armando Escobar Anzora",
            position: "Socio Principal",
            quote: "Contamos con más de 25 años de experiencia en materia de auditoría financiera, auditoría fiscal, auditoría forense y consultoría empresarial.",
            imageUrl: "/images/team/luis-anzora.jpg"
        },
        {
            name: "Lic. Dore Alexander Perez Pablo",
            position: "Socio Principal",
            quote: "Nuestra especialización en auditoría financiera y fiscal nos permite brindar soluciones efectivas para el cumplimiento de sus obligaciones fiscales.",
            imageUrl: "/images/team/dore-perez.jpg"
        },
        {
            name: "Lic. Enrique Cañas Jimenez",
            position: "Asesor",
            quote: "Con una carrera de más de 35 años a nivel nacional e internacional, aportamos una visión global para su empresa.",
            imageUrl: "/images/team/enrique-canas.jpg"
        },
        {
            name: "Cañas Auditores y Consultores",
            position: "Firma de Contadores Públicos",
            quote: "Comprometidos con brindar servicios de alta calidad, manteniendo la ética profesional, independencia y confidencialidad.",
            imageUrl: "/images/team/company-profile.jpg"
        }
    ];

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden">
            {/* Decorative dots pattern - left side */}
            <div className="hidden md:block absolute left-0 top-0 w-1/6 h-full">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(150)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
                    ))}
                </div>
            </div>

            {/* Decorative dots pattern - right side */}
            <div className="hidden md:block absolute right-0 bottom-0 w-1/6 h-full">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(150)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row mb-12">
                    {/* Left side - Title and button */}
                    <div className="md:w-1/3 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Nuestros expertos y sus compromisos
                        </h2>
                        <Link href="/quienes-somos">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-none transition duration-300 inline-flex items-center text-sm font-medium">
                                Ver Todos Nuestros Expertos
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Expert cards in staggered layout */}
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {/* First column - first and third experts */}
                        <div className="space-y-16">
                            {/* First expert */}
                            <div className="md:mt-0">
                                <ExpertCard
                                    name={experts[0].name}
                                    position={experts[0].position}
                                    quote={experts[0].quote}
                                    imageUrl={experts[0].imageUrl}
                                    isReversed={false}
                                />
                            </div>

                            {/* Third expert */}
                            <div className="md:mt-8">
                                <ExpertCard
                                    name={experts[2].name}
                                    position={experts[2].position}
                                    quote={experts[2].quote}
                                    imageUrl={experts[2].imageUrl}
                                    isReversed={false}
                                />
                            </div>
                        </div>

                        {/* Second column - second and fourth experts, with offset */}
                        <div className="space-y-16 md:mt-16">
                            {/* Second expert */}
                            <div>
                                <ExpertCard
                                    name={experts[1].name}
                                    position={experts[1].position}
                                    quote={experts[1].quote}
                                    imageUrl={experts[1].imageUrl}
                                    isReversed={true}
                                />
                            </div>

                            {/* Fourth expert */}
                            <div>
                                <ExpertCard
                                    name={experts[3].name}
                                    position={experts[3].position}
                                    quote={experts[3].quote}
                                    imageUrl={experts[3].imageUrl}
                                    isReversed={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;