"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaArrowRight } from 'react-icons/fa';

// Define the service options for the dropdown
const serviceOptions = [
    { value: "", label: "Seleccione un servicio" },
    { value: "auditoria-financiera", label: "Auditoría Financiera" },
    { value: "auditoria-fiscal", label: "Auditoría Fiscal" },
    { value: "auditoria-forense", label: "Auditoría Forense" },
    { value: "auditoria-lav", label: "Auditoría para Cumplimiento de LAV" },
    { value: "precios-transferencia", label: "Estudios de Precios de Transferencia" },
    { value: "consultoria", label: "Asesoría y Consultoría Empresarial" },
    { value: "outsourcing", label: "Outsourcing Contable" },
    { value: "otros", label: "Otros Servicios" }
];

// Define contact reasons
const contactReasons = [
    { value: "", label: "Seleccione un motivo" },
    { value: "cotizacion", label: "Solicitar Cotización" },
    { value: "informacion", label: "Información General" },
    { value: "reunion", label: "Programar Reunión" },
    { value: "consulta", label: "Consulta Técnica" },
    { value: "otro", label: "Otro Motivo" }
];

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [contactReason, setContactReason] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    service,
                    contactReason,
                    message,
                }),
            });

            if (response.ok) {
                setFormSubmitted(true);
                // Reset form after successful submission
                setName('');
                setEmail('');
                setPhone('');
                setService('');
                setContactReason('');
                setMessage('');

                // Reset submission status after 5 seconds
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 5000);
            } else {
                const errorData = await response.json();
                setSubmitError(errorData.error || 'Error al enviar el formulario');
            }
        } catch {
            setSubmitError('Error de conexión. Por favor, intente nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="w-full">
            {/* Top Section - Contact Form */}
            <div id="contact" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-start">
                        <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
                            <h2 className="text-3xl font-bold mb-4">Contáctenos ahora</h2>
                            <p className="text-gray-300 mb-4">
                                Complete el formulario para solicitar una cotización o programar una consulta con nuestros expertos.
                            </p>
                            <ul className="space-y-3 mt-6">
                                <li className="flex items-center">
                                    <FaPhone className="text-gray-400 mr-3" size={16} />
                                    <span className="text-gray-300">2263-3115 / 2263-3263</span>
                                </li>
                                <li className="flex items-center">
                                    <FaEnvelope className="text-gray-400 mr-3" size={16} />
                                    <a href="mailto:info@acp-audicon.com" className="text-gray-300 hover:text-white">
                                        info@acp-audicon.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="md:w-1/2">
                            {formSubmitted ? (
                                <div className="bg-green-600 text-white p-4 rounded">
                                    ¡Gracias por contactarnos! Hemos recibido su mensaje y nos comunicaremos con usted pronto.
                                </div>
                            ) : (
                                <>
                                    {submitError && (
                                        <div className="bg-red-600 text-white p-4 rounded mb-4">
                                            {submitError}
                                        </div>
                                    )}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="text"
                                            placeholder="Nombre completo *"
                                            className="md:w-1/2 p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder="Correo electrónico *"
                                            className="md:w-1/2 p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <input
                                            type="tel"
                                            placeholder="Teléfono"
                                            className="md:w-1/2 p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <select
                                            className="md:w-1/2 p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                            value={contactReason}
                                            onChange={(e) => setContactReason(e.target.value)}
                                            required
                                        >
                                            {contactReasons.map((reason) => (
                                                <option key={reason.value} value={reason.value}>
                                                    {reason.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <select
                                        className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        required
                                    >
                                        {serviceOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                    <textarea
                                        placeholder="Mensaje (opcional)"
                                        className="w-full p-3 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-white"
                                        rows={3}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                    <div className="w-full flex items-center">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed text-gray-900 font-medium rounded transition-colors duration-300"
                                        >
                                            {isSubmitting ? 'Enviando...' : 'Contactar'}
                                            {!isSubmitting && <FaArrowRight className="ml-2" />}
                                        </button>
                                    </div>
                                </form>
                                </>
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
                                <li>
                                    <span className="text-gray-400 cursor-not-allowed">
                                        Preguntas Frecuentes
                                    </span>
                                    <span className="text-xs text-gray-400 block">(Próximamente)</span>
                                </li>
                                <li>
                                    <span className="text-gray-400 cursor-not-allowed">
                                        Glosario
                                    </span>
                                    <span className="text-xs text-gray-400 block">(Próximamente)</span>
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