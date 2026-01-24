"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Pungki Yuniawan",
        role: "Founder",
        image: "/images/teams/Pungki.png",
        isLeader: true
    },
    { name: "Adit", image: "/images/teams/Adit.png" },
    { name: "Abun", image: "/images/teams/ABun.png" },
    { name: "Sule", image: "/images/teams/Sule.png" },
    { name: "Amel", image: "/images/teams/Amel.png" },
    { name: "Ikin", image: "/images/teams/Ikin.png" },
    { name: "Dhani", image: "/images/teams/Dhani.png" },
    { name: "Dedih", image: "/images/teams/dedih.png" },
];

export default function OurTeam() {
    return (
        <section id="team" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-sans font-bold text-white">
                        Our <span className="text-primary italic">Teams</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Image Container */}
                            <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-105 ${member.isLeader ? 'ring-4 ring-primary ring-offset-4 ring-offset-dark' : 'grayscale group-hover:grayscale-0'}`}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 160px, 192px"
                                />
                            </div>

                            {/* Name */}
                            <h3 className={`text-xl font-bold text-center transition-colors ${member.isLeader ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                                {member.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
