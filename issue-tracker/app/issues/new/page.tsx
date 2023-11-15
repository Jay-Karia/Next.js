"use client"
import React from 'react';
import {TextField, Button} from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from 'axios'
import {useRouter} from "next/navigation"

interface IssueForm {
    title: string;
    description: string;
}

function NewIssuesPage() {
    const router = useRouter();
    const {register, handleSubmit, control} = useForm<IssueForm>();

    return (
        <form className={"max-w-xl space-y-3"} onSubmit={handleSubmit(async data => {
            const response = await axios.post("/api/issues", data);
            router.push("/issues/");
        })}>
            <TextField.Root>
                <TextField.Input placeholder="Title" {...register("title")} />
            </TextField.Root>
            <Controller render={({field}) => <SimpleMDE placeholder={"Description"} {...field} />} name={"description"}
                        control={control}/>
            <Button style={{marginTop: "1rem"}}>Create New Issue</Button>
        </form>
    );
}

export default NewIssuesPage;