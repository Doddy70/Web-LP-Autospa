"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent, useTransform, motion } from "framer-motion";
import Preloader from "./Preloader";

import { globalFramesIds } from "@/lib/GlobalImageCache";

const FRAME_COUNT = 240;
const IMAGE_PATH_PREFIX = "/images/sequence2/frame_";
const IMAGE_EXTENSION = ".webp";

export default function KeyboardScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Check if we already have frames in the global cache
    const hasCachedFrames = globalFramesIds.some(img => img !== null);

    // If cached, we don't need to load or show preloader
    const [loading, setLoading] = useState(!hasCachedFrames);
    const [preloaderFinished, setPreloaderFinished] = useState(hasCachedFrames);

    // We can use a ref to access the data without triggering re-renders, 
    // but we'll read from the global array directly in renderFrame for simplicity 
    // or sync them here. To keep it clean, let's just reference the global array.

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // 1. Initialize
    useEffect(() => {
        // If we already have cached frames, just render the first one and ensure loading is off
        if (hasCachedFrames) {
            renderFrame(0);
            return;
        }

        // Otherwise, start loading process
        const img = new Image();
        img.src = `${IMAGE_PATH_PREFIX}0${IMAGE_EXTENSION}`;
        img.onload = () => {
            // Store frame 0 globally
            globalFramesIds[0] = img;

            // Render it immediately
            renderFrame(0);

            // Dismiss Preloader immediately
            setLoading(false);

            // Start loading the rest in background
            loadRemainingFrames();
        };
    }, []);

    const loadRemainingFrames = async () => {
        // Load in batches to avoid freezing the browser or choking network
        const BATCH_SIZE = 5;

        for (let i = 1; i < FRAME_COUNT; i += BATCH_SIZE) {
            // Stop loading if we unmount? 
            // Actually continue loading is fine so cache gets populated for next time.

            const promises = [];
            // Create a batch of promises
            for (let j = 0; j < BATCH_SIZE && (i + j) < FRAME_COUNT; j++) {
                const index = i + j;
                if (globalFramesIds[index]) continue; // Skip if already loaded

                promises.push(new Promise<void>((resolve) => {
                    const img = new Image();
                    img.src = `${IMAGE_PATH_PREFIX}${index}${IMAGE_EXTENSION}`;
                    img.onload = () => {
                        globalFramesIds[index] = img;
                        // If this happens to be the current frame needed, render it
                        if (Math.round(frameIndex.get()) === index) {
                            renderFrame(index);
                        }
                        resolve();
                    };
                    img.onerror = () => resolve(); // Proceed even on error
                }));
            }

            // Wait for this batch to finish (or mostly finish) before starting next
            // Adding a small delay to yield to main thread
            await Promise.all(promises);
            await new Promise(r => setTimeout(r, 20));
        }
    };

    // Draw frame on canvas (Responsive)
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const i = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(index)));
        const img = globalFramesIds[i];

        // If frame isn't loaded yet, try to find the nearest loaded frame (fallback)
        // This prevents flickering if the user scrolls faster than download
        let drawImg = img;
        if (!drawImg) {
            // Search backwards for nearest loaded frame
            for (let j = i - 1; j >= 0; j--) {
                if (globalFramesIds[j]) {
                    drawImg = globalFramesIds[j];
                    break;
                }
            }
        }

        if (!drawImg) return;

        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);

        // Determine if we should use cover or contain
        // On portrait (mobile) screens, we use 'cover' to fill height and avoid black bars.
        // On landscape (desktop) screens, we use 'contain' to ensure the full car is visible.
        const isPortrait = canvasHeight > canvasWidth;

        let scale;
        if (isPortrait) {
            scale = Math.max(canvasWidth / drawImg.width, canvasHeight / drawImg.height);
        } else {
            scale = Math.min(canvasWidth / drawImg.width, canvasHeight / drawImg.height);
        }

        const x = (canvasWidth - drawImg.width * scale) / 2;
        const y = (canvasHeight - drawImg.height * scale) / 2;

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(drawImg, x, y, drawImg.width * scale, drawImg.height * scale);
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

                renderFrame(frameIndex.get());
            }
        };
        window.addEventListener("resize", handleResize);

        // Initial setup
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Update on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        requestAnimationFrame(() => renderFrame(latest));
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
                    <div className="text-center bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-6 md:p-10 max-w-3xl mx-4 bg-gradient-to-b from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Autospa</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">Passion For Detail.</p>
                    </div>
                </motion.div>

                {/* 25% Left */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex items-center justify-start px-8 md:px-20 pointer-events-none"
                >
                    <div className="text-left bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-6 md:p-10 max-w-2xl bg-gradient-to-br from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] leading-tight">Detailing at its finest</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">Meticulous Care.</p>
                    </div>
                </motion.div>

                {/* 60% Right */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex items-center justify-end px-8 md:px-20 pointer-events-none"
                >
                    <div className="text-right bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl p-6 md:p-10 max-w-2xl bg-gradient-to-bl from-white/10 to-transparent">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Engineered Protection</h2>
                        <p className="text-xl text-gray-200 font-medium drop-shadow-md">TACSYSTEM® Technology.</p>
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
