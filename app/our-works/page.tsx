import { Metadata } from 'next';
import WorksGrid from '@/components/WorksGrid';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Our Works | Autospa Jakarta",
    description: "Explore our portfolio of premium detailing, ceramic coating, and PPF installations on luxury vehicles.",
};

export default function OurWorksPage() {
    return (
        <main className="min-h-screen bg-neutral-950">
            <Navbar />

            <div className="pt-24 overflow-hidden">
                {/* Hero Section */}
                <section className="relative px-4 pb-12 pt-12 md:pt-20 text-center">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-500/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

                    <div className="relative z-10 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            MASTERPIECES
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                            A curated collection of our finest work. Scroll to explore the details.
                        </p>
                        <div className="flex justify-center pt-8">
                            <div className="animate-bounce text-neutral-500 text-sm flex flex-col items-center gap-2">
                                <span>Scroll to Draw</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Card Draw Grid */}
                <WorksGrid />

                {/* Footer Call to Action Spacer */}
                <div className="h-24"></div>
            </div>

            <Footer />
        </main>
    );
}
