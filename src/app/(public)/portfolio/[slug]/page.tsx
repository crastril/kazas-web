import Link from "next/link";

import Image from "next/image";
import { notFound } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Car, Waves, Utensils, Star, Share, ArrowLeft, ExternalLink } from "lucide-react";
import { Villa } from "@/components/features/portfolio/villa-card";



interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(props: PageProps) {
    const params = await props.params;
    const supabase = await createClient();
    const { data: villa } = await supabase
        .from("villas")
        .select("title, description")
        .eq("slug", params.slug)
        .single();

    if (!villa) return { title: "Villa Not Found" };

    return {
        title: `${villa.title} | Kazas Luxury Rentals`,
        description: villa.description,
    };
}

export default async function VillaDetailPage(props: PageProps) {
    const params = await props.params;
    const supabase = await createClient();
    const { data: villa, error } = await supabase
        .from("villas")
        .select("*")
        .eq("slug", params.slug)
        .single();

    if (error || !villa) {
        notFound();
    }

    const typedVilla = villa as Villa & { amenities: string[] };
    const mainImage = typedVilla.images[0];
    const galleryImages = typedVilla.images.slice(1);

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src={mainImage}
                    alt={typedVilla.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white w-full">
                    <div className="container">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center text-sm font-medium hover:underline mb-4 text-white/80"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collection
                        </Link>
                        <h1 className="font-heading text-4xl md:text-6xl font-bold mb-2">{typedVilla.title}</h1>
                        <p className="flex items-center text-lg md:text-xl font-light opacity-90">
                            <MapPin className="w-5 h-5 mr-2" /> {typedVilla.location}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container grid md:grid-cols-3 gap-12 py-12">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-12">

                    {/* Description */}
                    <section>
                        <h2 className="font-heading text-2xl font-semibold mb-4">About this Villa</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {typedVilla.description}
                            <br /><br />
                            Escape to paradise in this stunning property, meticulously managed by Kazas to ensure a seamless 5-star experience.
                        </p>
                    </section>

                    {/* Amenities */}
                    <section>
                        <h2 className="font-heading text-2xl font-semibold mb-6">Amenities</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {typedVilla.amenities && Array.isArray(typedVilla.amenities) ? (
                                typedVilla.amenities.map((amenity: string) => (
                                    <div key={amenity} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="bg-muted p-2 rounded-full">
                                            {/* Simple icon mapping logic or default star */}
                                            {amenity.includes("Pool") ? <Waves className="w-4 h-4" /> :
                                                amenity.includes("Wi-Fi") ? <Wifi className="w-4 h-4" /> :
                                                    amenity.includes("Kitchen") ? <Utensils className="w-4 h-4" /> :
                                                        <Star className="w-4 h-4" />}
                                        </div>
                                        <span>{amenity}</span>
                                    </div>
                                ))
                            ) : (
                                <p>See Airbnb listing for full amenities.</p>
                            )}
                        </div>
                    </section>

                    {/* Gallery Grid (if more images exist) */}
                    {galleryImages.length > 0 && (
                        <section>
                            <h2 className="font-heading text-2xl font-semibold mb-6">Gallery</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {galleryImages.map((img, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden">
                                        <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                </div>

                {/* Booking Sidebar (Sticky) */}
                <div className="relative">
                    <div className="sticky top-24 border rounded-xl p-6 shadow-lg bg-card space-y-6">
                        <div className="flex items-end justify-between border-b pb-6">
                            <div>
                                <p className="text-sm text-muted-foreground">Starting from</p>
                                <span className="font-heading text-3xl font-bold">€{typedVilla.price_per_night}</span>
                                <span className="text-muted-foreground">/night</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium">
                                <Star className="w-4 h-4 fill-primary text-primary" /> 4.98
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-2">
                                <p>✨ <strong>Managed by Kazas</strong></p>
                                <p className="text-muted-foreground">Professional cleaning, concierge support, and premium linens included.</p>
                            </div>

                            <Button size="lg" className="w-full text-lg h-12" asChild>
                                <a
                                    href={typedVilla.airbnb_url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    Book on Airbnb <ExternalLink className="w-4 h-4" />
                                </a>
                            </Button>

                            <p className="text-xs text-center text-muted-foreground">
                                You will be redirected to our trusted partner platform for secure booking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
