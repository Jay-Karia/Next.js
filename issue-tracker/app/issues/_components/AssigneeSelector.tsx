"use client"
import React from 'react';
import {Select} from "@radix-ui/themes"

function AssigneeSelector() {
    return (
        <Select.Root>
            <Select.Trigger placeholder={"Select Assignee"}/>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Select Assignee</Select.Label>
                    <Select.Item value="orange">Jay Karia</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select.Root>
    );
}

export default AssigneeSelector;