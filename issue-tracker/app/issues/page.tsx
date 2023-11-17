import React from 'react';
import {Button} from '@radix-ui/themes';
import Link from 'next/link';
import prisma from "@/prisma/client";
import {Table} from "@radix-ui/themes"
import StatusBadge from '../components/StatusBadge';
import IssueActions from '../components/IssueActions';
import LinkComponent from '../components/LinkComponent';

async function IssuesPage() {
    
    const issues = await prisma.issue.findMany();

    return (
        <div>
           <IssueActions />
            <Table.Root variant='surface'>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className={"hidden md:table-cell"}>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className={"hidden md:table-cell"}>Created At</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.map((issue) => (
                        <Table.Row key={issue.id}>
                            <Table.Cell>
                                <LinkComponent href={`/issues/${issue.id}`} children={issue.title} />
                                <div className="block md:hidden">
                                    <StatusBadge status={issue.status} />
                                </div>
                            </Table.Cell>
                            <Table.Cell className={"hidden md:table-cell"}>
                                <StatusBadge status={issue.status} />
                            </Table.Cell>
                            <Table.Cell className={"hidden md:table-cell"}>{issue.createdAt.toDateString()}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export const dynamic = 'force-dynamic'

export default IssuesPage;