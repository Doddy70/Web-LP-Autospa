"use client";

import React, { useEffect, useRef } from 'react';
import { Timeline } from 'animejs';

interface PreloaderProps {
    isLoading: boolean;
    onComplete: () => void;
}

export default function Preloader({ isLoading, onComplete }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const pulseAnim = useRef<any>(null); // To store the loop animation

    useEffect(() => {
        // Pulse Animation Loop (starts immediately)
        // @ts-ignore - animejs v4
        pulseAnim.current = new Timeline({
            loop: true,
            alternate: true,
            defaults: {
                duration: 800,
                ease: 'easeInOutQuad'
            }
        });

        if (logoRef.current) {
            pulseAnim.current.add(logoRef.current, {
                scale: [0.95, 1.05],
                opacity: [0.7, 1]
            });
        }

        return () => {
            if (pulseAnim.current) pulseAnim.current.pause();
        }
    }, []);

    useEffect(() => {
        if (!isLoading) {
            // Stop the pulse loop
            if (pulseAnim.current) pulseAnim.current.pause();

            // Exit Animation
            const tl = new Timeline({
                defaults: {
                    ease: 'easeOutExpo',
                    duration: 1000
                },
                onComplete: () => {
                    onComplete();
                }
            });

            // Animate Logo Out (Scale Up fade out)
            if (logoRef.current) {
                tl.add(logoRef.current, {
                    scale: 1.5,
                    opacity: 0,
                    duration: 800
                });
            }

            // Fade out container background
            if (containerRef.current) {
                tl.add(containerRef.current, {
                    opacity: 0,
                    duration: 600
                }, '-=600');
            }
        }
    }, [isLoading, onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
            <div className="relative z-10">
                <img
                    ref={logoRef}
                    src="/images/logo.png"
                    alt="Loading AutoSpa Jakarta"
                    className="w-32 md:w-48 h-auto object-contain opacity-0" // Initial opacity handled by animation
                />
            </div>

            {/* Ambient Glow behind logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            </div>
        </div>
    );
}
