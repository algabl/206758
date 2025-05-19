import type { Field, Node } from "@/types";
import { useState } from "react";
import { Database, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useGraph } from "@/context/useGraph";

export function AvantosField({ field, node }: { field: Field; node: Node }) {
    const [prefilledField, setPrefilledField] = useState<string | null>(null);
    const { getFieldPrefillOptions } = useGraph();
    const prefillOptions = getFieldPrefillOptions(node);
    console.log("Prefill options:", prefillOptions);
    const handleClear = () => {
        setPrefilledField(null);
    };

    if (prefilledField) {
        return (
            <div className="flex">
                <span>
                    {field.title}: {prefilledField}
                </span>
                <X onClick={handleClear} />
            </div>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex">
                    <Database />
                    <span>{field.title}</span>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Select a data element to map</DialogTitle>
                </DialogHeader>
                <div>
                    <p>Put the options here</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
