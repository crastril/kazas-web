import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/features/landing/before-after-slider";
import { TrustBadges } from "@/components/features/landing/trust-badges";
import { ArrowRight, Star, Leaf, Sparkles } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">

            {/* HER0 SECTION: Immersive & Organic */}
            <section className="relative h-[95vh] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-villa.png"
                        alt="Luxury Villa in Martinique at Golden Hour"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/ejRfwAJzAO9N4h7ZAAAAABJRU5ErkJggg=="
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
                </div>

                {/* Floating Content Card (Glassmorphism) */}
                <div className="relative z-10 container max-w-4xl px-4">
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span>Reinventing Caribbean Luxury</span>
                        </div>

                        <h1 className="font-heading text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-sm">
                            The Art of <br />
                            <span className="text-secondary italic">Eco-Living</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            Experience curated villas that blend modern design with Martinique's wild beauty.
                            Managed with soul, designed for impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Button size="lg" className="h-14 px-8 text-lg bg-white text-primary hover:bg-white/90 shadow-xl w-full sm:w-auto">
                                <Link href="/portfolio">Explore Collection</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                                <Link href="/audit">Owner Partnership</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Organic Wave Separator */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px] text-background fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>


            {/* VALUES SECTION: Squishy Cards */}
            <section className="py-24 relative overflow-hidden">
                {/* Animated Background Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-float" />
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl -z-10 animate-float-delayed" />

                <div className="container space-y-16">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <Leaf className="w-10 h-10 text-primary mx-auto opacity-80" />
                        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary">
                            Conscious Hospitality
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We don't just rent homes; we steward ecosystems. Every stay supports sustainable renovation and local artisanship.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Eco-Renovation", icon: "🌿", desc: "We upgrade properties with sustainable materials to reduce carbon footprint." },
                            { title: "Smart Revenue", icon: "📊", desc: "AI-driven pricing that respects market balance and maximizes owner yield." },
                            { title: "Concierge 2.0", icon: "✨", desc: "Hyper-personalized experiences, from private chefs to eco-tours." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-[2rem] p-10 space-y-4 squishy hover:bg-white/80 transition-colors">
                                <div className="w-14 h-14 bg-secondary/30 rounded-full flex items-center justify-center text-3xl mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-semibold text-primary">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESIGN SPOTLIGHT: Before/After */}
            <section className="py-24 bg-primary text-primary-foreground relative rounded-t-[3rem] -mt-12">
                <div className="container grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-foreground/30 text-xs uppercase tracking-widest">
                            Transformation
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold">
                            From Tired to Trendy
                        </h2>
                        <p className="text-primary-foreground/80 text-lg leading-relaxed">
                            Our "Tropical Modernism" design language turns average properties into high-yield assets. We focus on light, flow, and organic textures.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Increase ADR by up to 40%",
                                "Full Project Management",
                                "Sustainable Furniture Sourcing"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                                        <ArrowRight className="w-3 h-3 text-primary" />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <Button size="lg" variant="secondary" className="rounded-full text-primary font-bold shadow-lg h-12 px-8">
                                <Link href="/contact">Get a Free Appraisal</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="glass-card p-4 rounded-[2rem] bg-white/10 border-white/20">
                            <BeforeAfterSlider />
                        </div>
                        <p className="text-center text-sm mt-4 text-primary-foreground/60 opacity-80">
                            Drag the slider to see the renovation magic
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
