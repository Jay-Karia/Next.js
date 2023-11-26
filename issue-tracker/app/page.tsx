"use client"
import LatestIssues from "./LatestIssues"
import IssuesSummary from "./IssuesSummary"
import IssuesChart from "./IssuesChart"
import prisma from "@/prisma/client"
import { Grid, Flex } from "@radix-ui/themes"

export default async function Home({searchParams}: {searchParams: {page: string}}) {
    
    const open = await prisma.issue.count({where: {status: "OPEN"}})
    const in_progress = await prisma.issue.count({where: {status: "IN_PROGRESS"}})
    const closed = await prisma.issue.count({where: {status: "CLOSED"}})

    return (
        <Grid columns={{initial: '1', md: '2'}} gap={"5"}>
            <Flex direction={'column'} gap={"5"}>
                <IssuesSummary open={open} in_progress={in_progress} closed={closed}/>
                <IssuesChart open={open} in_progress={in_progress} closed={closed} />
            </Flex>
                <LatestIssues />
        </Grid>
    )
}
