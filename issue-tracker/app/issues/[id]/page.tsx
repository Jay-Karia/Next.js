import React from "react";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";
import {Grid, Box, Flex} from "@radix-ui/themes";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import AssigneeSelector from "@/app/issues/_components/AssigneeSelector";

type Props = {
    params: {
        id: string;
    };
};

async function IssueDetailPage({params}: Props) {
    const {id} = params;
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
            <Box className="md:col-span-4">
                <IssueDetails issue={issue}/>
            </Box>
            <Box>
                <Flex gap="4" className={"sm:flex-row flex-col"}>
                    <AssigneeSelector issue={issue}/>
                    <EditIssueButton issueId={issue.id}/>
                    <DeleteIssueButton issueId={issue.id}/>
                </Flex>
            </Box>
        </Grid>
    );
}

export default IssueDetailPage;
