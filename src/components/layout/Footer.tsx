"use client";

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {

    return (
        <footer className="w-full">
            {/* Top Section - Contact Form */}
            <div id="contact" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold mb-4">Contáctenos ahora</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl">
                            Complete el formulario para solicitar una cotización o programar una consulta con nuestros expertos.
                        </p>
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center justify-center">
                                <FaPhone className="text-gray-400 mr-3" size={16} />
                                <span className="text-gray-300">2263-3115 / 2263-3263</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <FaEnvelope className="text-gray-400 mr-3" size={16} />
                                <a href="mailto:info@acp-audicon.com" className="text-gray-300 hover:text-white">
                                    info@acp-audicon.com
                                </a>
                            </div>
                        </div>
                        <a 
                            href="mailto:info@acp-audicon.com"
                            className="flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-200 text-gray-900 font-medium rounded transition-colors duration-300"
                        >
                            Contactar
                            <FaArrowRight className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Middle Section - Navigation */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Column 1 - Company */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Empresa</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/#mission-vision" className="text-gray-600 hover:text-gray-900">
                                        Quiénes Somos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#experts" className="text-gray-600 hover:text-gray-900">
                                        Nuestros Socios
                                    </Link>
                                </li>
                                <li>
                                    <span className="text-gray-400 cursor-not-allowed">
                                        Empleos
                                    </span>
                                    <span className="text-xs text-gray-400 block">(Próximamente)</span>
                                </li>
                                <li>
                                    <Link href="/noticias" className="text-gray-600 hover:text-gray-900">
                                        Noticias
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 - Services */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Servicios</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/#services" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Financiera
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Fiscal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Forense
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services" className="text-gray-600 hover:text-gray-900">
                                        Consultoría Empresarial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#services" className="text-gray-600 hover:text-gray-900">
                                        Outsourcing Contable
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Resources */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Recursos</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/noticias" className="text-gray-600 hover:text-gray-900">
                                        Noticias y Publicaciones
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Column 4 - Contact Info */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Contacto</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <FaMapMarkerAlt className="text-gray-600 mr-3 flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-600">
                                        87 Avenida Norte No. 705 Colonia Escalón, San Salvador, El Salvador
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <FaPhone className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                                    <span className="text-gray-600">2263-3115 / 2263-3263</span>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                                    <a href="mailto:info@acp-audicon.com" className="text-gray-600 hover:text-gray-900">
                                        info@acp-audicon.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                                    <a href="mailto:facturacion@acp-audicon.com" className="text-gray-600 hover:text-gray-900">
                                        facturacion@acp-audicon.com
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-gray-600 mr-3 flex-shrink-0" size={18} />
                                    <a href="mailto:empleos@acp-audicon.com" className="text-gray-600 hover:text-gray-900">
                                        empleos@acp-audicon.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Copyright and Social Links */}
            <div className="bg-gray-900 text-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400 text-sm">
                                &copy; {new Date().getFullYear()} CAÑAS AUDITORES Y CONSULTORES, S.A. DE C.V. Todos los derechos reservados.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;