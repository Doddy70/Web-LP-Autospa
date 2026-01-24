"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Core Services Data
const galleryItems = [
    {
        id: 1,
        title: "Premium Wash",
        subtitle: "The Foundation of Care",
        description: "A car wash service that uses high-quality products and procedures to thoroughly clean the car, both exterior and interior.",
        src: "/images/services/Premium Wash.jpg",
        price: "Start from Rp. 300k",
        treatments: ["Light Detox", "Full Detox", "Undercarriage Wash"]
    },
    {
        id: 2,
        title: "Premium Detailing",
        subtitle: "Showroom Restoration",
        description: "We provide a Premium Service & produce Premium Results. Meticulously restoring every inch of your vehicle.",
        src: "/images/services/Premium Detailing.jpg",
        price: "Start from Rp. 7.000k",
        treatments: ["Interior Detailing", "Exterior Detailing", "Full Detailing"]
    },
    {
        id: 3,
        title: "Nano Ceramic Coating",
        subtitle: "Ultimate Gloss & Protection",
        description: "Bonding permanently to your paint, creating a deep gloss and extreme hydrophobic properties.",
        src: "/images/services/Coating.jpg",
        price: "Start from Rp. 3.000k",
        treatments: ["Light Package", "Bronze Package", "Silver Package"]
    },
    {
        id: 4,
        title: "Premium 360° PPF",
        subtitle: "Invisible Armor",
        description: "Wrapping the entire exterior of a vehicle with a clear, self-healing film to protect the paint from various types of damage.",
        src: "/images/services/PPF.jpg",
        price: "Start from Rp. 15.000k",
        treatments: ["Daily PPF", "Premium PPF", "Ultimate PPF"]
    },
];

export default function Gallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedId) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [selectedId]);

    return (
        <section id="gallery" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Signature Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">The four pillars of automotive perfection.</p>
                </div>

                {/* Carousel Container */}
                <div className="overflow-x-auto pb-12 hide-scrollbar">
                    <div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-0">
                        {galleryItems.map((item) => (
                            <motion.div
                                layoutId={`card-container-${item.id}`}
                                key={item.id}
                                onClick={() => setSelectedId(item.id)}
                                className="relative w-[300px] md:w-[350px] h-[450px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Image Background */}
                                <motion.img
                                    layoutId={`card-image-${item.id}`}
                                    src={item.src}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Card Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8">
                                    <motion.p
                                        layoutId={`card-subtitle-${item.id}`}
                                        className="text-primary text-xs font-bold uppercase tracking-widest mb-2"
                                    >
                                        {item.subtitle}
                                    </motion.p>
                                    <motion.h3
                                        layoutId={`card-title-${item.id}`}
                                        className="text-3xl font-serif font-bold text-white mb-4"
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-primary group-hover:border-primary transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Expanding Modal */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                            />

                            {/* Modal Card */}
                            {galleryItems.map((item) => {
                                if (item.id !== selectedId) return null;
                                return (
                                    <motion.div
                                        layoutId={`card-container-${item.id}`}
                                        key={item.id}
                                        className="relative w-full max-w-4xl h-[85dvh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto border border-white/10"
                                    >
                                        {/* Left: Image Area */}
                                        <div className="relative w-full md:w-1/2 h-64 md:h-full">
                                            <motion.img
                                                layoutId={`card-image-${item.id}`}
                                                src={item.src}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/20" />

                                            {/* Close Button Mobile */}
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="absolute top-4 right-4 md:hidden p-2 bg-black/50 text-white rounded-full z-20"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Right: Content Area */}
                                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                                            {/* Close Button Desktop */}
                                            <button
                                                onClick={() => setSelectedId(null)}
                                                className="self-end hidden md:block p-2 text-gray-400 hover:text-white transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                            <div className="mt-4 md:mt-0">
                                                <motion.p
                                                    layoutId={`card-subtitle-${item.id}`}
                                                    className="text-primary text-sm font-bold uppercase tracking-widest mb-3"
                                                >
                                                    {item.subtitle}
                                                </motion.p>
                                                <motion.h3
                                                    layoutId={`card-title-${item.id}`}
                                                    className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                                                >
                                                    {item.title}
                                                </motion.h3>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                                        {item.description}
                                                    </p>

                                                    {/* Treatments List */}
                                                    <div className="mb-8">
                                                        <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Includes:</h4>
                                                        <ul className="space-y-3">
                                                            {item.treatments.map((treatment, i) => (
                                                                <li key={i} className="flex items-center text-gray-400 text-sm">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                                                                    {treatment}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Price & Action */}
                                                    <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
                                                        <div className="flex items-baseline gap-2">
                                                            <span className="text-gray-400 text-sm">Starting form</span>
                                                            <span className="text-2xl text-white font-bold">{item.price}</span>
                                                        </div>

                                                        <a
                                                            href={`https://api.whatsapp.com/send/?phone=6281937773888&text=halo+admin+saya+mau+booking+untuk+${encodeURIComponent(item.title)}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all text-center"
                                                        >
                                                            Book Appointment
                                                        </a>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
