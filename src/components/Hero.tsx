"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="relative w-full h-96 bg-gray-800 overflow-hidden">
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/location/foto-portada.jpg')",
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24">
                <h1 className="text-4xl md:text-4xl font-bold text-white mb-4">
                    AUDITORIA Y CONSULTORIA EMPRESARIAL<br />
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl">
                    Servicios de alta calidad con ética, independencia y confidencialidad
                </p>
                <div>
                    <Link href="/contacto">
                        <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded shadow transition duration-300">
                            Contáctenos Ahora
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;