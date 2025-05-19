import { useGraph } from "../context/useGraph";
import type { Node } from "../types";
import { AvantosField } from "./AvantosField";

export function Form({ node }: { node: Node }) {
    const { getTemplate } = useGraph();
    const template = getTemplate(node.data.component_id);
    return (
        <>
            {Object.keys(template.field_schema.properties).map((key) => {
                const field = template.field_schema.properties[key];
                return <AvantosField key={key} field={field} node={node} />;
            })}
        </>
    );
}
