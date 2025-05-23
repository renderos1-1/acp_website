"use client";

import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import MissionVisionSection from '../components/MissionVisionSection';
import ExpertsSection from '../components/ExpertsSection';
import LatestNewsSection from '../components/LatestNewsSection';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
    useEffect(() => {
        // Check if there's a hash in the URL and scroll to it
        const hash = window.location.hash.substring(1);
        if (hash) {
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);
    return (
        <Layout>
            {/* Hero Section */}
            <div id="home">
                <Hero />
            </div>

            {/* About Us Section */}
            <section id="about" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiénes Somos</h2>
                            <p className="text-gray-600 mb-4">
                                Somos una firma de Contadores Públicos debidamente autorizados
                                por el Consejo de Vigilancia de la Profesión de la Contaduría Pública
                                y Auditoria. Estamos comprometidos con brindar servicios de alta
                                calidad; nuestra constante capacitación nos permite aportar
                                herramientas fundamentales para ser un soporte oportuno en el
                                cumplimiento de los objetivos de nuestros clientes, manteniendo
                                siempre la ética profesional, independencia y confidencialidad.
                            </p>

                            <button className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600">
                                Conozca más sobre nosotros
                                <FaArrowRight className="ml-2" size={16} />
                            </button>
                        </div>
                        <div className="h-96 overflow-hidden rounded-lg shadow-md">
                            <img
                                src="/images/team/foto-equipo.jpg"
                                alt="Equipo de CAÑAS Auditores y Consultores"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <div id="services">
                <ServicesSection />
            </div>

            {/* Mission and Vision Section */}
            <div id="mission-vision">
                <MissionVisionSection />
            </div>

            {/* Experts Section */}
            <div id="experts">
                <ExpertsSection />
            </div>

            {/* Latest News Section */}
            <div id="news">
                <LatestNewsSection />
            </div>

            {/* Contact Section - The footer will be rendered by the Layout component,
            so we add an empty div with the ID that our Header can scroll to */}
            <div id="contact"></div>
        </Layout>
    );
};

export default HomePage;