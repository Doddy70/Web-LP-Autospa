import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import OurTeam from '@/components/OurTeam';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - AutoSpa Jakarta',
    description: 'Learn about our philosophy, our Korean TACSystem technology, and our dedication to automotive perfection.',
};

const locations = [
    { name: "Pluit, Jakarta Utara", address: "Jl. Pluit Karang Ayu Barat No 16 Jakarta Utara, 14440", map: "https://maps.app.goo.gl/pMRbTdSVyh2BH3S59" },
    { name: "Autospa Depok 2", address: "Jl. Kemakmuran Raya No.12, Mekar Jaya, Kec. Sukmajaya, Kota Depok", map: "https://maps.app.goo.gl/nkbktW8BnCCTp4vZ8" },
    { name: "AutoSpa Express Depok", address: "Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji, Kota Depok", map: "https://maps.app.goo.gl/QnnFRnatnX44su2ZA" },
    { name: "Autospa PIK2", address: "Distrik Otomotif, Jl Jendral Sudirman Blok H No.10, Salembaran", map: "https://maps.app.goo.gl/QZfqHZ5ntCK1fXku7" },
    { name: "AutoSpa Bekasi", address: "Jl. Taman Galaxy Raya No.295, Jaka Setia, Kec. Bekasi Sel., Kota Bekasi", map: "https://maps.app.goo.gl/wjVMG6vhvJaGdaBT8" },
    { name: "Autospa Tangerang", address: "Jl. Raden Saleh, Karang Tengah, Kec. Karang Tengah, Kota Tangerang", map: "https://maps.app.goo.gl/6AH3apBjoGyBoyzp8" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Hero Section - Client Component with Animation */}
            <AboutHero />

            {/* Philosophy & Intro */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        {/* Box 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14">
                            <h2 className="text-3xl font-bold text-white mb-6">Our Standard</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                We use the best products for Indonesia weather, especially Jadetabek.
                                We provide <span className="text-primary">Paint Protection Film</span>,
                                <span className="text-primary"> Nano Ceramic Coating</span>, and full
                                Interior/Exterior Detailing using <strong>TACSystem from Korea</strong>.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
                                <p className="text-gray-300 leading-relaxed text-lg italic">
                                    "Detailing requires technical knowledge, thoroughness, and consistency.
                                    That’s why we dedicate our time to design SOPs that are complete and easy to understand,
                                    as well as a company culture where all employees share the same philosophy."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <OurTeam />

            {/* Locations Grid */}
            <section className="py-24 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Visit Us</h2>
                        <p className="text-gray-400 mt-2">Find a workshop near you</p>
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
