"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative min-h-[90dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
            {/* 1. Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* 2. Text Reveal (Blur Stagger) */}
                <div className="text-center mb-16 relative z-30">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-6 inline-block"
                    >
                        Who We Are
                    </motion.h3>

                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-sans font-bold text-white tracking-tight leading-tight"
                    >
                        {["Passionate", "About", "Perfection."].map((word, i) => (
                            <span key={i} className="inline-block mx-2 md:mx-4">
                                <motion.span
                                    custom={i}
                                    variants={{
                                        hidden: { y: 20, opacity: 0, filter: "blur(10px)", scale: 1.1 },
                                        visible: (i) => ({
                                            y: 0,
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            scale: 1,
                                            transition: {
                                                delay: i * 0.15,
                                                duration: 0.8,
                                                ease: [0.2, 0.65, 0.3, 0.9]
                                            }
                                        })
                                    }}
                                    className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent"
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mt-8"
                    >
                        The best products for Indonesia's weather, delivered with Korean precision.
                    </motion.p>
                </div>

                {/* 3. Image Fan Stack */}
                <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex justify-center items-center mt-4">
                    {/* Card 1 (Left Tilt) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -12, x: -220 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                        className="absolute w-64 h-80 md:w-80 md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 bg-zinc-900 origin-bottom-right"
                    >
                        <img src="/images/teams/Adit.png" alt="Team 1" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="text-white font-bold block text-lg">Adit</span>
                            <span className="text-gray-400 text-sm uppercase tracking-wider">Detailer</span>
                        </div>
                    </motion.div>

                    {/* Card 2 (Right Tilt) */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotate: 0 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 12, x: 220 }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                        className="absolute w-64 h-80 md:w-80 md:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 bg-zinc-900 origin-bottom-left"
                    >
                        <img src="/images/teams/ABun.png" alt="Team 2" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="text-white font-bold block text-lg">Abun</span>
                            <span className="text-gray-400 text-sm uppercase tracking-wider">Coating</span>
                        </div>
                    </motion.div>

                    {/* Card 3 (Center Main) */}
                    <motion.div
                        initial={{ opacity: 0, y: 120, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: -40, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="absolute w-72 h-96 md:w-[360px] md:h-[480px] rounded-[2.5rem] overflow-hidden border-4 border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 bg-zinc-800"
                    >
                        <img src="/images/teams/Pungki.png" alt="Founder" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-3xl text-white font-bold block">Pungki Y.</span>
                                <div className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Founder</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2">"Detailing requires technical knowledge and consistency."</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
