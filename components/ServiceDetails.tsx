"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: "ppf",
        label: "Paint Protection Film",
        title: "Invisible Armor",
        description: "Our Paint Protection Film (PPF) is the ultimate defense against road debris, stone chips, and scratches. Virtually invisible and self-healing.",
        features: [
            "Self-Healing Top Coat",
            "Hydrophobic & Stain Resistant",
            "10-Year Warranty against Yellowing",
            "Precision Computer-Cut Fitment"
        ],
        image: "/images/Banner-1.jpg" // Placeholder, will reuse existing banner
    },
    {
        id: "coating",
        label: "Nano Ceramic Coating",
        title: "Liquid Glass Technology",
        description: "Using TACSystem Korea's advanced formulations, our ceramic coatings bond permanently to your paint, creating a deep gloss and extreme hydrophobic properties.",
        features: [
            "9H Hardness Scratch Resistance",
            "Deep, Wet-Look Gloss",
            "Extreme Water Beading (Hydrophobic)",
            "UV & Oxidation Protection"
        ],
        image: "/images/Banner-2.jpg" // Placeholder if exists, fallback to 1
    },
    {
        id: "detailing",
        label: "Precision Detailing",
        title: "Showroom Restoration",
        description: "Beyond just a wash. We meticulously clean, polish, and restore every inch of your vehicle's interior and exterior to better-than-new condition.",
        features: [
            "Multi-Stage Paint Correction",
            "Leather Steam Cleaning & Conditioning",
            "Engine Bay Detailing",
            "Bacteria & Odor Removal"
        ],
        image: "/images/Banner-1.jpg"
    }
];

export default function ServiceDetails() {
    const [activeTab, setActiveTab] = useState(services[0]);

    return (
        <section className="py-24 bg-zinc-900 relative">
            <div className="container mx-auto px-6">

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveTab(service)}
                            className={`relative px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 ${activeTab.id === service.id
                                    ? "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
                                }`}
                        >
                            {service.label}
                            {activeTab.id === service.id && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute inset-0 rounded-full border-2 border-primary opacity-0"
                                // Hidden border but keeps layout consistent if needed
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {activeTab.title}
                            </h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                {activeTab.description}
                            </p>

                            <ul className="space-y-4">
                                {activeTab.features.map((feature, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 text-gray-200"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <span className="text-lg">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <button className="mt-12 px-8 py-3 border border-white/20 hover:border-primary text-white hover:text-primary rounded-full transition-colors uppercase tracking-widest text-sm font-bold">
                                View Full Specifications
                            </button>
                        </div>

                        {/* Image Visual */}
                        <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group">
                            <img
                                src={activeTab.image}
                                alt={activeTab.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            {/* Decorative Elements */}
                            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
                                <span className="text-white font-bold block">TACSystem Certified</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
