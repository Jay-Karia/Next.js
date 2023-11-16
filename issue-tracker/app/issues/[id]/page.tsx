import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Status } from "@prisma/client";
import StatusBadge from "@/app/components/StatusBadge";
import { Heading, Text, Flex, Card } from "@radix-ui/themes";

type Props = {
    params: {
        id: string;
    };
};

async function IssueDetailPage({ params }: Props) {
    const { id } = params;
    let issue;

    try {
        issue = await prisma.issue.findUnique({
            where: {
                id: Number(id),
            },
        });

        if (!issue) {
            throw new Error("Issue not found"); // Throw an error to trigger the 404 page
        }

        console.log(issue);
    } catch (error) {
        notFound(); // Call notFound when an error occurs
    }

    return (
        <div>
            <Heading weight={"bold"}>{issue.title}</Heading>
            <Flex className={"flex space-x-3 mt-2"}>
                <StatusBadge status={issue.status as Status} />
                <Text weight={"light"}>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className="mt-2">
                <Text>{issue.description}</Text>
            </Card>
        </div>
    );
}

export default IssueDetailPage;
