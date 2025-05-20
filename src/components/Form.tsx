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
            <div className="flex items-between gap-5 justify-start mb-3">
                <Switch id="prefill-swtich" checked={checked} onCheckedChange={setChecked} />
                <Label htmlFor="prefill-swtich">Prefill fields for this form</Label>
            </div>

            <div className={checked ? "" : "hidden"}>
                {Object.keys(template.field_schema.properties).map((key: string) => {
                    return <AvantosField key={key} fieldKey={key} node={node} />;
                })}
            </div>
        </>
    );
}
