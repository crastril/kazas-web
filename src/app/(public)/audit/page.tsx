import { AuditForm } from "@/components/features/audit/audit-form";

export default function AuditPage() {
    return (
        <div className="container py-24 min-h-screen bg-muted/10">
            <div className="text-center space-y-4 mb-12">
                <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
                    Unlock Your Villa's Revenue Potential
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Get a comprehensive performance audit from Martinique's luxury experts.
                    Discover how renovation and dynamic pricing can increase your yield by 40%.
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
