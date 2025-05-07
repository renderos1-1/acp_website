"use client";

import React from 'react';
import { FaCalculator, FaFileAlt, FaUsers, FaBook, FaChartPie, FaBookmark } from 'react-icons/fa';

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 p-6 hover:bg-gray-50 rounded-lg transition duration-300">
            <div className="flex-shrink-0 text-gray-600">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

                <button className="text-gray-700 font-medium hover:text-gray-900">
                    Conocer Más
                </button>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <FaCalculator size={42} />,
            title: "Auditoría Financiera y Fiscal",
            //description: "Servicios especializados para el cumplimiento de obligaciones financieras y fiscales dentro del mercado regional."
        },
        {
            icon: <FaFileAlt size={42} />,
            title: "Auditoría Forense",
            //description: "Análisis detallado para la prevención y detección de fraudes dentro del mercado regional."
        },
        {
            icon: <FaBookmark size={42} />,
            title: "Auditoría de Cumplimiento LAV",
            //description: "Soluciones especializadas para el cumplimiento de la Ley de Lavado de Dinero y Activos."
        },
        {
            icon: <FaChartPie size={42} />,
            title: "Estudio de Precios de Transferencia",
            //description: "Estudios profesionales de precios de transferencia para su empresa dentro del mercado regional."
        },
        {
            icon: <FaUsers size={42} />,
            title: "Asesoría y Consultoría Empresarial",
            //description: "Servicios de asesoría especializada para optimizar la gestión de su empresa."
        },
        {
            icon: <FaBook size={42} />,
            title: "Outsourcing Contable",
            //description: "Soluciones de contabilidad externa para empresas de todos los tamaños."
        }
    ];

    return (
        <div className="w-full bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row mb-16">
                    <div className="md:w-1/3 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Todos los servicios que ofrecemos
                        </h2>
                        <div className="w-16 h-1 bg-gray-800"></div>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                //description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;