import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - AutoSpa Jakarta',
    description: 'Visit our workshops in Pluit, Depok, PIK2, Bekasi, and Tangerang. Contact us for premium auto detailing services.',
};

const locations = [
    { name: "Pluit, Jakarta Utara", address: "Jl. Pluit Karang Ayu Barat No 16 Jakarta Utara, 14440", map: "https://maps.app.goo.gl/pMRbTdSVyh2BH3S59", phone: "0877 1777 3888" },
    { name: "Autospa Depok 2", address: "Jl. Kemakmuran Raya No.12, Mekar Jaya, Kec. Sukmajaya, Kota Depok", map: "https://maps.app.goo.gl/nkbktW8BnCCTp4vZ8", phone: "" },
    { name: "AutoSpa Express Depok", address: "Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok", map: "https://maps.app.goo.gl/QnnFRnatnX44su2ZA", phone: "" },
    { name: "Autospa PIK2", address: "Distrik Otomotif, Jl Jendral Sudirman Blok H No.10, Salembaran", map: "https://maps.app.goo.gl/QZfqHZ5ntCK1fXku7", phone: "" },
    { name: "AutoSpa Bekasi", address: "Jl. Taman Galaxy Raya No.295, Jaka Setia, Kec. Bekasi Sel., Kota Bekasi", map: "https://maps.app.goo.gl/wjVMG6vhvJaGdaBT8", phone: "" },
    { name: "Autospa Tangerang", address: "Jl. Raden Saleh, Karang Tengah, Kec. Karang Tengah, Kota Tangerang", map: "https://maps.app.goo.gl/6AH3apBjoGyBoyzp8", phone: "" },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Hero Section with Map Background */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Dark Mode Map Embed */}
                <div className="absolute inset-0 z-0">
                    <iframe
                        src="https://maps.google.com/maps?q=AutoSpa%20Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(80%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AutoSpa Jakarta Map Highlight"
                        className="opacity-60"
                    />
                    {/* Gradient Overlay to fade into body */}
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/60 to-dark" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-4 bg-black/50 backdrop-blur-md inline-block px-4 py-1 rounded-full border border-white/10">Contact Us</h3>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 drop-shadow-xl">
                            Get In <span className="italic text-gray-300">Touch</span>.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Contact Info Cards */}
            <section className="pb-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {/* WhatsApp / Phone */}
                        <a href="https://wa.me/6281937773888" target="_blank" className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-gray-400 text-sm">Chat for Consultation</p>
                            <span className="text-primary font-bold mt-2 block">+62 819-3777-3888</span>
                        </a>

                        {/* Opening Hours */}
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                            <p className="text-gray-400 text-sm">Professional Service Daily</p>
                            <span className="text-white font-bold mt-2 block">08.00 - 18.00</span>
                        </div>

                        {/* Email */}
                        <a href="mailto:info@autospajakarta.com" className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                            <p className="text-gray-400 text-sm">For partnerships & info</p>
                            <span className="text-primary font-bold mt-2 block">info@autospajakarta.com</span>
                        </a>

                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Our Workshops</h2>
                        <p className="text-gray-400 mt-2">Visit the nearest studio for an inspection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locations.map((loc, idx) => (
                            <a
                                key={idx}
                                href={loc.map}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
                            >
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{loc.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{loc.address}</p>
                                <span className="text-primary text-sm font-bold flex items-center gap-2">
                                    Get Directions
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
