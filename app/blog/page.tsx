import { getAllPosts } from '@/lib/wordpress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Blog - AutoSpa Jakarta',
    description: 'Latest insights, tips, and news about auto detailing and paint protection.',
};

export default async function BlogIndex() {
    const posts = await getAllPosts();

    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Latest Articles</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">Insights from the world of premium auto detailing.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts?.map((post: any) => (
                            <a
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 shadow-xl"
                            >
                                {/* Thumbnail */}
                                <div className="relative h-64 overflow-hidden bg-black/50">
                                    {post.featuredImage?.node?.sourceUrl ? (
                                        <img
                                            src={post.featuredImage.node.sourceUrl}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-700 bg-zinc-900">
                                            <span className="text-sm">No Image</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest">Article</span>
                                        <span className="text-xs text-gray-500">•</span>
                                        <span className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h2>

                                    <div
                                        className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                    />

                                    <span className="text-white font-bold text-sm border-b border-primary/50 pb-0.5 group-hover:border-primary transition-colors">
                                        Read More
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
