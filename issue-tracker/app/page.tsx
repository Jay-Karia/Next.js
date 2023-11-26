"use client"
import LatestIssues from "./LatestIssues"
import IssuesSummary from "./IssuesSummary"
import IssuesChart from "./IssuesChart"
import prisma from "@/prisma/client"

export default async function Home({searchParams}: {searchParams: {page: string}}) {
    
    const open = await prisma.issue.count({where: {status: "OPEN"}})
    const in_progress = await prisma.issue.count({where: {status: "IN_PROGRESS"}})
    const closed = await prisma.issue.count({where: {status: "CLOSED"}})

    return (
        <div>
            <LatestIssues />
            <IssuesSummary open={open} in_progress={in_progress} closed={closed}/>
            <IssuesChart open={open} in_progress={in_progress} closed={closed} />
        </div>
    )
}
