"use client";
import React from "react";
import { DropdownMenu, Button, Select } from "@radix-ui/themes";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Status } from "@prisma/client";

function FilterComponent() {
    const statuses: { label: string; value?: Status }[] = [
        { label: "All" },
        { label: "Open", value: "OPEN" },
        { label: "In Progress", value: "IN_PROGRESS" },
        { label: "Closed", value: "CLOSED" },
    ];
    return (
        <div>
            <Select.Root>
                <Select.Trigger placeholder="Filter by status" />
                <Select.Content>
                    {statuses.map((status) => (
                        <Select.Item
                            value={status.value || " "}
                            key={status.value}
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
