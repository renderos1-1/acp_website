"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Expert {
    name: string;
    position: string;
    description: string;
    imageUrl: string;
}

const CompactVerticalExpertCard: React.FC<{ expert: Expert }> = ({ expert }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section - Compact size */}
            <div className="relative w-full h-64">
                <Image
                    src={expert.imageUrl}
                    alt={expert.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{expert.name}</h3>
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">{expert.position}</p>

                {/* Description - Always visible */}
                <div className={`mt-4 transition-all duration-300 ease-in-out ${
                    isHovered ? 'opacity-100' : 'opacity-70'
                }`}>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                        {expert.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ExpertsSection: React.FC = () => {
    const experts: Expert[] = [
        {
            name: "LIC. LUIS ARMANDO ESCOBAR ANZORA",
            position: "SOCIO",
            description: "Licenciado en Contaduría Pública de la Universidad Nacional El Salvador, Auditor autorizado por el Consejo de Vigilancia de la Contaduría Pública y Auditoria, especialista certificado en la Ley de Lavado de Dinero y Activos, entre otros.\n\nProfesional que cuenta con más de 25 años de experiencia en materia de auditoría financiera, auditoría fiscal, auditoría forense y consultoría empresarial.",
            imageUrl: "/images/team/luis-escobar.jpg"
        },
        {
            name: "LIC. DORE ALEXANDER PEREZ PABLO",
            position: "SOCIO",
            description: "Licenciado en Contaduría Pública con especialización en Auditoría Financiera y Fiscal de la Universidad Tecnológica de El Salvador, Contador y Auditor autorizado por el Consejo de Vigilancia de la Contaduría Pública y Auditoria, especialista certificado en la Ley de Lavado de Dinero y Activos.\n\nProfesional que cuenta con más de 30 años de experiencia en materia de contabilidad, impuestos, auditoría financiera y auditoría fiscal.",
            imageUrl: "/images/team/dore-perez.jpg"
        },
        {
            name: "LIC. ENRIQUE CAÑAS JIMENEZ",
            position: "ASESOR",
            description: "Tiene una carrera de más de 35 años a nivel nacional e internacional, ha ocupado importantes cargos de alto nivel en instituciones como Banco Mundial, Banco Interamericano de Desarrollo (BID), IDB Invest (jefe de División, Instituciones Financieras), MBA Lazard, Banco Uno (Gerente General), Grupo Roble Internacional, Banco Agrícola y Ernst & Young; destacando en el área de cumplimiento a la Ley de Lavado de Dinero y Activos.\n\nLicenciatura en Finanzas y Contabilidad de la Universidad de Boston y Contador Público Certificado (CPA) de la Universidad Estatal de Nueva York.",
            imageUrl: "/images/team/enrique-canas.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                    Nuestros Expertos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {experts.map((expert, index) => (
                        <CompactVerticalExpertCard key={index} expert={expert} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/quienes-somos">
                        <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-none transition duration-300 font-medium">
                            Ver Todos Nuestros Expertos
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;