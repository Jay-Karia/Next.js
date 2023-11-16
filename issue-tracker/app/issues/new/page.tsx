"use client";
import React, { useState } from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod"
import {createIssueSchema} from "@/app/validationSchemas";
import {z} from "zod"
import ErrorMessage from "@/app/components/ErrorMessage"

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssuesPage() {
    const [error, setError] = useState("");
    const router = useRouter();
    const { register, handleSubmit, control, formState: {errors} } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema),
    });

    return (
        <div className="space-y-3">
            {error.length > 0 ? (
                <Callout.Root color={"red"} className="max-w-xl">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            ) : null}
            <form
                className={"max-w-xl space-y-3"}
                onSubmit={handleSubmit(async (data) => {
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");
                    } catch (error) {
                        setError("An error occurred while creating the issue.");
                    }
                })}
            >
                <TextField.Root>
                    <TextField.Input
                        placeholder="Title"
                        {...register("title")}
                    />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller
                    render={({ field }) => (
                        <SimpleMDE placeholder={"Description"} {...field} />
                    )}
                    name={"description"}
                    control={control}
                />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button style={{ marginTop: "1rem" }}>Create New Issue</Button>
            </form>
        </div>
    );
}

export default NewIssuesPage;

