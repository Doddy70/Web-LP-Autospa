"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesQuality() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section id="services" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Centered Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Welcome To <span className="text-primary">AUTOSPA</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image (Trigger for Video) */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={() => setIsVideoOpen(true)}
                            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group cursor-pointer aspect-video w-full"
                        >
                            {/* Static Image */}
                            <img
                                src="/images/Banner-1.jpg"
                                alt="Autospa Services"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50 shadow-lg"
                                >
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Our Services & Quality
                            </h3>

                            <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">
                                We always keep up with the times and use the best products for Indonesia weather, especially Jabodetabek. Until now we provide Paint Protection Film, Nano Ceramic Coating, Exterior, Interior and Exterior Detailing using TACSystem from Korea.
                            </p>

                            <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-primary/25">
                                Our Services &gt;
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        {/* Video Player Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ZY9gYu6Q4_Y?autoplay=1"
                                title="AutoSpa Experience"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
