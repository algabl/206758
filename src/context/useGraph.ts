import { useContext } from "react";
import { GraphContext } from "./GraphContext";
import type { Graph, Node } from "@/types";

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

    const getFieldPrefillOptions = (node: Node) => {
        if (!graph) {
            throw new Error("GraphContext is not available");
        }
        return getPrerequisiteNodesRecursive(graph, node);
    };

    return { getTemplate, getFieldPrefillOptions, graph };
};

function getPrerequisiteNodesRecursive(graph: Graph, node: Node, visited = new Map<string, Node>()) {
  const prerequisites = node.data.prerequisites || [];
  for (const prerequisiteId of prerequisites) {
    if (!visited.has(prerequisiteId)) {
      const prerequisiteNode = graph.nodes.find((n) => n.id === prerequisiteId);
      if (prerequisiteNode) {
        visited.set(prerequisiteId, prerequisiteNode);
        getPrerequisiteNodesRecursive(graph, prerequisiteNode, visited);
      }
    }
  }
  return Array.from(visited.values());
}
