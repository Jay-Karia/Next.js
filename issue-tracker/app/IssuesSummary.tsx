"use client"
import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

type Props = {
    open: number;
    in_progress: number;
    closed: number;
};

const IssuesSummary = ({ open, in_progress, closed }: Props) => {
    const statuses: {
        label: string;
        value: number;
        status: Status;
    }[] = [
        { label: "Open Issues", value: open, status: "OPEN" },
        { label: "In Progress Issues", value: in_progress, status: "IN_PROGRESS" },
        { label: "Closed Issues", value: closed, status: "CLOSED" },
    ];

    return (
        <Flex direction={"row"} gap={"4"} mt={"5"}>
            {statuses.map((status) => (
                <Card key={status.value}>
                    <Flex gap="3" align="start" direction={"column"}>
                        <Link href={`/issues?status=${status.status}`} className={"text-sm font-medium"}>
                            {status.label}
                        </Link>
                        <Text size="5" className="font-bold">
                            {status.value}
                        </Text>
                    </Flex>
                </Card>
            ))}
        </Flex>
    );
};

export default IssuesSummary;
