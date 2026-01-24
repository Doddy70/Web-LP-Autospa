import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import ServiceDetails from '@/components/ServiceDetails';
import ServiceComparison from '@/components/ServiceComparison';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services - AutoSpa Jakarta',
    description: 'Explore our premium automotive care services: Paint Protection Film (PPF), Nano Ceramic Coating, and precision detailing using TACSystem.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            <ServicesHero />

            <ServiceDetails />

            <ServiceComparison />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-dark to-primary/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Not sure what your car needs?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Our experts are ready to inspect your vehicle and recommend the perfect protection package.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-10 py-4 bg-white text-dark font-bold rounded-full text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/50"
                    >
                        Consult with an Expert
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
