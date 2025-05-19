import { useGraph } from "../context/useGraph";
import type { Node } from "../types";

export function Form({ node }: { node: Node }) {
    const { graph, getTemplate } = useGraph();
    const template = getTemplate(node.data.component_id);

    return <p>{node.id}</p>;
    return <>{node.data}</>;
}
