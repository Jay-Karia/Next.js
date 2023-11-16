"use client";

// React and Next and Other
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import axios from "axios";

// Radix UI
import { TextField, Button, Callout, Text } from "@radix-ui/themes";

// React SimpleMDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

// Components
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

function NewIssuesPage() {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IssueForm>({
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
                    setLoading(true);
                    try {
                        await axios.post("/api/issues", data);
                        router.push("/issues");
                    } catch (error) {
                        setError("An error occurred while creating the issue.");
                    }
                    setLoading(false);
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
                <Button disabled={loading} style={{ marginTop: "1rem" }}>Create New Issue {loading && <Spinner />}</Button>
            </form>
        </div>
    );
}

export default NewIssuesPage;
