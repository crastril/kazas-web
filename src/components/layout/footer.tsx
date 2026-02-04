import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40 py-12">
            <div className="container grid gap-8 md:grid-cols-4">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="font-heading text-lg font-bold">
                        KAZAS
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                        Premium Villa Management & Luxury Rentals in Martinique. Experience the true "Luxe Caribéen".
                    </p>
                </div>

                <div className="grid gap-4">
                    <h3 className="text-sm font-semibold">Discovery</h3>
                    <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary">
                        Our Villas
                    </Link>
                    <Link href="/#services" className="text-sm text-muted-foreground hover:text-primary">
                        Concierge
                    </Link>
                    <Link href="/#renovation" className="text-sm text-muted-foreground hover:text-primary">
                        Renovation
                    </Link>
                </div>

                <div className="grid gap-4">
                    <h3 className="text-sm font-semibold">Company</h3>
                    <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                        Contact Us
                    </Link>
                    <Link href="/audit" className="text-sm text-muted-foreground hover:text-primary">
                        For Owners
                    </Link>
                    <Link href="/legal" className="text-sm text-muted-foreground hover:text-primary">
                        Legal Notice
                    </Link>
                </div>
            </div>
            <div className="container mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
                © 2026 Kazas. All rights reserved.
            </div>
        </footer>
    );
}
