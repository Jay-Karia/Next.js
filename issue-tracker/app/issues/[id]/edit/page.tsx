import React from "react";
import IssueForm from "../../_components/IssueForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

async function IssueEditPage ({ params }: Props) {
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
        <div>
            <IssueForm issue={issue} />
        </div>
    );
};

export default IssueEditPage;
