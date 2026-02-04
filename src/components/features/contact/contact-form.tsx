"use client";

import { useActionState } from "react";
import { submitContact, ContactState } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useEffect } from "react";

const initialState: ContactState = {
    message: "",
    errors: {},
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContact, initialState);

    useEffect(() => {
        if (state?.success) {
            toast.success(state.message);
        } else if (state?.success === false && state?.message) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <form action={formAction} className="space-y-6 bg-card p-8 rounded-xl shadow-lg border">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    name="name"
                    placeholder="Jean Dupont"
                    defaultValue=""
                    aria-invalid={!!state?.errors?.name}
                />
                {state?.errors?.name && (
                    <p className="text-sm text-destructive">{state.errors.name[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jean@example.com"
                    defaultValue=""
                    aria-invalid={!!state?.errors?.email}
                />
                {state?.errors?.email && (
                    <p className="text-sm text-destructive">{state.errors.email[0]}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="I'm interested in renting a villa..."
                    className="min-h-[120px]"
                    defaultValue=""
                    aria-invalid={!!state?.errors?.message}
                />
                {state?.errors?.message && (
                    <p className="text-sm text-destructive">{state.errors.message[0]}</p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
