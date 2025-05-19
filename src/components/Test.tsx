import { useGraph } from "../context/useGraph";
import { Form } from "./Form";

export function Test() {
    const graph = useGraph();
    // console.log("Graph data:", graph);
    return (
        <>
            {graph?.nodes?.map((node) => (
                <Form key={node.id} node={node} />
            ))}
        </>
    );
}
