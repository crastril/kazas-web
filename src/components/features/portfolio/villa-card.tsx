import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

export interface Villa {
    id: string;
    slug: string;
    title: string;
    location: string;
    price_per_night: number;
    images: string[];
    description: string;
    airbnb_url?: string;
}

interface VillaCardProps {
    villa: Villa;
}

export function VillaCard({ villa }: VillaCardProps) {
    return (
        <Card className="group overflow-hidden border-0 bg-transparent shadow-none hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                    src={villa.images[0] || "/images/hero-villa.png"}
                    alt={villa.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                <div className="absolute bottom-4 left-4 text-white">
                    <p className="flex items-center gap-1 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {villa.location}
                    </p>
                </div>
            </div>

            <CardContent className="p-4 pt-6 space-y-2">
                <h3 className="font-heading text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
                    {villa.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                    {villa.description}
                </p>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="font-heading text-xl font-bold">€{villa.price_per_night}</span>
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href={`/portfolio/${villa.slug}`}>
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
