"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaArrowRight } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the form submission, like sending to an API
        console.log({ name, email, phone, message });
        setFormSubmitted(true);
        // Reset form after submission
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

        // Reset submission status after 3 seconds
        setTimeout(() => {
            setFormSubmitted(false);
        }, 3000);
    };

    return (
        <footer className="w-full">
            {/* Top Section - Contact Form */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">Contáctenos ahora</h2>
                            <p className="text-gray-300 mb-4">
                                Complete el formulario para solicitar una cotización o programar una consulta con nuestros expertos.
                            </p>
                        </div>

                        <div className="md:w-1/2">
                            {formSubmitted ? (
                                <div className="bg-green-600 text-white p-4 rounded">
                                    ¡Gracias por contactarnos! Nos comunicaremos pronto.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:flex-wrap gap-4">
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="md:w-[calc(50%-0.5rem)] p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico *"
                                        className="md:w-[calc(50%-0.5rem)] p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <div className="w-full flex items-center">
                                        <button
                                            type="submit"
                                            className="flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-200 text-gray-900 font-medium rounded transition-colors duration-300"
                                        >
                                            Contactar
                                            <FaArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
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
                                    <Link href="/quienes-somos" className="text-gray-600 hover:text-gray-900">
                                        Quiénes Somos
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/socios" className="text-gray-600 hover:text-gray-900">
                                        Nuestros Socios
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/empleos" className="text-gray-600 hover:text-gray-900">
                                        Empleos
                                    </Link>
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
                                    <Link href="/auditoria-financiera" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Financiera
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auditoria-fiscal" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Fiscal
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/auditoria-forense" className="text-gray-600 hover:text-gray-900">
                                        Auditoría Forense
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/consultoria-empresarial" className="text-gray-600 hover:text-gray-900">
                                        Consultoría Empresarial
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/outsourcing-contable" className="text-gray-600 hover:text-gray-900">
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
                                    <Link href="/recursos/guias" className="text-gray-600 hover:text-gray-900">
                                        Guías y Publicaciones
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/recursos/preguntas-frecuentes" className="text-gray-600 hover:text-gray-900">
                                        Preguntas Frecuentes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/recursos/glosario" className="text-gray-600 hover:text-gray-900">
                                        Glosario
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
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;