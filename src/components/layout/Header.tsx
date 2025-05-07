"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            {/* Logo Image */}
                            <div className="relative h-22 w-auto mr-3">
                                <img
                                    src="/images/logo/logo-acp.png"
                                    alt="CAÑAS Auditores y Consultores Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            {/* Optional: you can keep or remove the text next to the logo */}
                            <div>
                                <span className="text-xl font-bold text-gray-800">CAÑAS</span>
                                <span className="ml-2 text-base text-gray-600">Auditores y Consultores</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
                            Inicio
                        </Link>
                        <Link href="/quienes-somos" className="text-gray-700 hover:text-gray-900 font-medium">
                            Quiénes Somos
                        </Link>
                        <Link href="/servicios" className="text-gray-700 hover:text-gray-900 font-medium">
                            Servicios
                        </Link>
                        <Link href="/noticias" className="text-gray-700 hover:text-gray-900 font-medium">
                            Noticias
                        </Link>
                        <Link href="/empleos" className="text-gray-700 hover:text-gray-900 font-medium">
                            Empleos
                        </Link>
                        <Link href="/contacto" className="text-gray-700 hover:text-gray-900 font-medium">
                            Contacto
                        </Link>
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
                            <Link href="/" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Inicio
                            </Link>
                            <Link href="/quienes-somos" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Quiénes Somos
                            </Link>
                            <Link href="/servicios" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Servicios
                            </Link>
                            <Link href="/noticias" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Noticias
                            </Link>
                            <Link href="/empleos" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Empleos
                            </Link>
                            <Link href="/contacto" className="text-gray-700 hover:text-gray-900 py-2 font-medium">
                                Contacto
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;