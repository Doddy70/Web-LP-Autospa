"use client";

import React, { useState } from 'react';

export default function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        location: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, phone, service, location, message } = formData;

        // Construct the WhatsApp message
        const text = `Halo Admin Autospa, saya mau tanya/booking:
        
Nama Lengkap: ${name}
Nomer Whatsapp: ${phone}
Pilihan Treatment: ${service}
Lokasi Pengerjaan: ${location}
Pesan Tambahan: ${message}`;

        // Create the URL
        const url = `https://api.whatsapp.com/send/?phone=6281937773888&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

        // Open WhatsApp
        window.open(url, '_blank');
    };

    return (
        <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    {/* Left: Info */}
                    <div>
                        <img
                            src="/images/logo.png"
                            alt="AutoSpa Jkt"
                            className="h-12 w-auto object-contain mb-8"
                        />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's talk</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Ready to give your car the treatment it deserves? Contact us today to schedule your appointment.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">General Call</h4>
                                    <p className="text-gray-400">+62 819 3777 3888</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Sales/Support</h4>
                                    <p className="text-gray-400">info@autospajakarta.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Location</h4>
                                    <p className="text-gray-400">Jl. Sudirman Kav 1, Jakarta Selatan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Nama Anda"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Nomer Whatsapp</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="0812..."
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Pilihan Treatment</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" className="text-gray-500">Pilih Service</option>
                                        <option value="Premium Wash" className="text-black">Premium Wash</option>
                                        <option value="Premium Detailing" className="text-black">Premium Detailing</option>
                                        <option value="Nano Ceramic Coating" className="text-black">Nano Ceramic Coating</option>
                                        <option value="Premium 360° PPF" className="text-black">Premium 360° PPF</option>
                                        <option value="Other Treatment" className="text-black">Other Treatment</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Lokasi Pengerjaan</label>
                                    <select
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                                    >
                                        <option value="" className="text-gray-500">Pilih Lokasi</option>
                                        <option value="Autospa Pluit" className="text-black">Autospa Pluit</option>
                                        <option value="Autospa PIK 2" className="text-black">Autospa PIK 2</option>
                                        <option value="Autospa Depok 2" className="text-black">Autospa Depok 2</option>
                                        <option value="Autospa Kranji" className="text-black">Autospa Kranji</option>
                                        <option value="Autospa Tangerang" className="text-black">Autospa Tangerang</option>
                                        <option value="Autospa Bekasi" className="text-black">Autospa Bekasi</option>
                                        <option value="Autospa Bogor" className="text-black">Autospa Bogor</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Pesan Tambahan (Optional)</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Tulis pesan tambahan anda..."
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-3.5 rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-primary/20">
                                Kirim Pesan via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Autospa Jakarta. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
