import React from 'react'
import prisma from "@/prisma/client";
import { notFound } from 'next/navigation';

type Props = {
    params: {
        id: string
    }
}

async function IssueDetailPage ({params}:Props) {
    const {id} = params;
    let issue;
    try {
        issue = await prisma.issue.findUnique({
            where: {
                id: Number(id)
            }
        })
        console.log(issue)
        if (!issue) notFound()
    } catch (error) {
        notFound()
    }

    
    return (
        <div>
            <p>{issue.title}</p>
            <p>{issue.description}</p>
            <p>{issue.status}</p>
            <p>{issue.createdAt.toDateString()}</p>

        </div>
    )
}

export default IssueDetailPage;