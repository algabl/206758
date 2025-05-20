import { useEffect, useState } from "react";
import { fetchGraph } from "../api";
import { TENANT_ID, BLUEPRINT_ID } from "../constants";
import { GraphContext } from "./GraphContext";
import type { Graph } from "../types";

export const GraphProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [graph, setGraph] = useState<Graph | null>(null);

    useEffect(() => {
        const response = fetchGraph(TENANT_ID, BLUEPRINT_ID);
        response
            .then((res) => {
                setGraph(res);
            })
            .catch((error) => {
                console.error("Error fetching graph data:", error);
            });
    }, []);

    return <GraphContext.Provider value={graph}>{children}</GraphContext.Provider>;
};
