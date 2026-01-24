"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// YouTube Shorts Data
const videos = [
    {
        id: 1,
        youtubeId: "n0pohOex5Bc",
        title: "Ultimate Gloss Finish",
        category: "Ceramic Coating",
        thumbnail: "https://img.youtube.com/vi/n0pohOex5Bc/maxresdefault.jpg"
    },
    {
        id: 2,
        youtubeId: "CrzZxLKooJ0",
        title: "Precision Detailing",
        category: "Paint Correction",
        thumbnail: "https://img.youtube.com/vi/CrzZxLKooJ0/maxresdefault.jpg"
    },
    {
        id: 3,
        youtubeId: "U1TZn2QP5O8",
        title: "Interior Deep Clean",
        category: "Restoration",
        thumbnail: "https://img.youtube.com/vi/U1TZn2QP5O8/maxresdefault.jpg"
    },
    {
        id: 4,
        youtubeId: "foa89DS-WM0",
        title: "Glass Coating Application",
        category: "Protection",
        thumbnail: "https://img.youtube.com/vi/foa89DS-WM0/maxresdefault.jpg"
    },
    {
        id: 5,
        youtubeId: "iYWTfqb2jco",
        title: "Engine Bay Detail",
        category: "Detailing",
        thumbnail: "https://img.youtube.com/vi/iYWTfqb2jco/maxresdefault.jpg"
    },
    {
        id: 6,
        youtubeId: "YSs32wYoz1g",
        title: "Premium Wash Process",
        category: "Maintenance",
        thumbnail: "https://img.youtube.com/vi/YSs32wYoz1g/maxresdefault.jpg"
    }
];

export default function VideoGallery() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">In Motion</h2>
                        <p className="text-gray-400">Witness the process and precision behind our work.</p>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <motion.div
                            key={video.id}
                            layoutId={`video-card-${video.id}`}
                            onClick={() => setSelectedId(video.id)}
                            className="relative h-[765px] rounded-2xl overflow-hidden cursor-pointer group bg-zinc-900 shadow-xl"
                            whileHover={{ y: -5 }}
                        >
                            {/* Thumbnail Image */}
                            <motion.img
                                layoutId={`video-thumb-${video.id}`}
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/50 z-10 transition-opacity duration-300 group-hover:opacity-40" />

                            {/* Play Button Overlay */}
                            <motion.div
                                layoutId={`video-play-${video.id}`}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white ml-1">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Title Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <motion.p layoutId={`video-cat-${video.id}`} className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{video.category}</motion.p>
                                <motion.h3 layoutId={`video-title-${video.id}`} className="text-white font-bold text-lg truncate">{video.title}</motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Player */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 pointer-events-none">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto"
                            />

                            {/* Player Card */}
                            {videos.map((video) => {
                                if (video.id !== selectedId) return null;
                                return (
                                    <motion.div
                                        key={video.id}
                                        layoutId={`video-card-${video.id}`}
                                        className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto border border-white/10"
                                    >
                                        {/* Close Button */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        {/* YouTube Iframe */}
                                        <div className="w-full h-full">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                                                title={video.title}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                        </div>

                                        {/* Info Bar (Bottom) */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-sm border-t border-white/5 flex justify-between items-center pointer-events-none">
                                            <div>
                                                <motion.p layoutId={`video-cat-${video.id}`} className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{video.category}</motion.p>
                                                <motion.h3 layoutId={`video-title-${video.id}`} className="text-white font-bold text-xl">{video.title}</motion.h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
