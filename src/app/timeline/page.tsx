"use client";

import VerticalAlternatingTimeline from "@/components/Timeline";

export default function Timeline() {
    return (
        <>
           <div className="h-full w-full md:max-w-2xl">
            <VerticalAlternatingTimeline />
           </div>
        </>
    );
}