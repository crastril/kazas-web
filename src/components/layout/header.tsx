import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full glass border-b-0">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-heading text-xl font-bold tracking-tight">
                        KAZAS
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Accueil
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Collection
                    </Link>
                    <Link href="/#valeurs" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Valeurs
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Action Button */}
                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm" asChild className="hidden md:flex" aria-label="Espace Propriétaires">
                        <Link href="/audit">
                            Espace Propriétaire
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle (Simplified for MVP, usually triggers a Sheet/Drawer) */}
                {/* We will leave this space for a real mobile menu component later */}
            </div>
        </header>
    );
}
