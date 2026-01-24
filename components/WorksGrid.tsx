"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const projects = [
    { id: 1, src: "/images/gallery/Chery-2.jpg", title: "Chery Omoda 5", description: "Full Body PPF" },
    { id: 2, src: "/images/gallery/fortuner-1.jpg", title: "Toyota Fortuner", description: "Ceramic Coating" },
    { id: 3, src: "/images/gallery/voxy-1.jpg", title: "Toyota Voxy", description: "Ultimate Detail" },
    { id: 4, src: "/images/gallery/Inovva-zenix-1.jpg", title: "Innova Zenix", description: "Double Layer Coating" },
    { id: 5, src: "/images/gallery/Chery1-1.jpg", title: "Chery Tiggo", description: "Paint Correction" },
    { id: 6, src: "/images/gallery/voxy-3.jpg", title: "Toyota Voxy", description: "Interior Deep Clean" },
    { id: 7, src: "/images/gallery/OMODAeh.jpg", title: "Omoda 5 GT", description: "Glass Coating" },
    { id: 8, src: "/images/gallery/FORTUNER.jpg", title: "Fortuner GR", description: "Maintenance Wash" },
    { id: 9, src: "/images/gallery/Inovva-zenix-2.jpg", title: "Innova Zenix", description: "Hybrid Coating" },
    { id: 10, src: "/images/gallery/Chery3.jpg", title: "Chery Omoda", description: "PPF Front Package" },
    { id: 11, src: "/images/gallery/fortuner2.jpg", title: "Fortuner Legender", description: "Exterior Detail" },
    { id: 12, src: "/images/gallery/voxy-2.jpg", title: "Toyota Voxy", description: "Ceramic Pro" },
    { id: 13, src: "/images/gallery/Chery4.jpg", title: "Chery Omoda", description: "Detailing Package" },
    { id: 14, src: "/images/gallery/Fortuner3.jpg", title: "Toyota Fortuner", description: "Nano Ceramic" },
    { id: 15, src: "/images/gallery/Inovva-zenix-3.jpg", title: "Innova Zenix", description: "Interior Protection" },
    { id: 16, src: "/images/gallery/fortuner4.jpg", title: "Toyota Fortuner", description: "Paint Protection" },
    { id: 17, src: "/images/gallery/voxy.jpg", title: "Toyota Voxy", description: "Complete Makeover" },
];

export default function WorksGrid() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-24 relative">
                {projects.map((project, index) => (
                    <Card key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

function Card({ project, index }: { project: any; index: number }) {
    // Determine column index (0, 1, 2) for a 3-column grid
    // Note: This logic assumes a 3-column layout. On smaller screens, the visual effect
    // will effectively just be the cards appearing, as the layout shifts to 1 or 2 cols.
    // Ideally, we'd handle responsive variants, but for the "Card Draw" effect, we tune for desktop.
    const colIndex = index % 3;

    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 150, // Start from below
            x: colIndex === 0 ? 50 : colIndex === 2 ? -50 : 0, // Start clustered towards center
            rotate: colIndex === 0 ? -10 : colIndex === 2 ? 10 : 0, // Start tiled inwards
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: colIndex === 0 ? -3 : colIndex === 2 ? 3 : 0, // Retain slight "hand-dealt" tilt
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
                mass: 1,
                // Add stagger based on index to decouple row by row effect slightly if needed,
                // but strict scroll trigger is often better for this specific "draw" feel.
                duration: 0.8
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Trigger when card enters view
            variants={cardVariants}
            className={`relative group perspective-1000 ${
                // Add vertical offset to middle column to create masonry-like or "fan" feel if desired,
                // but for now we keep them aligned. 
                ""
                }`}
            style={{
                // Optional: Add a random slight z-index or rotation noise for more organic feel
            }}
        >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-white/10 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-brand-500/20">
                <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
                    <p className="text-brand-400 font-medium text-sm">{project.description}</p>
                </div>
            </div>
        </motion.div>
    );
}
