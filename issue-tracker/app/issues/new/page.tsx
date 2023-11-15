"use client"
import React from 'react';
import {TextField, TextArea, Button} from "@radix-ui/themes";

function NewIssuesPage() {
    return (
        <div className={"max-w-xl space-y-3"}>
            <TextField.Root>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <TextArea placeholder="Description" />
            <Button style={{marginTop: "1rem"}}>Create New Issue</Button>
        </div>
    );
}

export default NewIssuesPage;