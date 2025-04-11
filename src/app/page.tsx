"use client";

import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import ServicesSection from '../components/ServicesSection';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* Service Cards Section */}
        <ServiceCards />

        {/* About Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiénes Somos</h2>
                <p className="text-gray-600 mb-4">
                  Somos una firma de Contadores Públicos debidamente autorizados por el Consejo de Vigilancia de la Profesión de la Contaduría Publica y Auditoria. Estamos comprometidos con brindar servicios de alta calidad; nuestra constante capacitación nos permite aportar herramientas fundamentales para ser un soporte oportuno en el cumplimiento de los objetivos de nuestros clientes.
                </p>
                <p className="text-gray-600 mb-6">
                  Mantenemos la ética profesional, independencia y confidencialidad como pilares fundamentales de nuestro servicio.
                </p>
                <button className="inline-flex items-center text-gray-800 font-semibold hover:text-gray-600">
                  Conozca más sobre nosotros
                  <FaArrowRight className="ml-2" size={16} />
                </button>
              </div>
              <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg shadow-md">
                <div className="text-center">
                  <p className="text-gray-600 text-lg">Imagen representativa</p>
                  <p className="text-gray-500">Profesionales en acción</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Contact CTA Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de profesionales está preparado para brindarle la mejor asesoría en materia contable, fiscal y financiera.
            </p>
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded shadow transition duration-300">
              Contáctenos Ahora
            </button>
          </div>
        </section>
      </Layout>
  );
};

export default HomePage;