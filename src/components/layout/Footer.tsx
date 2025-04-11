"use client";

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">CAÑAS AUDITORES Y CONSULTORES</h3>
                        <p className="text-gray-300 mb-6">
                            Servicios de alta calidad en las áreas de Auditoría, Finanzas, Laboral, Contable y otras áreas afines.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons would go here */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/quienes-somos" className="text-gray-300 hover:text-white">
                                    Quiénes Somos
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios" className="text-gray-300 hover:text-white">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/noticias" className="text-gray-300 hover:text-white">
                                    Noticias
                                </Link>
                            </li>
                            <li>
                                <Link href="/empleos" className="text-gray-300 hover:text-white">
                                    Empleos
                                </Link>
                            </li>
                            <li>
                                <Link href="/contacto" className="text-gray-300 hover:text-white">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contáctenos</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-gray-300 mr-3 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-300">
                  87 Avenida Norte No. 705 Colonia Escalón, San Salvador, San Salvador, El Salvador.
                </span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-gray-300 mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-300">2263-3115 / 2263-3263</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-gray-300 mr-3 flex-shrink-0" size={20} />
                                <a href="mailto:info@acp-audicon.com" className="text-gray-300 hover:text-white">
                                    info@acp-audicon.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} CAÑAS AUDITORES Y CONSULTORES, S.A. DE C.V. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;