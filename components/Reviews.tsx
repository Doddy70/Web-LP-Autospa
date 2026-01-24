"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "David Santoso",
        date: "2 weeks ago",
        rating: 5,
        text: "Incredible service! The ceramic coating on my Pajero looks absolutely stunning. The team was professional and the attention to detail is unmatched in Jakarta.",
        avatar: "D"
    },
    {
        id: 2,
        name: "Michael Tan",
        date: "1 month ago",
        rating: 5,
        text: "Brought my BMW X5 for a full interior detail. It feels brand new again. Highly recommend Autospa Jakarta for anyone who loves their car.",
        avatar: "M"
    },
    {
        id: 3,
        name: "Sarah Wijaya",
        date: "3 weeks ago",
        rating: 5,
        text: "Professional, punctual, and premium results. The paint correction removed all the swirl marks. 5 stars well deserved!",
        avatar: "S"
    },
    {
        id: 4,
        name: "Budi Hartono",
        date: "2 months ago",
        rating: 5,
        text: "Best auto detailing in the city. The glass coating makes maintenance so much easier. deeply satisfied with the outcome.",
        avatar: "B"
    },
    {
        id: 5,
        name: "Jessica Lim",
        date: "1 week ago",
        rating: 5,
        text: "Treatment mobil terbaik. Eksterior jadi kinclong banget kayak baru keluar dealer. Pelayanannya juga ramah banget.",
        avatar: "J"
    }
];

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="reviews" className="py-24 relative overflow-hidden bg-zinc-950">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            {/* Google G Logo SVG */}
                            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="text-white font-bold text-lg tracking-wide">Reviews</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Trusted by Car Owners</h2>
                    </div>

                    {/* Google Rating Badge */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-2xl">5.0</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="h-10 w-px bg-white/10" />
                        <span className="text-gray-400 text-sm">Based on<br />128+ Reviews</span>
                    </div>
                </div>

                {/* Reviews Carousel */}
                <div className="relative w-full">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none md:block hidden" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none md:block hidden" />

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar"
                    >
                        {reviews.map((review) => (
                            <motion.div
                                key={review.id}
                                whileHover={{ y: -5 }}
                                className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col gap-4 relative group hover:bg-white/10 transition-colors"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-6 text-white/5 text-6xl font-serif leading-none group-hover:text-white/10 transition-colors">
                                    &rdquo;
                                </div>

                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{review.name}</h4>
                                        <span className="text-gray-500 text-xs">{review.date}</span>
                                    </div>
                                    {/* Google Mini Icon */}
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 ml-auto opacity-50" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {review.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
