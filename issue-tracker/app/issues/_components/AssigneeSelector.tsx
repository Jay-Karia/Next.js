"use client";
import React from "react";
import {Select} from "@radix-ui/themes";
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import {Issue} from "@prisma/client";
import {Toaster, toast} from "react-hot-toast";

function AssigneeSelector({issue}: { issue: Issue }) {
    const {
        data: users,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["users"],
        queryFn: () => axios.get("/api/users").then((res) => res.data),
        staleTime: 1000 * 60 * 5,
        retry: 3,
    });

    if (isLoading)
        return (
            <div className={"flex items-center justify-center"}>
                <Skeleton circle={false} height={"2rem"} width={"140px"}/>
            </div>
        );
    if (error) return null;

    return (
        <>
            <Select.Root
                defaultValue={issue.assigneeId || ""}
                onValueChange={async (userId) => {
                    try {
                        await axios.patch(`/api/issues/${issue.id}`, {
                            assigneeId: userId || null,
                        });
                        toast.success("Assignee updated");
                    } catch (error) {
                        toast.error("Something went wrong");
                    }
                }}
            >
                <Select.Trigger placeholder={"Select Assignee"}/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Select Assignee</Select.Label>
                        {/* @ts-ignore */}
                        <Select.Item value={null}>Unassigned</Select.Item>
                        {/* @ts-ignore */}
                        {users.map((user) => {
                            return (
                                <Select.Item key={user.id} value={user.id}>
                                    {user.name}
                                </Select.Item>
                            );
                        })}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Toaster/>
        </>
    );
}

export default AssigneeSelector;
