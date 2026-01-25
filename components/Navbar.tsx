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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                            className="h-20 md:h-24 w-auto object-contain"
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

                    {/* Actions Group */}
                    <div className="flex items-center gap-3">
                        {/* CTA - Contact Modal Trigger */}
                        <motion.button
                            onClick={() => setIsLocationsOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-white hover:text-primary transition-colors ${isScrolled ? 'shadow-lg shadow-primary/20' : ''}`}
                        >
                            Our Location
                        </motion.button>

                        {/* Mobile Menu Button - Moved after "Our Location" */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`md:hidden px-4 py-2 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/5 flex items-center gap-2`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                            <span className="hidden sm:inline">Menu</span>
                        </motion.button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <div className="fixed inset-0 z-[60] pointer-events-none">
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-y-0 right-0 w-full sm:w-80 bg-zinc-900 border-l border-white/10 shadow-2xl pointer-events-auto flex flex-col h-full"
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <span className="text-xl font-bold text-white">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto py-6 px-4">
                        <div className="flex flex-col gap-2">
                            {NavigationItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-3 text-lg font-medium text-white opacity-100 relative z-10 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Menu Footer */}
                    <div className="p-6 border-t border-white/5">
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsLocationsOpen(true);
                            }}
                            className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-colors flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            Find Our Location
                        </button>
                    </div>
                </motion.div>

                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            </div>

            {/* Locations Modal (Outside the motion.nav) */}
            <LocationsModal isOpen={isLocationsOpen} onClose={() => setIsLocationsOpen(false)} />
        </>
    );
}
