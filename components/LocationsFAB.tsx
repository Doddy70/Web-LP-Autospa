"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
    {
        id: 1,
        name: "Autospa Pluit",
        address: "Jl. Pluit Karang Ayu Barat No 16 Jakarta Utara, 14440",
        phone: "0877 1777 3888",
        map: "https://maps.google.com/?q=Autospa+Pluit+Jakarta"
    },
    {
        id: 2,
        name: "Autospa Depok 2",
        address: "Jl. Kemakmuran Raya No.12, Mekar Jaya, Depok",
        phone: "0812 2220 0430",
        map: "https://maps.google.com/?q=Autospa+Depok+2"
    },
    {
        id: 3,
        name: "Autospa Express Depok",
        address: "Jl. Margonda No.268, Kemiri Muka, Beji, Depok",
        phone: "0838 7011 4344",
        map: "https://maps.google.com/?q=Autospa+Express+Depok"
    },
    {
        id: 4,
        name: "Autospa PIK 2",
        address: "Distrik Otomotif, Jl Jendral Sudirman Blok H No.10, PIK 2",
        phone: "0813 8883 7778",
        map: "https://maps.google.com/?q=Autospa+PIK+2"
    },
    {
        id: 5,
        name: "Autospa Tangerang",
        address: "Jl. Raden Saleh, Karang Tengah, Tangerang",
        phone: "0821 7773 8882",
        map: "https://maps.google.com/?q=Autospa+Tangerang"
    },
    {
        id: 6,
        name: "Autospa Bekasi",
        address: "Jl. Taman Galaxy Raya No.295, Jaka Setia, Bekasi",
        phone: "0822 8888 1810",
        map: "https://maps.google.com/?q=Autospa+Bekasi"
    },
    {
        id: 7,
        name: "Autospa Kranji Bekasi",
        address: "Chery Arta Bekasi, Jl. Jend. Sudirman No.1, Kranji",
        phone: "0819 3777 3888",
        map: "https://maps.google.com/?q=Autospa+Kranji+Bekasi"
    },
    {
        id: 8,
        name: "Autospa Bogor",
        address: "Jl. Raya Semplak, Semplak, Bogor Bar., Kota Bogor",
        phone: "0813 1010 823",
        map: "https://maps.google.com/?q=Autospa+Bogor"
    }
];

export default function LocationsFAB() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[90] flex items-end justify-end pointer-events-none">
            <div className="pointer-events-auto relative" ref={containerRef}>
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            layoutId="locations-fab"
                            className="bg-zinc-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden w-80 md:w-96 origin-bottom-right"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            {/* Header */}
                            <div className="bg-primary/10 p-4 border-b border-white/5 flex justify-between items-center">
                                <h3 className="text-white font-bold flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    Our Locations
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* List */}
                            <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                                {locations.map((loc) => (
                                    <div key={loc.id} className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors">
                                        <h4 className="text-white font-bold text-sm mb-1">{loc.name}</h4>
                                        <p className="text-gray-400 text-xs mb-3">{loc.address}</p>
                                        <div className="flex gap-2">
                                            <a
                                                href={`https://wa.me/${loc.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
                                            >
                                                WhatsApp
                                            </a>
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-white text-black hover:bg-gray-200 text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1"
                                            >
                                                Get Directions
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            layoutId="locations-fab"
                            onClick={() => setIsOpen(true)}
                            className="bg-primary hover:bg-white hover:text-primary text-white p-4 rounded-full shadow-lg shadow-primary/30 transition-colors flex items-center justify-center group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
