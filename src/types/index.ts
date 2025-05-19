export interface Graph {
    $schema: string;
    id: string;
    tenant_id: string;
    name: string;
    description: string;
    category: string;
    nodes: Node[];
    edges?: Edge[];
    forms?: Form[];
    branches?: [];
    triggers: [];
}

export type NodeType = "form" | "branch" | "trigger" | "configuration";

export interface Node {
    id: string;
    type: NodeType;
    position: Position;
    data: {
        id: string;
        component_key: string;
        component_type: NodeType;
        component_id: string;
        name: string;
        prerequisites: string[];
        permitted_roles: string[];
        input_mapping: object;
        sla_duration: {
            number: number;
            unit: string;
        };
        approval_required: boolean;
        approval_roles: string[];
    };
}

export interface Position {
    x: number;
    y: number;
}

export interface Edge {
    source: string;
    target: string;
}

export interface Form {
    id: string;
    name: string;
    description: string;
    is_reusable: boolean;
    field_schema: {
        type: string;
        properties: Record<string, Field>;
        required: string[];
    };
    ui_schema: {
        type: string;
        elements: Element[];
    };
    dynamic_field_config: Record<string, FieldConfig>;
}

export interface Field {
    avantos_type: string;
    title: string;
    type: string;
    items?: {
        enum: string[];
        type: string;
    };
    uniqueItems?: boolean;
    enum?: string[];
    format?: string;
}

export interface Element {
    type: string;
    scope: string;
    label: string;
}

export interface FieldConfig {
    selector_field?: string;
    payload_fields: {
        [key: string]: {
            type: string;
            value: string;
        };
    };
    endpoint_id: string;
    output_key?: string;
}
