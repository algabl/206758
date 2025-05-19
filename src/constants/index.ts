import type { Field } from "@/types";

export const TENANT_ID = "1";
export const BLUEPRINT_ID = "bp_01jk766tckfwx84xjcxazggzyc";

export const CLIENT_ORG_PROPERTIES: Record<string, Field> = {
    client_id: {
        avantos_type: "short-text",
        title: "Client ID",
        type: "string",
    },
};

export const ACTION_PROPERTIES: Record<string, Field> = {
    action_id: {
        avantos_type: "short-text",
        title: "Action ID",
        type: "string",
    },
};
