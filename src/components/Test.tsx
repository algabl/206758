import { useGraph } from "../context/useGraph";

export function Test() {
    const graph = useGraph();
    console.log("Graph data:", graph);
    return (
        <div>
            <h1>Test</h1>
            <p>This is a test component.</p>
        </div>
    );
}
