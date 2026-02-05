"use client";

import { useState } from "react";
import Image from "next/image";
import { GripVertical } from "lucide-react";

export function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        // Basic mouse/touch handling could be added here for drag
        // For MVP, using the range input overlay is more robust and accessible
    };

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border">
            {/* After Image (Base) */}
            <Image
                src="/images/renovation-after.png"
                alt="After Renovation"
                fill
                className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                After
            </div>

            {/* Before Image (Overlay with Clip) */}
            <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src="/images/renovation-before.png"
                    alt="Before Renovation"
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Before
                </div>
            </div>

            {/* Slider Handle Line */}
            <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-black">
                    <GripVertical size={20} />
                </div>
            </div>

            {/* Invisible Range Input for Control */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Comparison Slider"
            />
        </div>
    );
}
