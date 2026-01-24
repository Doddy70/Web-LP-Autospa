"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function GetInTouch() {
    return (
        <section className="py-20 bg-dark">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
                >
                    {/* Main Title */}
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="text-5xl md:text-8xl font-sans font-medium text-white tracking-tight">
                            GET IN TOUCH
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

                        {/* Left Side: Quote */}
                        <div className="max-w-md">
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                                It would be delighted to <br />
                                help you make aesthetics vehicles <br />
                                to blemish-free condition again
                            </p>
                        </div>

                        {/* Right Side: Contact Info */}
                        <div className="flex flex-col items-center md:items-end gap-6">
                            {/* Phone */}
                            <a href="https://wa.me/6281937773888" className="text-3xl md:text-4xl text-white font-light hover:text-primary transition-colors">
                                +62 819 3777 3888
                            </a>

                            {/* Email */}
                            <a href="mailto:info@autospajakarta.com" className="text-white hover:text-primary transition-colors">
                                info@autospajakarta.com
                            </a>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3 mt-4">
                                {[
                                    { icon: <InstagramIcon />, href: "https://www.instagram.com/autospajakarta/" },
                                    { icon: <FacebookIcon />, href: "https://www.facebook.com/autospa.id.official" },
                                    { icon: <TiktokIcon />, href: "https://www.tiktok.com/@autospa.official" },
                                    { icon: <YoutubeIcon />, href: "https://www.youtube.com/@AutospaOfficial" }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Icons
function InstagramIcon() {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path></svg>
    )
}

function FacebookIcon() {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
    )
}

function TiktokIcon() {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"></path></svg>
    )
}

function YoutubeIcon() {
    return (
        <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"></path></svg>
    )
}
