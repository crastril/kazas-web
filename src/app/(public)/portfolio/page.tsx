import { createClient } from "../../../utils/supabase/server";
import { VillaCard, Villa } from "@/components/features/portfolio/villa-card";



export default async function PortfolioPage() {
    const supabase = await createClient();
    const { data: villas, error } = await supabase
        .from("villas")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching villas:", error);
        return <div>Error loading properties.</div>;
    }

    return (
        <div className="container py-24 min-h-screen">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
                <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-primary">
                    Notre Collection
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg">
                    Découvrez notre sélection exclusive de villas en Martinique. Des joyaux en bord de mer aux retraites sur les hauteurs.
                </p>
            </div>

            {!villas || villas.length === 0 ? (
                <div className="text-center py-24 text-muted-foreground">
                    Aucune villa trouvée. Veuillez revenir bientôt.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-12">
                    {villas.map((villa) => (
                        <VillaCard key={villa.id} villa={villa} />
                    ))}
                </div>
            )}
        </div>
    );
}
