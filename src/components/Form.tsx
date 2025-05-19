import { useState } from "react";
import { useGraph } from "../context/useGraph";
import type { Node } from "../types";
import { AvantosField } from "./AvantosField";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function Form({ node }: { node: Node }) {
    const { getTemplate } = useGraph();
    const template = getTemplate(node.data.component_id);
    const [checked, setChecked] = useState(false);
    return (
        <>
            <div className="flex items-center">
                <Switch id="prefill-swtich" checked={checked} onCheckedChange={setChecked} className="mb-4" />
                <Label htmlFor="prefill-swtich">Prefill</Label>
            </div>
            {checked && (
                <>
                    {Object.keys(template.field_schema.properties).map((key: string) => {
                        const field = template.field_schema.properties[key];
                        return <AvantosField key={key} fieldKey={key} field={field} node={node} />;
                    })}
                </>
            )}
        </>
    );
}
