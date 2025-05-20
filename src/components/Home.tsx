import { useGraph } from "../context/useGraph";
import { Form } from "./Form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function Home() {
    const { graph } = useGraph();
    return (
        <div className="flex flex-col h-screen w-screen items-center">
            <h1>Form Builder</h1>
            <Accordion type="single" collapsible className="w-md max-w-screen p-4">
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
        </div>
    );
}
