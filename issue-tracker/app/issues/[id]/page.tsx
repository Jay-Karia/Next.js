import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Status } from "@prisma/client";
import StatusBadge from "@/app/components/StatusBadge";
import { Heading, Text, Flex, Card, Grid, Box, Button } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Pencil2Icon } from '@radix-ui/react-icons'

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
            throw new Error("Issue not found");
        }
    } catch (error) {
        notFound();
    }

    return (
        <Grid columns="1" gap="5">
            <Box>
                <Heading weight={"bold"}>{issue.title}</Heading>
                <Flex className={"flex space-x-3 mt-2"}>
                    <StatusBadge status={issue.status as Status} />
                    <Text weight={"light"}>
                        {issue.createdAt.toDateString()}
                    </Text>
                </Flex>
                <Card className="prose" mt="4">
                    <ReactMarkdown>{issue.description}</ReactMarkdown>
                </Card>
            </Box>
            <Box>
                <Button>
                    <Pencil2Icon />
                    <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
                </Button>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;
