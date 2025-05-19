import type { Field, Node } from "@/types";
import { useEffect, useState } from "react";
import { Database, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { useGraph } from "@/context/useGraph";
import { DataSourceFieldsCollapsible } from "./DataSourceFieldsCollapsible";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CLIENT_ORG_PROPERTIES } from "@/constants";

export function AvantosField({ fieldKey, field, node }: { fieldKey: string; field: Field; node: Node }) {
    const [prefilledField, setPrefilledField] = useState<string | null>(null);
    const { getFieldPrefillOptions } = useGraph();
    const prefillOptions = getFieldPrefillOptions(node);
    const handleClear = () => {
        setPrefilledField(null);
    };
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSelect = (selectedField: string) => {
        setPrefilledField(selectedField);
    };

    useEffect(() => {
        // This is where we would post to the API to set the prefilled field for the form
        // console.log("Prefilled field changed:", prefilledField);
    }, [prefilledField]);

    if (prefilledField) {
        return (
            <div className="m-2 gap-2 px-3 py-2 rounded-md w-full justify-start flex items-center bg-secondary text-secondary-foreground font-medium text-sm select-none">
                <Database className="w-5 h-5 text-primary mr-2" />
                <span>
                    {field.title}: {prefilledField}
                </span>
                <X onClick={handleClear} className="ml-auto cursor-pointer" />
            </div>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary" className="m-2 gap-2 px-3 py-2 rounded-md w-full justify-start">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="font-medium text-sm">{fieldKey}</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="h-screen grid grid-rows-[auto_auto_1fr_auto] gap-0 overflow-y-auto">
                <DialogHeader className="pt-5">
                    <DialogTitle>Select a data element to map</DialogTitle>
                </DialogHeader>
                <Input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="mb-4" />
                <div className="overflow-y-auto">
                    <DataSourceFieldsCollapsible
                        title="Action Properties"
                        fields={CLIENT_ORG_PROPERTIES}
                        onSelect={handleSelect}
                        searchQuery={searchQuery}
                    />
                    <DataSourceFieldsCollapsible
                        title="Client Organisation Properties"
                        fields={CLIENT_ORG_PROPERTIES}
                        onSelect={handleSelect}
                        searchQuery={searchQuery}
                    />
                    {prefillOptions.map((option) => {
                        const properties = option?.template?.field_schema?.properties;
                        if (!properties) return null;
                        return (
                            <DataSourceFieldsCollapsible
                                title={option.node.data.name}
                                fields={properties}
                                onSelect={handleSelect}
                                searchQuery={searchQuery}
                                key={option.node.id}
                            />
                        );
                    })}
                </div>
                {/* <DialogFooter>
                    <Button variant="outline" type="submit">
                        Select
                    </Button>
                </DialogFooter> */}
            </DialogContent>
        </Dialog>
    );
}
