"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "What is auto detailing?",
        answer: "Auto detailing is a comprehensive maintenance and cleaning process for vehicles, including cleaning, polishing, and maintaining the condition of the vehicle. It includes procedures such as washing, painting, rust removal, vehicle coating, and more."
    },
    {
        question: "What are the advantages of auto detailing?",
        answer: "Auto detailing can make your car look like new. It can also help protect the color and luster of your vehicle, and increase the resale value of your car."
    },
    {
        question: "How can I maintain the detailing results?",
        answer: "After detailing, you can maintain the results by washing your car regularly. This will help you remove dirt and dust, and prevent rust from forming. You should also use a coating to protect your car's paint and ensure the results last longer."
    },
    {
        question: "What is a paint protection film (PPF)?",
        answer: "Paint Protection Film (PPF) is a protective coating for your car's surface designed to protect against scratches, dirt and sun damage. It is applied precisely over the surface of your vehicle to protect the color from the effects of harsh weather and scratches."
    },
    {
        question: "How long does a paint protection film last?",
        answer: "The lifespan of a paint protection film depends on the weather conditions and the quality of the film. Generally, PPF lasts for 5-8 years"
    },
    {
        question: "How do I clean paint protection film?",
        answer: "You can clean the PPF by using car soap and water. Use a soft sponge and don't forget to moisten the sponge with water before cleaning the PPF. You can also use special products to maintain and clean the PPF."
    },
    {
        question: "What is a nano ceramic coating?",
        answer: "Nano ceramic coating is a special protective coating for vehicle surfaces made of nano-techno logical particles. It provides long-term protection from dirt, dust and contaminants, and enhances the appearance of your vehicle."
    },
    {
        question: "What does full car detailing mean?",
        answer: "Full car detailing is a process of cleaning and refreshing a vehicle that includes cleaning the outside of the car, cleaning the inside, changing the oil, changing the filters, and repainting. This process can result in a car that looks and feels like new."
    },
    {
        question: "How long does a full car detailing take?",
        answer: "The duration required to perform full car detailing varies depending on the condition of the car. Usually, this process can take between 4-7 hours."
    },
    {
        question: "What is Exterior Detailing?",
        answer: "Exterior detailing involves cleaning, restoring, and protecting all parts of the car's exterior surface, including the paint, wheels, tires, and windows."
    },
    {
        question: "What is Interior Detailing?",
        answer: "Interior detailing is a process that involves cleaning, removing dirt and maintaining the condition of a car's interior, including carpets, plastics and leather. It aims to restore the car's interior to a like-new condition."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-dark relative z-10">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h3 className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Support</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Got Questions? We've Got Answers.</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-white/10">
                            <button
                                onClick={() => toggleIndex(idx)}
                                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors ${activeIndex === idx ? 'text-primary' : 'text-white group-hover:text-primary/80 pr-8'}`}>
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0">
                                    {activeIndex === idx ? (
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                    )}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-gray-400 leading-relaxed text-base md:text-lg">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
