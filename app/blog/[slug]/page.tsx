import { getPostBySlug, getAllPosts } from '@/lib/wordpress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisqusComments from '@/components/DisqusComments';
import { Metadata } from 'next';

// Dynamic SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return {
        title: `${post?.title || 'Article'} - AutoSpa Jakarta`,
        description: post?.excerpt?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Read our latest article.',
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch current post and all posts (for sidebar) in parallel
    const postData = getPostBySlug(slug);
    const allPostsData = getAllPosts();
    const [post, allPosts] = await Promise.all([postData, allPostsData]);

    if (!post) {
        return (
            <main className="min-h-screen bg-dark flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center text-white">Post not found.</div>
                <Footer />
            </main>
        );
    }

    // Filter recent posts (exclude current)
    const recentPosts = allPosts?.filter((p: any) => p.slug !== slug).slice(0, 5) || [];

    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Hero Header */}
            <div className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950 z-0" />
                {/* Background Image if available */}
                {post.featuredImage?.node?.sourceUrl && (
                    <div className="absolute inset-0 z-0 opacity-20">
                        <img src={post.featuredImage.node.sourceUrl} className="w-full h-full object-cover blur-sm" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                    </div>
                )}

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">
                        {new Date(post.date).toLocaleDateString()}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        {post.author?.node?.avatar?.url && (
                            <img src={post.author.node.avatar.url} alt={post.author.node.name} className="w-10 h-10 rounded-full border border-white/20" />
                        )}
                        <span className="text-gray-300 font-medium">{post.author?.node?.name || 'AutoSpa Team'}</span>
                    </div>
                </div>
            </div>

            {/* Content Body with Sidebar */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Article (Left) */}
                        <div className="lg:col-span-2">
                            <article
                                className="prose prose-invert prose-lg max-w-none text-gray-300 font-light leading-relaxed space-y-6 [&>p]:mb-6 [&>h2]:text-3xl [&>h2]:text-white [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:text-white [&>h3]:font-bold [&>h3]:mt-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>img]:rounded-2xl [&>img]:w-full [&>figure]:w-full"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Comments Section */}
                            <DisqusComments
                                url={`https://autospajakarta.com/blog/${slug}`}
                                identifier={slug}
                                title={post.title}
                            />
                        </div>

                        {/* Sidebar (Right) */}
                        <aside className="lg:col-span-1 space-y-8">

                            {/* Widget: Call to Action */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-32 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-4">Ready for a Transformation?</h3>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Book your premium detailing service today and give your car the showroom shine it deserves.
                                </p>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=6281937773888&text=halo+admin+saya+tertarik+dengan+artikel+anda+dan+mau+booking&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-white hover:text-primary transition-colors shadow-lg shadow-primary/20"
                                >
                                    Book Now via WhatsApp
                                </a>
                            </div>

                            {/* Widget: Recent Posts */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">Recent Articles</h3>
                                <div className="space-y-6">
                                    {recentPosts.map((recent: any) => (
                                        <a href={`/blog/${recent.slug}`} key={recent.slug} className="group flex gap-4 items-start">
                                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                                                {recent.featuredImage?.node?.sourceUrl && (
                                                    <img src={recent.featuredImage.node.sourceUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                                                )}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                                    {recent.title}
                                                </h4>
                                                <span className="text-xs text-gray-500">{new Date(recent.date).toLocaleDateString()}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Widget: Quick Links */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">Our Services</h3>
                                <ul className="space-y-3">
                                    {['Premium Wash', 'Premium Detailing', 'Nano Ceramic Coating', 'Premium 360° PPF'].map((service) => (
                                        <li key={service}>
                                            <a href="/#services" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-white/20 rounded-full mr-3"></span>
                                                {service}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </aside>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
