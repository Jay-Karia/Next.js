"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import axios from "axios";
import { TextField, Button, Callout } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

type IssueFormData = z.infer<typeof issueSchema>;

async function IssueForm({ issue }: { issue: Issue }) {
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IssueFormData>({
        resolver: zodResolver(issueSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
        try {
            setLoading(true);
            if (issue) {
                await axios.patch("/api/issues/" + issue.id, data);
            } else {
                await axios.post("/api/issues", data);
            }
            router.push("/issues");
            router.refresh();
        } catch (error) {
            setLoading(false);
            setError(`An error occurred while ${issue ? "updating": "creating"} the issue.`);
        }
    });

    return (
        <div className="space-y-3">
            {error.length > 0 ? (
                <Callout.Root color={"red"} className="max-w-xl">
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            ) : null}
            <form className={"max-w-xl space-y-3"} onSubmit={onSubmit}>
                <TextField.Root>
                    <TextField.Input
                        defaultValue={issue?.title}
                        placeholder="Title"
                        {...register("title")}
                    />
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller
                    defaultValue={issue?.description}
                    render={({ field }) => (
                        <SimpleMDE placeholder={"Description"} {...field} />
                    )}
                    name={"description"}
                    control={control}
                />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                here
                <Button disabled={loading} style={{ marginTop: "1rem" }}>
                    {issue ? "Update Issue" : "Create New Issue"}{" "}
                    {loading && <Spinner />}
                </Button>
            </form>
        </div>
    );
}

export default IssueForm;
