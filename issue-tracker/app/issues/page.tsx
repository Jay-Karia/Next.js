import React from 'react';
import {Button} from '@radix-ui/themes';
import Link from 'next/link';
import prisma from "@/prisma/client";
import {Table} from "@radix-ui/themes"
import StatusBadge from '../components/StatusBadge';
import IssueActions from '../components/IssueActions';
import LinkComponent from '../components/LinkComponent';
import {Status, Issue} from "@prisma/client";
import {ArrowUpIcon} from "@radix-ui/react-icons"

async function IssuesPage({searchParams}: { searchParams: {status: Status, orderBy: keyof Issue} }) {

    const issues = await prisma.issue.findMany({
        where: {
            status: searchParams.status
        }
    });

    const columnHeaders: {
        label: string,
        value: keyof Issue,
        className?: string
    }[] = [
        { label: "Issue", value:"title", className: ""},
        { label: "Status", value:"status", className: "hidden md:table-cell"},
        { label: "Created At", value:"createdAt", className: "hidden md:table-cell"},
        { label: "Updated At", value:"updatedAt", className: "hidden md:table-cell"},
    ]

    return (
        <div>
            <IssueActions/>
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        {columnHeaders.map((columnHeader) => (
                            <Table.ColumnHeaderCell key={columnHeader.value} className={columnHeader.className}>
                                <Link href={{query: { ...searchParams, orderBy: columnHeader.value}}}>{columnHeader.label}</Link>
                                {columnHeader.value === searchParams.orderBy && <ArrowUpIcon className={"inline w-3 h-3"}/>}
                            </Table.ColumnHeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.length > 0 ? (
                        <>
                            {issues.map((issue) => (
                                <Table.Row key={issue.id}>
                                    <Table.Cell>
                                        <LinkComponent href={`/issues/${issue.id}`} title={String(issue.title)}/>
                                        <div className="block md:hidden">
                                            <StatusBadge status={issue.status}/>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className={"hidden md:table-cell"}>
                                        <StatusBadge status={issue.status}/>
                                    </Table.Cell>
                                    <Table.Cell
                                        className={"hidden md:table-cell"}>{issue.createdAt.toDateString()}</Table.Cell>
                                    <Table.Cell
                                        className={"hidden md:table-cell"}>{issue.updatedAt.toDateString() + " - " + issue.updatedAt.toLocaleTimeString()}</Table.Cell>
                                </Table.Row>
                            ))}
                        </>
                    ) : <>
                        <Table.Row>
                            <Table.Cell>
                                <p>No issues found.</p>
                            </Table.Cell>
                        </Table.Row>
                    </>}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export const dynamic = 'force-dynamic'

export default IssuesPage;