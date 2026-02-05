import { AuditForm } from "@/components/features/audit/audit-form";
import { Sparkles } from "lucide-react";

export default function AuditPage() {
    return (
        <div className="container py-24 min-h-screen bg-muted/10">
            <div className="text-center space-y-6 mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>Audit Gratuit pour Propriétaires</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                    Votre Villa, <span className="text-secondary italic">Optimisée</span>.
                </h1>

                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Recevez une analyse complète de la performance de votre bien.
                    Augmentez vos revenus et libérez-vous de la gestion quotidienne.
                </p>
            </div>

            <AuditForm />

            <div className="mt-16 text-center text-sm text-muted-foreground">
                <p>Trusted by 50+ Villa Owners in Martinique</p>
                <div className="flex justify-center gap-4 mt-4 opacity-50 grayscale">
                    {/* Simple placeholders for logos if needed */}
                </div>
            </div>
        </div>
    );
}
