"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-pattern-1";
import Link from "next/link";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    number?: number;
}

interface BentoGridProps {
    items: BentoItem[];
    className?: string;
}

interface BentoGridItemProps {
    title: string;
    description: string;
    className?: string;
    number?: number;
}

const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
        number: 10,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: ["Storage", "CDN"],
        colSpan: 2,
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
];

function BentoGrid({ items = itemsSample, className }: BentoGridProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto", className)}>
            {items.map((item, index) => (
                <BentoGridItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    className={cn(
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : ""
                    )}
                    number={item.number}
                />
            ))}
        </div>
    );
}

function BentoGridItem({
    title,
    description,
    className,
    number,
}: BentoGridItemProps) {
    return (
        <div className={cn(
            "row-span-1 rounded-xl group/bento hover:-translate-y-1 transition-all duration-300",
            className
        )}>
            <div className="relative w-full h-full bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <DotPattern width={4} height={4} className="opacity-50" />
                
                {/* Corner Squares */}
                <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-neutral-200" />
                <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-neutral-200" />
                <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-neutral-200" />
                <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-neutral-200" />

                {/* Content */}
                <div className="relative z-10 p-8 bg-white/80 backdrop-blur-sm space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-poppins text-xl text-neutral-800">
                            {title}
                        </h3>
                        <Link href="/contact">
                            <div className="bg-neutral-100 rounded-lg p-2 hover:bg-neutral-200 transition-colors duration-200">
                                <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    
                    <p className="font-roboto text-neutral-600 leading-relaxed">
                        {description}
                    </p>

                    <div className="pt-2">
                        <button className="text-sm text-neutral-600 hover:text-neutral-900 group/button flex items-center space-x-1">
                            <span className="group-hover/button:underline">Learn more</span>
                            <span className="transform transition-transform group-hover/button:translate-x-1">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BentoGrid, BentoGridItem };
