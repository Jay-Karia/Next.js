"use client"
import React from 'react';
import {Select} from "@radix-ui/themes"
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

function AssigneeSelector() {
    const {data: users, error, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: () => axios.get("/api/users").then(res=>res.data),
        staleTime: 1000 * 60 * 5,
        retry: 3,
    })

    if (isLoading) return <div className={"flex items-center justify-center"}>
        <Skeleton circle={false} height={"2rem"} width={"140px"}/>
    </div>
    if (error) return null

    return (
        <>
            <Select.Root>
                <Select.Trigger placeholder={"Select Assignee"}/>
                <Select.Content>
                    <Select.Group>
                        <Select.Label>Select Assignee</Select.Label>
                        {/* @ts-ignore */}
                        {users.map(user => {
                            return (
                                <Select.Item key={user.id} value={user.id}>
                                    {user.name}
                                </Select.Item>
                            )
                        })}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </>
    );
}

export default AssigneeSelector;