import { ShieldCheck, Star } from "lucide-react";

export function TrustBadges() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-80">
            {/* Superhost Badge Mockup */}
            <div className="flex items-center gap-2">
                <div className="relative">
                    <ShieldCheck className="w-8 h-8 text-rose-500" />
                    <Star className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider">Airbnb</span>
                    <span className="text-sm font-semibold">Superhost</span>
                </div>
            </div>

            {/* VRBO Premier Host */}
            <div className="flex items-center gap-2">
                <div className="bg-blue-900 text-white p-1 rounded-full">
                    <span className="font-heading font-bold text-xs px-1">vrbo</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-wider">Premier</span>
                    <span className="text-sm font-semibold">Host 2024</span>
                </div>
            </div>

            {/* Reviews */}
            <div className="flex items-center gap-3">
                <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />)}
                </div>
                <span className="font-bold">4.98/5</span>
                <span className="text-sm text-muted-foreground">(200+ Reviews)</span>
            </div>
        </div>
    );
}
