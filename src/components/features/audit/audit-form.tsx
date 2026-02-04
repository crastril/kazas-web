"use client";

import { useActionState, useState } from "react";
import { submitAudit, AuditState } from "@/actions/audit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ChevronRight, ChevronLeft, MapPin, Home, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const initialState: AuditState = {
    message: "",
    errors: {},
};

export function AuditForm() {
    const [state, formAction, isPending] = useActionState(submitAudit, initialState);
    const [step, setStep] = useState(0);
    const router = useRouter();

    // Basic client-side field tracking for step validation could be added here
    // For MVP, letting server validate final submit, but visual steps are managed below.

    useEffect(() => {
        if (state?.success) {
            router.push("/audit/success");
        } else if (state?.success === false && state?.message) {
            toast.error(state.message);
        }
    }, [state, router]);

    const steps = [
        { title: "Location", icon: MapPin },
        { title: "Property", icon: Home },
        { title: "Contact", icon: User },
    ];

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        // In a real app, strict step validation would happen here
        setStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        setStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -z-10" />
                {steps.map((s, idx) => {
                    const isActive = idx === step;
                    const isCompleted = idx < step;
                    return (
                        <div key={idx} className="flex flex-col items-center bg-background px-2">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${isActive || isCompleted ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground text-muted-foreground"
                                    }`}
                            >
                                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <s.icon className="w-5 h-5" />}
                            </div>
                            <span className={`text-xs mt-2 font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                                {s.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            <form action={formAction} className="bg-card p-8 rounded-xl border shadow-lg space-y-6">
                {/* Step 0: Location */}
                {step === 0 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="space-y-2">
                            <Label htmlFor="propertyAddress">Property Address/Location</Label>
                            <Input name="propertyAddress" placeholder="e.g. Anses-d'Arlet, Martinique" required />
                            <p className="text-xs text-muted-foreground">Approximate location is fine validation.</p>
                        </div>
                    </div>
                )}

                {/* Step 1: Property Details */}
                {step === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="propertyType">Property Type</Label>
                                <Select name="propertyType" defaultValue="villa">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="villa">Villa</SelectItem>
                                        <SelectItem value="apartment">Apartment</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="bedrooms">Bedrooms</Label>
                                <Input type="number" name="bedrooms" min="1" defaultValue="3" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="currentRevenue">Current Annual Revenue (Optional)</Label>
                            <Input name="currentRevenue" placeholder="e.g. €40,000" />
                        </div>
                    </div>
                )}

                {/* Step 2: Contact Info (Final) */}
                {step === 2 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                        <div className="space-y-2">
                            <Label htmlFor="ownerName">Full Name</Label>
                            <Input name="ownerName" placeholder="Jean Dupont" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ownerEmail">Email</Label>
                            <Input name="ownerEmail" type="email" placeholder="jean@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="ownerPhone">Phone (Optional)</Label>
                            <Input name="ownerPhone" type="tel" placeholder="+596..." />
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4 border-t">
                    {step > 0 ? (
                        <Button variant="outline" onClick={handlePrev} disabled={isPending}>
                            <ChevronLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                    ) : <div />}

                    {step < steps.length - 1 ? (
                        <Button onClick={handleNext}>
                            Next Step <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    ) : (
                        <Button type="submit" disabled={isPending} className="min-w-[140px]">
                            {isPending ? "Analyzing..." : "Get Free Audit"}
                        </Button>
                    )}
                </div>

                {/* Error Display */}
                {state?.errors && (
                    <div className="bg-destructive/10 text-destructive text-sm p-3 rounded">
                        Please check the fields and try again.
                    </div>
                )}
            </form>
        </div>
    );
}
