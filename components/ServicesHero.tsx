"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
    return (
        <section className="relative min-h-[80dvh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
            {/* 1. Background Glow/Gradient */}
            <div className="absolute inset-0 bg-dark z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Background Pattern/Texture overlay */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Text Reveal */}
                <div className="text-center mb-12 relative z-30">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6 inline-block"
                    >
                        Our Expertise
                    </motion.h3>

                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-sans font-bold text-white tracking-tight leading-none mb-6"
                    >
                        {["ENGINEERED", "PROTECTION"].map((word, i) => (
                            <div key={i} className="overflow-hidden">
                                <motion.div
                                    variants={{
                                        hidden: { y: "100%" },
                                        visible: {
                                            y: 0,
                                            transition: {
                                                delay: i * 0.1,
                                                duration: 0.8,
                                                ease: [0.2, 0.65, 0.3, 0.9]
                                            }
                                        }
                                    }}
                                >
                                    {word}
                                </motion.div>
                            </div>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Precision detailing powered by Korean TACSystem technology.
                        <br className="hidden md:block" />
                        Designed to withstand Jakarta's toughest conditions.
                    </motion.p>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Explore</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
                    />
                </motion.div>

            </div>
        </section>
    );
}
