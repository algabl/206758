import { useGraph } from "../context/useGraph";
import { Form } from "./Form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function Test() {
    const { graph } = useGraph();
    return (
        <Accordion type="single" collapsible className="w-full">
            {graph?.nodes
                ?.sort((a, b) => (a.data.name < b.data.name ? -1 : 1))
                .map((node) => (
                    <AccordionItem value={node.id} key={node.id}>
                        <AccordionTrigger>{node.data.name}</AccordionTrigger>
                        <AccordionContent>
                            <Form key={node.id} node={node} />
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    );
}
