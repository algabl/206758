import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import type { Field } from "@/types";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export function DataSourceFieldsCollapsible({
    title,
    fields,
    onSelect,
    searchQuery,
}: {
    title: string;
    fields: Record<string, Field>;
    onSelect?: (field: string) => void;
    searchQuery?: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const filteredFields = Object.entries(fields).filter(([key, field]) => {
        return key.toLowerCase().includes(searchQuery?.toLowerCase() || "") || field.title?.toLowerCase().includes(searchQuery?.toLowerCase() || "");
    });

    if (filteredFields.length === 0) {
        return null; // No fields match the search query
    }

    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-2 border rounded-lg bg-muted/50 shadow-sm">
            <CollapsibleTrigger asChild>
                <button className="flex items-center w-full px-4 py-2 text-left font-semibold text-primary hover:bg-muted/80 transition-colors rounded-t-lg bg-muted/80">
                    <span className="me-2">{isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}</span>
                    <span>{title}</span>
                </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="divide-y">
                    {filteredFields.map(([key, field]) => (
                        <div
                            key={key}
                            className="flex items-center justify-between px-4 py-2 hover:bg-accent/30 cursor-pointer transition-colors group"
                            onClick={() => onSelect?.(`${title}.${key}`)}
                        >
                            <div className="flex flex-col">
                                <span className="font-medium text-primary group-hover:underline">{key}</span>
                                <span className="text-xs text-muted-foreground">{field.title}</span>
                            </div>
                            <span className="ml-2 text-xs text-accent-foreground bg-accent px-2 py-0.5 rounded-full">Select</span>
                        </div>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}
