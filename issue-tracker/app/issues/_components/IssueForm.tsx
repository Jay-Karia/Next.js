"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import axios from "axios";
import { TextField, Button, Callout, Text, Flex, RadioGroup } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";
import StatusBadge from "@/app/components/StatusBadge";
import delay from "delay";

type IssueFormData = z.infer<typeof issueSchema>;

async function IssueForm({ issue }: { issue: Issue | null }) {
    const status = ["OPEN", "IN_PROGRESS", "CLOSED"]
    const [loading, setLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState("1");

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
        const status = ["OPEN", "IN_PROGRESS", "CLOSED"]
        // @ts-ignore
        data.status = status[parseInt(selectedValue) - 1]
        try {
            setLoading(true);
            if (issue) {
                await axios.patch("/api/issues/" + issue.id, data);
            } else {
                await axios.post("/api/issues", data);
            }
            await delay(1000);
            router.push("/issues");
            router.refresh();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(
                `An error occurred while ${issue ? "updating" : "creating"
                } the issue.`
            );
        }
    });

    useEffect(() => {
        if (issue) {
            setSelectedValue((status.indexOf(issue.status) + 1).toString())
        }
    }, [issue])

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
                <div>
                    <Text weight={"medium"}>Status</Text>
                    <RadioGroup.Root
                        value={selectedValue}
                        onValueChange={(value) => setSelectedValue(value)}
                        defaultValue={"1"}
                        className={"statusCheck my-2"}
                        variant="surface"
                        name={"status"}
                    >
                        <Flex gap="2" className={"flex-col sm:flex-row"}>
                            <Text as="label" size="3">
                                <Flex gap="2">
                                    <RadioGroup.Item value="1" />
                                    <StatusBadge status={"OPEN"} />
                                </Flex>
                            </Text>
                            <Text as="label" size="3">
                                <Flex gap="2">
                                    <RadioGroup.Item value="2" />
                                    <StatusBadge
                                        status={"IN_PROGRESS"}
                                    />
                                </Flex>
                            </Text>
                            <Text as="label" size="3">
                                <Flex gap="2">
                                    <RadioGroup.Item value="3" />
                                    <StatusBadge
                                        status={"CLOSED"}
                                    />
                                </Flex>
                            </Text>
                        </Flex>
                    </RadioGroup.Root>
                </div>
                <Button disabled={loading} style={{ marginTop: "1rem" }}>
                    {issue ? "Update Issue" : "Create New Issue"}{" "}
                    {loading && <Spinner />}
                </Button>
            </form>
        </div>
    );
}

export default IssueForm;
