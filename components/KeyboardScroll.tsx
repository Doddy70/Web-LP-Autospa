"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";
import Preloader from "./Preloader";

const FRAME_COUNT = 240;
const IMAGE_PATH_PREFIX = "/images/sequence2/frame_";
const IMAGE_EXTENSION = ".png";

export default function KeyboardScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [preloaderFinished, setPreloaderFinished] = useState(false);

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // 1. Load First Frame Immediately (Critical Path)
    useEffect(() => {
        const img = new Image();
        img.src = `${IMAGE_PATH_PREFIX}0${IMAGE_EXTENSION}`;
        img.onload = () => {
            // Render it immediately to canvas
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // Set canvas size
                    const dpr = window.devicePixelRatio || 1;
                    canvas.width = window.innerWidth * dpr;
                    canvas.height = window.innerHeight * dpr;
                    ctx.scale(dpr, dpr);

                    // Draw
                    const scale = Math.min(canvas.width / dpr / img.width, canvas.height / dpr / img.height);
                    const x = (canvas.width / dpr - img.width * scale) / 2;
                    const y = (canvas.height / dpr - img.height * scale) / 2;
                    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                }
            }
            // Start loading the rest
            loadAllFrames(img);
        };
    }, []);

    const loadAllFrames = async (firstImage: HTMLImageElement) => {
        const promises = [Promise.resolve(firstImage)]; // Index 0 is already loaded

        for (let i = 1; i < FRAME_COUNT; i++) {
            promises.push(
                new Promise<HTMLImageElement>((resolve) => {
                    const img = new Image();
                    img.src = `${IMAGE_PATH_PREFIX}${i}${IMAGE_EXTENSION}`;
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(img); // Continue even if error
                })
            );
        }

        const allImages = await Promise.all(promises);
        setImages(allImages);
        setLoading(false);
    };

    // Draw frame on canvas (Responsive)
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const i = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index)));
        const img = images[i];

        if (!img) return;

        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
        const x = (canvasWidth - img.width * scale) / 2;
        const y = (canvasHeight - img.height * scale) / 2;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;

                const ctx = canvas.getContext('2d');
                if (ctx) ctx.scale(dpr, dpr);

                // Re-render current frame if possible
                if (!loading && images.length > 0) {
                    renderFrame(frameIndex.get());
                }
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loading, images]);

    // Update on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!loading && images.length > 0) {
            requestAnimationFrame(() => renderFrame(latest));
        }
    });

    // Text Overlay Transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -20]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [20, 0, -20]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.55, 0.65, 0.7], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [20, 0, -20]);
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.8, 1], [20, 0]);

    return (
        <div id="home" ref={containerRef} className="relative h-[400dvh] bg-dark">
            {!preloaderFinished && (
                <Preloader isLoading={loading} onComplete={() => setPreloaderFinished(true)} />
            )}

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block h-full w-full object-contain"
                    style={{ width: "100%", height: "100%" }}
                />

                {/* 0% Center */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="text-center bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-10 md:p-14 max-w-3xl mx-4 bg-gradient-to-b from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">We care about your car</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">From the inside out.</p>
                    </div>
                </motion.div>

                {/* 25% Left */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex items-center justify-start px-8 md:px-20 pointer-events-none"
                >
                    <div className="text-left bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-10 md:p-14 max-w-2xl bg-gradient-to-br from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] leading-tight">Because every layer is important</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">High precision detailing.</p>
                    </div>
                </motion.div>

                {/* 60% Right */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex items-center justify-end px-8 md:px-20 pointer-events-none"
                >
                    <div className="text-right bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-10 md:p-14 max-w-2xl bg-gradient-to-bl from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Premium car treatment</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">Best technology for your vehicle.</p>
                    </div>
                </motion.div>

                {/* 90% Center Scroll Down */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-end pb-32 pointer-events-none"
                >
                    <motion.div
                        initial={{ y: 0, opacity: 0.5 }}
                        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-4"
                    >
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-widest text-shadow-sm">Scroll Down</p>
                        <div className="w-12 h-20 border-2 border-white/20 rounded-full flex justify-center p-2 bg-white/5 backdrop-blur-sm shadow-lg">
                            <motion.div
                                animate={{ y: [0, 24, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                                className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.8)]"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
