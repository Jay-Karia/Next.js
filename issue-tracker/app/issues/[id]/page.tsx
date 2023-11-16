import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Grid, Box} from "@radix-ui/themes";
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
