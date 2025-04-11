"use client";

import React from 'react';
import Link from 'next/link';

interface ExpertCardProps {
    name: string;
    position: string;
    quote: string;
    imageUrl: string;
    reversed?: boolean;
}

const ExpertCard: React.FC<ExpertCardProps> = ({ name, position, quote, imageUrl, reversed = false }) => {
    return (
        <div className={`relative bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md ${reversed ? 'md:flex-row-reverse' : ''}`}>
            <div className="p-6 md:p-8">
                <p className="text-gray-700 mb-6 text-base leading-relaxed">"{quote}"</p>
                <div className="flex items-center">
                    <div className={`flex ${reversed ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`${reversed ? 'md:ml-4' : 'mr-4'}`}>
                            <p className="font-semibold text-gray-800">{name}</p>
                            <p className="text-sm text-gray-500">{position}</p>
                        </div>
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${imageUrl})`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Subtle peach border on one side */}
            <div className={`absolute top-0 ${reversed ? 'left-0' : 'right-0'} w-2 h-full bg-orange-100`}></div>
        </div>
    );
};

const ExpertsSection: React.FC = () => {
    const experts = [
        {
            name: "Christopher Davidson",
            position: "CEO / Co-Founder",
            quote: "Find solutions and insights in our easy-to access resources, from articles, reports and FAQs, to videos, checklists and guides.",
            imageUrl: "/api/placeholder/200/200"
        },
        {
            name: "Elizabeth Hamilton",
            position: "Accounting Advisor",
            quote: "Find solutions and insights in our easy-to access resources, from articles, reports and FAQs, to videos, checklists and guides.",
            imageUrl: "/api/placeholder/200/200"
        },
        {
            name: "Edward Campbell",
            position: "Financial Trainer",
            quote: "Find solutions and insights in our easy-to access resources, from articles, reports and FAQs, to videos, checklists and guides.",
            imageUrl: "/api/placeholder/200/200"
        },
        {
            name: "Jonathan Hodges",
            position: "Financial Advisor",
            quote: "Find solutions and insights in our easy-to access resources, from articles, reports and FAQs, to videos, checklists and guides.",
            imageUrl: "/api/placeholder/200/200"
        }
    ];

    return (
        <section className="w-full py-16 bg-white relative overflow-hidden">
            {/* Decorative dots pattern - left side */}
            <div className="hidden md:block absolute left-0 top-0 w-1/6 h-full">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(150)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
                    ))}
                </div>
            </div>

            {/* Decorative dots pattern - right side */}
            <div className="hidden md:block absolute right-0 bottom-0 w-1/6 h-full">
                <div className="grid grid-cols-10 gap-2 h-full w-full p-4">
                    {[...Array(150)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-200"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row mb-12">
                    {/* Left side - Title and button */}
                    <div className="md:w-1/3 mb-12 md:mb-0">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                            Our experts with their statements & promises
                        </h2>
                        <Link href="/quienes-somos">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-none transition duration-300 inline-flex items-center text-sm font-medium">
                                View Our All Experts
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Expert cards in specific layout */}
                    <div className="md:w-2/3 grid grid-cols-12 gap-8">
                        {/* Top row - first expert (Christopher) - spans 9 columns on the left */}
                        <div className="col-span-12 md:col-span-9 md:col-start-1">
                            <div className="relative">
                                <ExpertCard
                                    name={experts[0].name}
                                    position={experts[0].position}
                                    quote={experts[0].quote}
                                    imageUrl={experts[0].imageUrl}
                                />
                                {/* Peach background accent */}
                                <div className="absolute -right-2 -bottom-2 w-full h-full bg-orange-50 -z-10"></div>
                            </div>
                        </div>

                        {/* Second row - second expert (Elizabeth) - spans 9 columns on the left */}
                        <div className="col-span-12 md:col-span-9 md:col-start-1 md:mt-8">
                            <div className="relative">
                                <ExpertCard
                                    name={experts[1].name}
                                    position={experts[1].position}
                                    quote={experts[1].quote}
                                    imageUrl={experts[1].imageUrl}
                                />
                                {/* Peach background accent */}
                                <div className="absolute -right-2 -bottom-2 w-full h-full bg-orange-50 -z-10"></div>
                            </div>
                        </div>

                        {/* Third expert (Edward) - spans 9 columns on the right side of grid, top position */}
                        <div className="col-span-12 md:col-span-9 md:col-start-4 md:mt-4">
                            <div className="relative">
                                <ExpertCard
                                    name={experts[2].name}
                                    position={experts[2].position}
                                    quote={experts[2].quote}
                                    imageUrl={experts[2].imageUrl}
                                    reversed={true}
                                />
                                {/* Peach background accent */}
                                <div className="absolute -left-2 -bottom-2 w-full h-full bg-orange-50 -z-10"></div>
                            </div>
                        </div>

                        {/* Fourth expert (Jonathan) - spans 9 columns on the right side of grid, bottom position */}
                        <div className="col-span-12 md:col-span-9 md:col-start-4 md:mt-4">
                            <div className="relative">
                                <ExpertCard
                                    name={experts[3].name}
                                    position={experts[3].position}
                                    quote={experts[3].quote}
                                    imageUrl={experts[3].imageUrl}
                                    reversed={true}
                                />
                                {/* Peach background accent */}
                                <div className="absolute -left-2 -bottom-2 w-full h-full bg-orange-50 -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertsSection;