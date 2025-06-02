"use client";

import React from 'react';
import Link from 'next/link';

interface Expert {
    name: string;
    position: string;
    description: string[];
    imageUrl: string;
}

const ExpertProfile: React.FC<{ expert: Expert }> = ({ expert }) => {
    return (
        <div className="bg-white p-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Image on the left */}
                <div className="md:w-1/4 lg:w-1/5">
                    <div className="aspect-[3/4] overflow-hidden">
                        <img
                            src={expert.imageUrl}
                            alt={expert.name}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Content on the right */}
                <div className="md:w-3/4 lg:w-4/5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                    <p className="text-gray-800 text-lg font-medium mb-4">{expert.position}</p>

                    {/* Description paragraphs */}
                    <div className="text-gray-800">
                        {expert.description.map((paragraph, idx) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExpertsSection: React.FC = () => {
    const experts: Expert[] = [
        {
            name: "LUIS ARMANDO ESCOBAR ANZORA",
            position: "SOCIO",
            description: [
                "Licenciado en Contaduría Pública de la Universidad Nacional El Salvador, Auditor autorizado por el Consejo de Vigilancia de la Contaduría Pública y Auditoria, especialista certificado en la Ley de Lavado de Dinero y Activos, entre otros.",
                "Profesional que cuenta con más de 25 años de experiencia en materia de auditoría financiera, auditoría fiscal, auditoría forense y consultoría empresarial."
            ],
            imageUrl: "/images/team/luis-anzora.jpg"
        },
        {
            name: "DORE ALEXANDER PEREZ PABLO",
            position: "SOCIO",
            description: [
                "Licenciado en Contaduría Pública con especialización en Auditoría Financiera y Fiscal de la Universidad Tecnológica de El Salvador, Contador y Auditor autorizado por el Consejo de Vigilancia de la Contaduría Pública y Auditoria, especialista certificado en la Ley de Lavado de Dinero y Activos.",
                "Profesional que cuenta con más de 30 años de experiencia en materia de contabilidad, impuestos, auditoría financiera y auditoría fiscal."
            ],
            imageUrl: "/images/team/dore-perez.jpg"
        },
        {
            name: "ENRIQUE CAÑAS JIMENEZ",
            position: "ASESOR",
            description: [
                "Tiene una carrera de más de 35 años a nivel nacional e internacional, ha ocupado importantes cargos de alto nivel en instituciones como Banco Mundial, Banco Interamericano de Desarrollo (BID), IDB Invest (jefe de División, Instituciones Financieras), MBA Lazard, Banco Uno (Gerente General), Grupo Roble Internacional, Banco Agrícola y Ernst & Young; destacando en el área de cumplimiento a la Ley de Lavado de Dinero y Activos.",
                "Licenciatura en Finanzas y Contabilidad de la Universidad de Boston y Contador Público Certificado (CPA) de la Universidad Estatal de Nueva York."
            ],
            imageUrl: "/images/team/enrique-canas.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Nuestros Socios
                </h2>

                <div className="bg-white shadow-md">
                    {experts.map((expert, index) => (
                        <ExpertProfile key={index} expert={expert} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ExpertsSection;