"use client";

import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title}) => {
    return (
        <div className="bg-gray-100 hover:bg-gray-200 p-8 rounded-lg shadow-md transition duration-300">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                    {title}
                </h3>
                <span className="text-gray-600">→</span>
            </div>
        </div>
    );
};

const ServiceCards: React.FC = () => {
    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/auditoria-financiera">
                        <ServiceCard title="Auditoría Financiera" href="/auditoria-financiera" />
                    </Link>

                    <Link href="/consultoria-fiscal">
                        <ServiceCard title="Consultoría Fiscal" href="/consultoria-fiscal" />
                    </Link>

                    <Link href="/asesoria-empresarial">
                        <ServiceCard title="Asesoría Empresarial" href="/asesoria-empresarial" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;