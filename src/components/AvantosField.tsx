import type { Field } from "@/types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import MultiSelect from "./ui/multiselect";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export function AvantosField({ field, required }: { field: Field; required: boolean }) {
    return (
        <>
            {(() => {
                switch (field.avantos_type) {
                    case "button":
                        return <Button variant="outline">{field.title}</Button>;
                    case "checkbox-group":
                        return (
                            <div>
                                <label>{field.title}</label>
                                <input type="checkbox" />
                            </div>
                        );
                    case "object-enum": {
                        const options =
                            field.items?.enum.map((item) => ({
                                value: item,
                                label: item,
                            })) ?? [];
                        const selectedValues = [] as string[];
                        return field.items?.enum && options.length > 0 ? (
                            <MultiSelect
                                options={options}
                                selectedValues={selectedValues}
                                setSelectedValues={(values) => {
                                    console.log(values);
                                }}
                            />
                        ) : null;
                    }
                    case "short-text":
                        return <Input type="text" required={required} placeholder={field.title} />;
                    case "multi-select": {
                        const options =
                            field.items?.enum.map((item) => ({
                                value: item,
                                label: item,
                            })) ?? [];
                        const selectedValues = [] as string[];
                        return field.items?.enum ? (
                            <MultiSelect
                                options={options}
                                selectedValues={selectedValues}
                                setSelectedValues={(values) => {
                                    console.log(values);
                                }}
                            />
                        ) : null;
                    }
                    case "multi-line-text":
                        return <Textarea required={required} placeholder={field.title} />;
                    default:
                        return null;
                }
            })()}
        </>
    );
}
