import { useContext } from "react";
import { GraphContext } from "./GraphContext";

export const useGraph = () => {
    return useContext(GraphContext);
};
