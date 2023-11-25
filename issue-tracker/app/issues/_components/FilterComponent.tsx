"use client";
import React from "react";
import {Select} from "@radix-ui/themes";
import {Status} from "@prisma/client";
import {useRouter} from "next/navigation";

function FilterComponent() {
    const router = useRouter();

    const statuses: { label: string; value?: Status }[] = [
        {label: "All"},
        {label: "Open", value: "OPEN"},
        {label: "In Progress", value: "IN_PROGRESS"},
        {label: "Closed", value: "CLOSED"},
    ];
    return (
        <div>
            <Select.Root onValueChange={(status => {
                const url: string = status.length > 1 ? `/issues?status=${status}` : "/issues"
                router.push(url);
            })}>
                <Select.Trigger placeholder="Filter by status"/>
                <Select.Content>
                    {statuses.map((status) => (
                        <Select.Item
                            value={status.value || " "}
                            key={status.value}
                            id={status.value}
                        >
                            {status.label}
                        </Select.Item>
                    ))}
                </Select.Content>
            </Select.Root>
        </div>
    );
}

export default FilterComponent;
