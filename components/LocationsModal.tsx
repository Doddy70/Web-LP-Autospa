"use client";

import React, { useEffect } from 'react';
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

interface LocationsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LocationsModal({ isOpen, onClose }: LocationsModalProps) {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none p-4">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="bg-[#18181b] w-full max-w-4xl max-h-[85dvh] rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col border border-white/10"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-zinc-900/50">
                                <div>
                                    <h2 className="text-3xl font-serif text-white mb-2">Our Workshops</h2>
                                    <p className="text-gray-400">Find the Autospa location nearest to you.</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Scrollable List */}
                            <div className="overflow-y-auto p-6 md:p-8 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {locations.map((loc) => (
                                        <div key={loc.id} className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-colors border border-white/5 hover:border-white/10 group">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{loc.name}</h3>
                                            <p className="text-gray-400 text-sm mb-6 h-10">{loc.address}</p>

                                            <div className="flex gap-3">
                                                <a
                                                    href={`https://wa.me/${loc.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-green-600/20 hover:bg-green-600 text-green-500 hover:text-white border border-green-600/30 hover:border-green-600 py-3 rounded-xl transition-all font-bold text-sm flex items-center justify-center gap-2"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                                                    </svg>
                                                    WhatsApp
                                                </a>
                                                <a
                                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 py-3 rounded-xl transition-all font-bold text-sm flex items-center justify-center gap-2"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                    Route
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
