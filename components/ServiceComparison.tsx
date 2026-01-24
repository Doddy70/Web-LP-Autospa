"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Data Structure covering the requested categories
interface SubProduct {
    id: string;
    name: string;
    description: string;
    prices: { size: string; price: string }[];
    includes: string[];
    estimatedWork?: string;
    additional?: { name: string; prices: string }[];
}

interface Category {
    id: string;
    label: string;
    subProducts: SubProduct[];
}

const pricingData: Record<string, Category> = {
    wash: {
        id: "wash",
        label: "Premium Wash",
        subProducts: [
            {
                id: "premium",
                name: "Premium Wash",
                description: "High quality wash including Undercarriage.",
                prices: [
                    { size: "All Sizes", price: "IDR 150k" }
                ],
                includes: ["Premium Body Wash", "Undercarriage Wash", "Interior Vacuum", "Tire Dressing"],
                additional: [
                    { name: "Protection Add-ons", prices: "Shine Wax 25k | Tar Remover 50k | Paste Wax 75k | Ultimate Wax 100k | Paint Sealant 100k | Moonlight 250k | Hydrophobic 500k | Shine Coating 750k" },
                    { name: "Additional Services", prices: "Clay 125k | Engine Cleaning 250k | Glass Cleaning 250k | Undercarriage Detail 500k" },
                    { name: "Spot Polish", prices: "1 Panel 200k | Hood/Roof/Trunk 350k" }
                ]
            },
            {
                id: "detox",
                name: "Detox Wash",
                description: "Deep cleaning to remove waterspots, tar, and restore shine.",
                prices: [
                    { size: "Light Detox (S-M)", price: "IDR 300k" },
                    { size: "Light Detox (L-XL)", price: "IDR 400k" },
                    { size: "Full Detox (S-M)", price: "IDR 500k" },
                    { size: "Full Detox (L-XL)", price: "IDR 600k" }
                ],
                includes: [
                    "Premium Wash",
                    "Waterspot Remover",
                    "Tar Remover",
                    "1-Step Polish (Full Detox Only)"
                ]
            }
        ]
    },
    detailing: {
        id: "detailing",
        label: "Premium Detailing",
        subProducts: [
            {
                id: "interior",
                name: "Interior Detailing",
                description: "Deep cleaning and restoration of your vehicle's cabin.",
                prices: [
                    { size: "Size S", price: "IDR 7000k" },
                    { size: "Size M", price: "IDR 8000k" },
                    { size: "Size L", price: "IDR 9000k" },
                    { size: "Size XL", price: "IDR 1.100k" }
                ],
                estimatedWork: "6 - 8 hours",
                includes: [
                    "Premium Wash", "Engine Detailing",
                    "Interior Vaccum",
                    "Interior Cleaning (Dashboard, Doortrims, Seats, Arm Rest, Head Rest, Rooflining, Carpet)",
                    "Leather and Vinyl Cleaning and Protectant",
                    "Rubber Cleaning"
                ],
                additional: [
                    { name: "Deep Cleaning (Bongkar pasang jok + karpet)", prices: "S-M 2 Baris IDR 500k | M-L 3 Baris IDR 700k | XL 3 Baris IDR 1.000k" }
                ]
            },
            {
                id: "exterior",
                name: "Exterior Detailing",
                description: "Restoring the shine and removing defects from paintwork.",
                prices: [
                    { size: "Starts From", price: "IDR 1.500k" }
                ],
                includes: ["Multi-stage Paint Correction", "Tar & Iron Removal", "Sealant Application"],
                estimatedWork: "1 - 2 Days"
            },
            {
                id: "full",
                name: "Full Detailing",
                description: "Complete restoration of both interior and exterior.",
                prices: [
                    { size: "Size S", price: "IDR 1.500k" },
                    { size: "Size M", price: "IDR 1.700k" },
                    { size: "Size L", price: "IDR 1.900k" },
                    { size: "Size XL", price: "IDR 2.500k" }
                ],
                estimatedWork: "1 Day",
                includes: [
                    "Premium Wash", "Engine Detailing", "Interior Vacum",
                    "Interior Cleaning (Dashboard, Seats, Arm Rest, Head Rest, Rooflining, Carpet)",
                    "Leather and Vinyl Cleaning and Protectant",
                    "Rubber Cleaning",
                    "Tar and Oxidation Removal",
                    "4-Steps Polishing",
                    "Waterspot Removal and Emblem Detailing",
                    "Glass Waterspot Removal",
                    "Chrome Polishing",
                    "Headlamp and Stoplamp Polishing",
                    "Rims Detailing and Cleaning",
                    "Paint and Glass Light Protection"
                ]
            }
        ]
    },
    coating: {
        id: "coating",
        label: "Nano Ceramic Coating",
        subProducts: [
            {
                id: "light",
                name: "Light Package",
                description: "Double Layer Nano Ceramic Coating Package.",
                prices: [
                    { size: "Small", price: "IDR 3.000k" },
                    { size: "Medium", price: "IDR 4.000k" },
                    { size: "Large", price: "IDR 5.000k" },
                    { size: "X-Large", price: "IDR 6.000k" },
                    { size: "Super", price: "IDR 8.000k" }
                ],
                estimatedWork: "3-4 Days Workmanship",
                includes: [
                    "Full Car Detailing (Kolong, Mesin, Interior, Body, Velg, Kaca)",
                    "Full Body Coating (9H)",
                    "Windshield Coating (Kaca Depan)",
                    "1 Year Member Maintenance"
                ]
            },
            {
                id: "bronze",
                name: "Bronze Package",
                description: "Double Layer Nano Ceramic Coating Package.",
                prices: [
                    { size: "Small", price: "IDR 4.000k" },
                    { size: "Medium", price: "IDR 5.000k" },
                    { size: "Large", price: "IDR 6.000k" },
                    { size: "X-Large", price: "IDR 7.000k" },
                    { size: "Super", price: "IDR 9.000k" }
                ],
                estimatedWork: "3-4 Days Workmanship",
                includes: [
                    "Full Car Detailing (Undercarriage, Engine, Interior, Body, Wheel, Glass)",
                    "Full Body Coating (9H)",
                    "Full Window Coating",
                    "Plastic Coating, Velg Coating",
                    "2 Year Member Maintenance"
                ]
            },
            {
                id: "silver",
                name: "Silver Package",
                description: "Nano Ceramic Coating Triple Layer Package.",
                prices: [
                    { size: "Small", price: "IDR 6.000k" },
                    { size: "Medium", price: "IDR 7.000k" },
                    { size: "Large", price: "IDR 8.000k" },
                    { size: "X-Large", price: "IDR 9.000k" },
                    { size: "Super", price: "IDR 11.000k" }
                ],
                estimatedWork: "3-4 Days Workmanship",
                includes: [
                    "Full Car Detailing (Undercarriage, Engine, Interior, Body, Wheel, Glass)",
                    "Full Body Coating (9H+), Full Window Coating",
                    "Plastic Coating, Velg Coating",
                    "3 Year Member Maintenance"
                ]
            },
            {
                id: "gold",
                name: "Gold Package",
                description: "Nano Ceramic Coating 5 Layers Package.",
                prices: [
                    { size: "Small", price: "IDR 8.000k" },
                    { size: "Medium", price: "IDR 9.000k" },
                    { size: "Large", price: "IDR 10.000k" },
                    { size: "X-Large", price: "IDR 11.000k" },
                    { size: "Super", price: "IDR 13.000k" }
                ],
                estimatedWork: "4-5 Days Workmanship",
                includes: [
                    "Full Car Detailing (Undercarriage, Engine, Interior, Body, Wheel, Glass)",
                    "Full Body Coating (10H), Full Window Coating",
                    "Plastic Coating, Velg Coating",
                    "4 Year Member Maintenance"
                ]
            },
            {
                id: "diamond",
                name: "Diamond Package",
                description: "Nano Ceramic Coating 7 Layers Package.",
                prices: [
                    { size: "Small", price: "IDR 10.000k" },
                    { size: "Medium", price: "IDR 11.000k" },
                    { size: "Large", price: "IDR 12.000k" },
                    { size: "X-Large", price: "IDR 13.000k" },
                    { size: "Super", price: "IDR 15.000k" }
                ],
                estimatedWork: "4-5 Days Workmanship",
                includes: [
                    "Full Car Detailing (Undercarriage, Engine, Interior, Body, Wheel, Glass)",
                    "Full Body Coating (10H), Full Window Coating",
                    "Plastic Coating, Velg Coating",
                    "Full Leather Coating and Interior Coating",
                    "5 Year Member Maintenance"
                ]
            },
            {
                id: "platinum",
                name: "Platinum Package",
                description: "Nano Ceramic Coating 10 Layers Package.",
                prices: [
                    { size: "Small", price: "IDR 14.000k" },
                    { size: "Medium", price: "IDR 15.000k" },
                    { size: "Large", price: "IDR 16.000k" },
                    { size: "X-Large", price: "IDR 17.000k" },
                    { size: "Super", price: "IDR 19.000k" }
                ],
                estimatedWork: "3-4 Days Workmanship",
                includes: [
                    "Full Car Detailing (Undercarriage, Engine, Interior, Body, Wheel, Glass)",
                    "Full Body Coating (10H+), Full Window Coating",
                    "Plastic Coating, Velg Coating",
                    "Full Leather Coating and Interior Coating",
                    "Lifetime Member Maintenance"
                ]
            }
        ]
    },
    ppf: {
        id: "ppf",
        label: "Paint Protection Film",
        subProducts: [
            {
                id: "daily-ppf",
                name: "Daily PPF Package",
                description: "Thickness 170 micron & Self-Healing. Durable up to 3 Years.",
                prices: [
                    { size: "Small", price: "IDR 15.000k" },
                    { size: "Medium", price: "IDR 20.000k" },
                    { size: "Large", price: "IDR 25.000k" },
                    { size: "X-Large", price: "IDR 30.000k" },
                    { size: "Super", price: "IDR 35.000k" }
                ],
                estimatedWork: "7-10 Days Process",
                includes: [
                    "Full Body Car Detailing",
                    "Full Window Coating, Plastic Coating & Velg Coating",
                    "Full Leather Coating and Interior Coating",
                    "Up to 2 Years Membership Maintenance"
                ],
                additional: [
                    { name: "Material Specs", prices: "TPU Made in PRC" }
                ]
            },
            {
                id: "premium-ppf",
                name: "Premium PPF Package",
                description: "Thickness 200 micron & Self-Healing. Durable up to 7 Years.",
                prices: [
                    { size: "Small", price: "IDR 25.000k" },
                    { size: "Medium", price: "IDR 30.000k" },
                    { size: "Large", price: "IDR 35.000k" },
                    { size: "X-Large", price: "IDR 40.000k" },
                    { size: "Super", price: "IDR 45.000k" }
                ],
                estimatedWork: "7-10 Days Process",
                includes: [
                    "Full Body Car Detailing",
                    "Full Window Coating, Plastic Coating & Velg Coating",
                    "Full Leather Coating and Interior Coating",
                    "Up to 5 Years Membership Maintenance"
                ],
                additional: [
                    { name: "Material Specs", prices: "HIGH-GRADE TPU Made in USA" }
                ]
            },
            {
                id: "ultimate-ppf",
                name: "Ultimate PPF Package",
                description: "Thickness 230 micron & Self-Healing. Durable up to 10 Years.",
                prices: [
                    { size: "Small", price: "IDR 40.000k" },
                    { size: "Medium", price: "IDR 45.000k" },
                    { size: "Large", price: "IDR 50.000k" },
                    { size: "X-Large", price: "IDR 55.000k" },
                    { size: "Super", price: "IDR 60.000k" }
                ],
                estimatedWork: "7-10 Days Process",
                includes: [
                    "Full Body Car Detailing",
                    "Full Window Coating, Plastic Coating & Velg Coating",
                    "Full Leather Coating and Interior Coating",
                    "Up to 8 Years Membership Maintenance"
                ],
                additional: [
                    { name: "Material Specs", prices: "SUPER-GRADE TPU Made in USA" }
                ]
            }
        ]
    },
    rust: {
        id: "rust",
        label: "Rust Protection",
        subProducts: [
            {
                id: "premium-rust",
                name: "Premium Rust Protection",
                description: "Prevent rust and preserve value. 5 Years Warranty + Membership.",
                prices: [
                    { size: "Small", price: "IDR 2.000k" },
                    { size: "Medium", price: "IDR 2.500k" },
                    { size: "Large", price: "IDR 3.000k" },
                    { size: "X-Large", price: "IDR 3.500k" }
                ],
                estimatedWork: "6-8 Hours",
                includes: [
                    "Premium Underbody Coating",
                    "Cavity Wax for Inner Door Panels"
                ],
                additional: [
                    { name: "Application Areas", prices: "Wheel House | Lower Body | Lower Arm | Door Cavity (Cavity Wax) | Trunk and Engine Hood (Cavity Wax) | Cross Member | Gardan" }
                ]
            }
        ]
    }
};

