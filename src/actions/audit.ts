"use server";

import { z } from "zod";
import { createClient } from "../utils/supabase/server";

const AuditSchema = z.object({
    propertyAddress: z.string().min(5, "Address must be at least 5 characters"),
    propertyType: z.enum(["villa", "apartment", "other"]),
    bedrooms: z.coerce.number().min(1, "Must have at least 1 bedroom"),
    currentRevenue: z.string().optional(),
    ownerName: z.string().min(2, "Name must be at least 2 characters"),
    ownerEmail: z.string().email("Invalid email address"),
    ownerPhone: z.string().optional(),
});

export type AuditState = {
    success?: boolean;
    errors?: {
        [key: string]: string[];
    };
    message?: string;
} | null;

export async function submitAudit(prevState: AuditState, formData: FormData): Promise<AuditState> {
    const rawData = {
        propertyAddress: formData.get("propertyAddress"),
        propertyType: formData.get("propertyType"),
        bedrooms: formData.get("bedrooms"),
        currentRevenue: formData.get("currentRevenue"),
        ownerName: formData.get("ownerName"),
        ownerEmail: formData.get("ownerEmail"),
        ownerPhone: formData.get("ownerPhone"),
    };

    const validatedFields = AuditSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please calculate the form accurately.",
        };
    }

    const { data, error } = await (await createClient())
        .from("audit_leads")
        .insert([
            {
                property_address: validatedFields.data.propertyAddress,
                property_type: validatedFields.data.propertyType,
                bedrooms: validatedFields.data.bedrooms,
                current_revenue: validatedFields.data.currentRevenue,
                owner_name: validatedFields.data.ownerName,
                owner_email: validatedFields.data.ownerEmail,
                owner_phone: validatedFields.data.ownerPhone,
            },
        ]);

    if (error) {
        console.error("Database Insert Error:", error);
        return {
            success: false,
            message: "Failed to submit audit. Please try again.",
        };
    }

    // Simulate analysis calculation delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return {
        success: true,
        message: "Audit Request Received",
    };
}
