"use server";

import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
    success?: boolean;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string;
} | null;

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
    // Validate fields
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
        };
    }

    // Simulate server delay/email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here we would use Resend or Nodemailer to actually send the email
    console.log("Contact Form Submitted:", validatedFields.data);

    return {
        success: true,
        message: "Thank you! We have received your message and will contact you shortly.",
    };
}