export default function ServiceComparison() {
    const [activeCategory, setActiveCategory] = useState<keyof typeof pricingData>("wash");
    const [activeSubId, setActiveSubId] = useState<string>(pricingData.wash.subProducts[0].id);

    // Update sub-tab when category changes
    const handleCategoryChange = (key: keyof typeof pricingData) => {
        setActiveCategory(key);
        setActiveSubId(pricingData[key].subProducts[0].id);
    };

    const currentCategory = pricingData[activeCategory];
    const currentProduct = currentCategory.subProducts.find(p => p.id === activeSubId) || currentCategory.subProducts[0];

    return (
        <section className="py-24 bg-dark relative">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Service Pricing</h2>
                    <p className="text-gray-400">Transparent pricing for every level of perfection.</p>
                </div>

                {/* Level 1 Tabs (Main Categories) */}
                <div className="flex justify-center flex-wrap gap-4 mb-10">
                    {Object.values(pricingData).map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => handleCategoryChange(cat.id as keyof typeof pricingData)}
                            className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === cat.id
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Level 2 Tabs (Sub Products) */}
                <div className="flex justify-center flex-wrap gap-3 mb-16">
                    {currentCategory.subProducts.map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => setActiveSubId(sub.id)}
                            className={`px-5 py-2 rounded-xl text-sm transition-all border ${activeSubId === sub.id
                                ? "border-primary text-primary bg-primary/10"
                                : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {sub.name}
                        </button>
                    ))}
                </div>

                {/* Pricing Card Display */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        key={`${activeCategory}-${activeSubId}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-zinc-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative"
                    >
                        {/* Top Decoration */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-2 bg-primary blur-[20px]" />

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Left: Details */}
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white mb-2">
                                        <span className="text-primary">{currentProduct.name.split(' ')[0]}</span> {currentProduct.name.split(' ').slice(1).join(' ')}
                                    </h3>
                                    <p className="text-gray-400 text-sm italic mb-8">
                                        Estimated Work: {currentProduct.estimatedWork ? currentProduct.estimatedWork : "Varies"}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">Work Includes:</h4>
                                        <ul className="space-y-3">
                                            {currentProduct.includes.map((item, i) => (
                                                <li key={i} className="flex items-start text-gray-300 text-sm">
                                                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {currentProduct.additional && (
                                        <div>
                                            <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Additional:</h4>
                                            {currentProduct.additional.map((add, i) => (
                                                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                                                    <p className="text-white font-bold mb-2">{add.name}</p>
                                                    <p className="text-gray-400 text-xs leading-relaxed">{add.prices}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right: Pricing */}
                            <div className="p-8 md:p-12 bg-black/20 flex flex-col justify-center">
                                <h4 className="text-white text-center font-serif text-2xl mb-8">Pricelist</h4>
                                <div className="space-y-6">
                                    {currentProduct.prices.map((priceItem, idx) => (
                                        <div key={idx} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <span className="text-lg font-bold text-white">{priceItem.size}</span>
                                            <div className="flex-grow mx-4 border-b border-dotted border-white/20 h-4" />
                                            <span className="text-xl font-bold text-primary">{priceItem.price}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-12 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white transition-all">
                                    Booking Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Download Full Pricelist */}
                <div className="mt-16 text-center">
                    <a
                        href="/Pricelist Autospa.pdf"
                        download="Pricelist Autospa Jakarta.pdf"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/50 rounded-full text-white transition-all group"
                    >
                        <div className="p-2 bg-red-500/20 rounded-lg text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <span className="block text-xs text-gray-400 uppercase tracking-widest font-bold">Document</span>
                            <span className="block font-serif text-lg">Download Full Pricelist</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 text-gray-500 group-hover:text-white transition-colors">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
