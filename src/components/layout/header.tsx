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
                        Home
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Villas
                    </Link>
                    {/* Services link likely anchors to home section for MVP or a separate page. Architecture implies separate page or section. 
              Let's point to /#services for now based on Landing Page story. */}
                    <Link href="/#services" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Services
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Action Button */}
                <div className="flex items-center gap-4">
                    {/* Placeholder for "Audit" CTA or Mobile Menu */}
                    <Button variant="default" size="sm" asChild className="hidden md:flex">
                        <Link href="/audit">
                            Owner Audit
                        </Link>
                    </Button>

                    {/* Mobile Menu Toggle (Simplified for MVP, usually triggers a Sheet/Drawer) */}
                    {/* We will leave this space for a real mobile menu component later */}
                </div>
            </div>
        </header>
    );
}
