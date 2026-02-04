import { ContactForm } from "@/components/features/contact/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="container py-24 min-h-screen">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="font-heading text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
                        <p className="text-muted-foreground text-lg">
                            Whether you are looking for your next dream vacation or need expert management for your property, our team is here to assist you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Phone</h3>
                                <p className="text-muted-foreground">+596 696 00 00 00</p>
                                <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-muted-foreground">contact@kazas.mq</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Office</h3>
                                <p className="text-muted-foreground">
                                    34 Rue de la Liberté<br />
                                    Fort-de-France, Martinique
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
