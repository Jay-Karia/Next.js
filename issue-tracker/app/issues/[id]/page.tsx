import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Status } from "@prisma/client";
import StatusBadge from "@/app/components/StatusBadge";
import { Heading, Text, Flex, Card, Grid, Box, Button } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Pencil2Icon } from '@radix-ui/react-icons'
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
                <IssueDetails issue={issue}/>
            </Box>
            <Box>
                <EditIssueButton issueId={issue.id} />
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;
