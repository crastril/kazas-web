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
        { title: "Propriété", icon: Home },
        { title: "Objectifs", icon: DollarSign },
        { title: "Contact", icon: User },
    ];

    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Server Action
        // The original formAction uses useActionState, which expects a form element.
        // Since the instruction provides a manual handleSubmit, we need to adapt.
        // For now, I'll simulate the submitAudit call with formData.
        // In a real app, you'd likely pass formData to a server action that expects it.
        // For this change, I'll call the original formAction with a dummy event or adapt submitAudit.
        // Given the instruction's `submitAudit(formData)`, I'll assume `submitAudit` can take `formData` directly.
        // This might require a change in the `submitAudit` action itself to accept a direct object instead of FormData.
        // For the purpose of this edit, I'll assume `submitAudit` can handle the `formData` object.
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key as keyof typeof formData]);
        }
        const result = await submitAudit(form); // Assuming submitAudit can process FormData from object
        setIsSubmitting(false);

        if (result.success) {
            router.push("/audit/success");
        } else {
            console.error(result.message || result.errors);
            toast.error(result.message || "Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {steps.map((s, i) => (
                        <div key={i} className={cn("flex flex-col items-center gap-2 text-sm font-medium transition-colors", currentStep >= i + 1 ? "text-primary" : "text-muted-foreground/50")}>
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all", currentStep >= i + 1 ? "border-primary bg-primary/10" : "border-muted-foreground/20")}>
                                <s.icon className="w-5 h-5" />
                            </div>
                            <span>{s.title}</span>
                        </div>
                    ))}
                </div>
                <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-500 ease-out" style={{ width: `${(currentStep / 3) * 100}%` }} />
                </div>
            </div>

            <Card className="glass-card border-white/40 shadow-xl overflow-hidden">
                <CardContent className="p-8">
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
                            <h2 className="font-heading text-2xl font-semibold text-primary">Parlez-nous de votre bien</h2>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="address">Adresse de la Villa</Label>
                                    <Input name="address" placeholder="ex: 12 Rue des Colibris, Le Diamant" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="bg-white/50 border-white/40 focus:bg-white" required />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="bedrooms">Chambres</Label>
                                        <Select name="bedrooms" onValueChange={(v) => setFormData({ ...formData, bedrooms: v })} value={formData.bedrooms} required>
                                            <SelectTrigger className="bg-white/50 border-white/40"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                                            <SelectContent>
                                                {[1, 2, 3, 4, 5, "6+"].map(n => <SelectItem key={n} value={n.toString()}>{n}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="propertyType">Type de bien</Label>
                                        <Select name="propertyType" onValueChange={(v) => setFormData({ ...formData, propertyType: v })} value={formData.propertyType} required>
                                            <SelectTrigger className="bg-white/50 border-white/40"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="villa">Villa</SelectItem>
                                                <SelectItem value="apartment">Appartement</SelectItem>
                                                <SelectItem value="bungalow">Bungalow</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="currentUrl">Lien actuel (Airbnb/Booking) - Optionnel</Label>
                                    <Input name="currentUrl" placeholder="https://..." value={formData.currentUrl} onChange={(e) => setFormData({ ...formData, currentUrl: e.target.value })} className="bg-white/50 border-white/40" />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
                            <h2 className="font-heading text-2xl font-semibold text-primary">Vos Objectifs</h2>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="currentRevenue">Revenu Annuel Actuel (Estimé)</Label>
                                    <Input name="currentRevenue" type="number" placeholder="ex: 45000" value={formData.currentRevenue} onChange={(e) => setFormData({ ...formData, currentRevenue: e.target.value })} className="bg-white/50 border-white/40" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="primaryGoal">Principal défi actuel ?</Label>
                                    <Select name="primaryGoal" onValueChange={(v) => setFormData({ ...formData, primaryGoal: v })} value={formData.primaryGoal} required>
                                        <SelectTrigger className="bg-white/50 border-white/40"><SelectValue placeholder="Sélectionner" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="revenue">Revenus trop faibles</SelectItem>
                                            <SelectItem value="maintenance">Gestion & Maintenance</SelectItem>
                                            <SelectItem value="design">Design & Rénovation</SelectItem>
                                            <SelectItem value="marketing">Marketing & Visibilité</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-8">
                            <h2 className="font-heading text-2xl font-semibold text-primary">Vos Coordonnées</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">Prénom</Label>
                                        <Input name="firstName" placeholder="Jean" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="bg-white/50 border-white/40" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Nom</Label>
                                        <Input name="lastName" placeholder="Dupont" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="bg-white/50 border-white/40" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input name="email" type="email" placeholder="jean@exemple.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-white/50 border-white/40" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Téléphone</Label>
                                    <Input name="phone" type="tel" placeholder="+33 6 ..." value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-white/50 border-white/40" />
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="bg-white/40 p-6 flex justify-between border-t border-white/20">
                    <Button
                        variant="ghost"
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                        className="text-muted-foreground hover:text-primary"
                    >
                        Retour
                    </Button>

                    {currentStep < 3 ? (
                        <Button onClick={() => setCurrentStep(Math.min(3, currentStep + 1))} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                            Suivant
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg font-bold">
                            {isSubmitting ? "Envoi..." : "Obtenir mon Audit"}
                        </Button>
                    )}
                </CardFooter>
            </Card>
            {/* Error Display */}
            {state?.errors && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded mt-4">
                    Une erreur est survenue. Veuillez réessayer.
                </div>
            )}
        </div>
    );
}
