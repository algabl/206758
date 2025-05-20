import { createContext } from "react";
import type { Graph } from "../types";

export const GraphContext = createContext<Graph | null>(null);
