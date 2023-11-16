import React from "react";
import IssueActions from "../components/IssueActions";
import { Table } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function Spinner() {
    const issues = [1, 2, 3, 4, 5];
    return (
        <div>
            <IssueActions />
            <Table.Root variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className={"hidden md:table-cell"}
                        >
                            Status
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell
                            className={"hidden md:table-cell"}
                        >
                            Created At
                        </Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {issues.map((issue) => (
                        <Table.Row key={issue}>
                            <Table.Cell>
                                <Skeleton />
                            </Table.Cell>
                            <Table.Cell className={"hidden md:table-cell"}>
                                <Skeleton />
                            </Table.Cell>
                            <Table.Cell className={"hidden md:table-cell"}>
                                <Skeleton />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </div>
    );
}

export default Spinner;
