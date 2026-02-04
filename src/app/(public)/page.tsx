import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/features/landing/before-after-slider";
import { TrustBadges } from "@/components/features/landing/trust-badges";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-villa.png"
                        alt="Luxury Villa in Martinique at Golden Hour"
                        fill
                        className="object-cover"
                        priority // Critical for LCP < 2.5s
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/ejRfwAJzAO9N4h7ZAAAAABJRU5ErkJggg=="
                    />
                    <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                </div>

                {/* Hero Content */}
                <div className="container relative z-10 text-center text-white space-y-8">
                    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg">
                        Experience the True <br className="hidden md:block" />
                        <span className="text-white italic">Luxe Caribéen</span>
                    </h1>

                    <div className="py-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-backwards">
                        <TrustBadges />
                    </div>

                    <p className="max-w-xl mx-auto text-lg md:text-xl text-white/90 font-light drop-shadow-md">
                        Premium Villa Management & Curated Luxury Rentals in Martinique.
                        Where French elegance meets Caribbean soul.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Button size="lg" className="min-w-[180px] text-lg bg-white text-black hover:bg-white/90 border-0" asChild>
                            <Link href="/portfolio">
                                Explore Villas
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="min-w-[180px] text-lg bg-black/20 border-white text-white hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
                            <Link href="/audit">
                                For Owners
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Showcase & Renovation */}
            <section id="services" className="py-24 bg-background">
                <div className="container space-y-24">
                    {/* Intro */}
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
                            Elevating Property Value
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Kazas goes beyond management. We transform properties into high-performing assets through design, hospitality, and revenue intelligence.
                        </p>
                    </div>

                    {/* Renovation Spotlight (Before/After) */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="font-heading text-3xl font-medium">Renovation & Interior Design</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Our in-house design team specializes in "Tropical Modernism". We refresh tired interiors to meet international luxury standards, increasing ADR (Average Daily Rate) by up to 40%.
                            </p>
                            <ul className="space-y-2 font-medium">
                                <li className="flex items-center gap-2">
                                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                    <span>Concept to Completion Project Management</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                    <span>Local Artisan Partnerships</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
                                    <span>Sustainable Materials</span>
                                </li>
                            </ul>
                            <Button variant="outline" asChild>
                                <Link href="/contact">Request a Consultation</Link>
                            </Button>
                        </div>
                        <div className="w-full max-w-lg mx-auto">
                            <BeforeAfterSlider />
                            <p className="text-center text-xs text-muted-foreground mt-2 italic">Drag slider to compare</p>
                        </div>
                    </div>

                    {/* Other Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 pt-12 border-t">
                        {[
                            { title: "Revenue Management", icon: "📈", desc: "Dynamic pricing algorithms ensuring high occupancy rates during all seasons." },
                            { title: "5-Star Concierge", icon: "🥂", desc: "From private chefs to boat charters, we handle every guest request 24/7." },
                            { title: "Asset Protection", icon: "🛡️", desc: "Rigorous maintenance schedules and verified guest vetting for peace of mind." }
                        ].map((service) => (
                            <div key={service.title} className="p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors text-center space-y-4">
                                <div className="text-4xl">{service.icon}</div>
                                <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
