import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/features/landing/before-after-slider";
import { ArrowRight, Leaf, Sparkles, Check } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden bg-background font-sans">

            {/* HERO SECTION: Immersive & Organic */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-villa.png"
                        alt="Villa de luxe en Martinique au coucher du soleil"
                        fill
                        className="object-cover"
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/ejRfwAJzAO9N4h7ZAAAAABJRU5ErkJggg=="
                    />
                    {/* Gradient Overlay for Text Readability - Darker for accessibility */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Floating Content Card (Glassmorphism) */}
                <div className="relative z-10 container mx-auto px-4">
                    <div className="glass-card max-w-4xl mx-auto rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 border-white/10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <span>Le Luxe Caribéen Réinventé</span>
                        </div>

                        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
                            L'Art de <br />
                            <span className="text-secondary italic">l'Éco-Élégance</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                            Découvrez une collection de villas d'exception en Martinique.
                            Gestion locative éthique, design tropical et expériences sur-mesure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                            {/* Primary CTA: High Contrast (Ivory Button, Green Text) */}
                            <Button size="lg" className="h-14 px-8 text-lg bg-[#F5F0E1] text-[#2D5A2E] hover:bg-white shadow-xl w-full sm:w-auto font-bold transition-transform hover:scale-105">
                                <Link href="/portfolio">Explorer la Collection</Link>
                            </Button>

                            {/* Secondary CTA: Glass Button with readable white text and border */}
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-black/30 border-white/50 text-white hover:bg-black/50 w-full sm:w-auto backdrop-blur-sm transition-transform hover:scale-105">
                                <Link href="/audit">Espace Propriétaire</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Organic Wave Separator */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px] text-background fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>


            {/* VALUES SECTION: Squishy Cards */}
            <section id="valeurs" className="py-24 relative overflow-hidden container mx-auto px-4">
                {/* Animated Background Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-float" />
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl -z-10 animate-float-delayed" />

                <div className="space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <Leaf className="w-10 h-10 text-primary mx-auto opacity-80" />
                        <h2 className="font-heading text-4xl md:text-5xl font-semibold text-primary">
                            Hospitalité Consciente
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Nous ne louons pas simplement des murs ; nous valorisons un patrimoine.
                            Chaque séjour finance la rénovation durable et soutient l'artisanat local.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Éco-Rénovation", icon: "🌿", desc: "Matériaux locaux et durables pour réduire l'empreinte carbone et sublimer le bâti." },
                            { title: "Revenu Intelligent", icon: "📊", desc: "Algorithmes de prix dynamiques pour maximiser le rendement propriétaire toute l'année." },
                            { title: "Conciergerie 2.0", icon: "✨", desc: "Expériences ultra-personnalisées : chefs privés, écotourisme et bien-être." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-[2rem] p-10 space-y-6 squishy hover:bg-white/90 transition-all border-white/60">
                                <div className="w-16 h-16 bg-secondary/30 rounded-2xl rotate-3 flex items-center justify-center text-3xl shadow-sm">
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
            <section id="design" className="py-24 bg-primary text-primary-foreground relative rounded-[3rem] mx-4 my-12 overflow-hidden shadow-2xl">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/30 text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm">
                            Transformation
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
                            Du Potentiel à <br />l'Exceptionnel
                        </h2>
                        <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-lg">
                            Notre signature "Modernisme Tropical" transforme des biens standards en actifs haute performance.
                            Lumière, fluidité et textures organiques pour une expérience client inoubliable.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Augmentation du TJM jusqu'à 40%",
                                "Gestion de projet de A à Z",
                                "Mobilier sourcé durablement"
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-4 font-medium text-lg">
                                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-md">
                                        <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                                    </div>
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Button size="lg" variant="secondary" className="rounded-full text-primary font-bold shadow-lg h-14 px-10 text-lg transition-transform hover:scale-105">
                                <Link href="/contact">Demander une Estimation</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="glass-card p-4 rounded-[2.5rem] bg-white/10 border-white/20 shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700">
                            <BeforeAfterSlider />
                        </div>
                        <p className="text-center text-sm mt-6 text-primary-foreground/60 italic">
                            Glissez pour voir la magie de la rénovation
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
