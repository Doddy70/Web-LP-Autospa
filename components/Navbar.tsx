"use client";

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import LocationsModal from './LocationsModal';

const NavigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Works', href: '/our-works' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
                <motion.nav
                    layout
                    initial={{ width: "100%", borderRadius: "0px", y: 0, backgroundColor: "rgba(0,0,0,0)" }}
                    animate={{
                        width: isScrolled ? "auto" : "100%",
                        borderRadius: isScrolled ? "50px" : "0px",
                        y: 0,
                        backgroundColor: isScrolled ? "rgba(20, 20, 20, 0.6)" : "rgba(0,0,0,0)",
                        border: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0)",
                        padding: isScrolled ? "10px 30px" : "24px 40px",
                        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "blur(0px) saturate(100%)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className={`pointer-events-auto flex items-center justify-between mx-auto max-w-[90%] md:max-w-7xl backdrop-blur-md`}
                    style={{
                        minWidth: isScrolled ? "min(90%, 800px)" : "100%",
                    }}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt="AutoSpa Jkt"
                            className="h-10 md:h-14 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NavigationItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5 active:scale-95 duration-200 uppercase tracking-wider"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA - Contact Modal Trigger */}
                    <div>
                        <motion.button
                            onClick={() => setIsLocationsOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-white hover:text-primary transition-colors ${isScrolled ? 'shadow-lg shadow-primary/20' : ''}`}
                        >
                            Our Location
                        </motion.button>
                    </div>
                </motion.nav>
            </div>

            {/* Locations Modal (Outside the motion.nav) */}
            <LocationsModal isOpen={isLocationsOpen} onClose={() => setIsLocationsOpen(false)} />
        </>
    );
}
