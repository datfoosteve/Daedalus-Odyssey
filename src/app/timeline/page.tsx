'use client';

import VerticalAlternatingTimeline from "@/components/Timeline";

const Timeline: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="h-full w-full md:max-w-2xl">
            <VerticalAlternatingTimeline />
          </div>
        </div>
    );
}

export default Timeline;