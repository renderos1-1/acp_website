"use client";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        // Close mobile menu if open
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }

        // If we're not on the homepage, navigate to homepage first
        if (pathname !== '/') {
            router.push(`/#${sectionId}`);
            return;
        }

        // If we're on the homepage, scroll to the section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('home')}
                        className="flex items-center cursor-pointer"
                    >
                        {/* Logo Image */}
                        <div className="relative h-12 w-auto mr-3">
                            <img
                                src="/images/logo/logo-acp.png"
                                alt="CAÑAS Auditores y Consultores Logo"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        {/* Text next to logo */}
                        <div>
                            <span className="text-xl font-bold text-gray-800">CAÑAS</span>
                            <span className="ml-2 text-base text-gray-600">Auditores y Consultores</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Quiénes Somos
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Servicios
                        </button>
                        <button
                            onClick={() => scrollToSection('mission-vision')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Misión y Visión
                        </button>
                        <button
                            onClick={() => scrollToSection('experts')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Nuestro Equipo
                        </button>
                        <button
                            onClick={() => scrollToSection('news')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Noticias
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 hover:text-gray-900 font-medium"
                        >
                            Contacto
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="container mx-auto px-4 py-3">
                        <nav className="flex flex-col space-y-3">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Inicio
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Quiénes Somos
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Servicios
                            </button>
                            <button
                                onClick={() => scrollToSection('mission-vision')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Misión y Visión
                            </button>
                            <button
                                onClick={() => scrollToSection('experts')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Nuestro Equipo
                            </button>
                            <button
                                onClick={() => scrollToSection('news')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Noticias
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-left text-gray-700 hover:text-gray-900 py-2 font-medium"
                            >
                                Contacto
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;