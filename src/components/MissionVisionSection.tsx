"use client";

import React from 'react';
import { FaEye, FaBriefcase } from 'react-icons/fa';

const MissionVisionSection: React.FC = () => {
    return (
        <section className="w-full relative overflow-hidden bg-cover bg-center" style={{
            backgroundImage: `url('/api/placeholder/1800/900')`,
            paddingTop: '80px',
            paddingBottom: '80px'
        }}>
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Vision Box */}
                    <div className="bg-white p-8 rounded-lg shadow-md lg:w-1/2 transform transition-transform duration-500 hover:translate-y-[-5px]">
                        <div className="flex items-start mb-6">
                            <div className="mr-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                    <FaEye className="text-gray-600" size={24} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Nuestra Visión</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Ser una firma líder de contadores, auditores y
                                    consultores empresariales reconocida por su alto
                                    nivel de profesionalismo, responsabilidad y calidad
                                    en sus resultados, caracterizada por contar con
                                    personal capacitado en todas las áreas de
                                    Contaduría Pública, Finanzas, Auditoria y áreas
                                    afines.                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission Box */}
                    <div className="bg-white p-8 rounded-lg shadow-md lg:w-1/2 transform transition-transform duration-500 hover:translate-y-[-5px]">
                        <div className="flex items-start mb-6">
                            <div className="mr-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                    <FaBriefcase className="text-gray-600" size={24} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Nuestra Misión</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Brindar servicios de calidad y excelencia a nuestros
                                    clientes en las áreas de Auditoría, Finanzas, Laboral,
                                    Contable y otras áreas afines.                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative dots pattern - right side */}
            <div className="hidden lg:block absolute right-0 top-0 w-1/4 h-full">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(150)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white opacity-50"></div>
                    ))}
                </div>
            </div>

            {/* Decorative dots pattern - left side */}
            <div className="hidden lg:block absolute left-0 bottom-0 w-1/4 h-1/2">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(100)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white opacity-50"></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVisionSection;