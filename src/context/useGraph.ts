import { useContext } from "react";
import { GraphContext } from "./GraphContext";

export const useGraph = () => {
    const graph = useContext(GraphContext);

    const getTemplate = (id: string) => {
        if (!graph) {
            throw new Error("GraphContext is not available");
        }
        const template = graph.forms?.find((template) => template.id === id);
        if (!template) {
            throw new Error(`Template with id ${id} not found`);
        }
        return template;
    };

    return { getTemplate: getTemplate, graph };
};
