import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function AuditSuccessPage() {
    return (
        <div className="container py-32 min-h-screen flex flex-col items-center text-center space-y-6">
            <div className="bg-primary/10 p-6 rounded-full text-primary mb-4 animate-in zoom-in spin-in-12 duration-500">
                <CheckCircle2 className="w-16 h-16" />
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight">
                Request Received
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
                Thank you for submitting your property details. Our team is already analyzing your location and comparable listings.
            </p>

            <div className="bg-card border p-6 rounded-xl max-w-lg w-full space-y-4 shadow-sm">
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <ol className="text-left space-y-3 text-sm text-muted-foreground list-decimal list-inside">
                    <li>We calculate your property's potential ADR (Average Daily Rate).</li>
                    <li>We identify renovation opportunities to boost value.</li>
                    <li>You will receive a personalized Revenue Report via email within 24 hours.</li>
                </ol>
            </div>

            <div className="pt-8">
                <Button size="lg" asChild>
                    <Link href="/">Back to Home</Link>
                </Button>
            </div>
        </div>
    );
}
