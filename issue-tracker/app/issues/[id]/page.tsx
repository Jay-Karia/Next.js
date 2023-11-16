import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Status } from "@prisma/client";
import StatusBadge from "@/app/components/StatusBadge";
import { Heading, Text, Flex, Card } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

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
    } catch (error) {
        notFound();
    }

    return (
        <div>
            <Heading weight={"bold"}>{issue.title}</Heading>
            <Flex className={"flex space-x-3 mt-2"}>
                <StatusBadge status={issue.status as Status} />
                <Text weight={"light"}>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className="prose" mt="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </div>
    );
}

export default IssueDetailPage;
