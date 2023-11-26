import React from "react";
import prisma from "@/prisma/client";
import { Table, Flex, Card, Avatar, Heading } from "@radix-ui/themes";
import StatusBadge from "./components/StatusBadge";

const LatestIssues = async () => {
    const issues = await prisma.issue.findMany({
        take: 5,
        orderBy: {
            createdAt: "desc",
        },
        include: {
            assigneeUser: true,
        },
    });

    return (
        <Card>
            <Heading mb={"5"} size="4">Latest Issues</Heading>
            <Table.Root>
                <Table.Body>
                    {issues.map((issue) => (
                        <Table.Row key={issue.id}>
                            <Table.Cell>
                                <Flex
                                    direction={"row"}
                                    align={"start"}
                                    gap={"2"}
                                    justify={"between"}
                                >
                                    <div>
                                        {issue.title}
                                        <StatusBadge status={issue.status} />
                                    </div>
                                    {issue.assigneeUser && (
                                        <Avatar
                                            src={issue.assigneeUser?.image!}
                                            fallback={"?"}
                                            radius="full"
                                            size="2"
                                        />
                                    )}
                                </Flex>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Card>
    );
};

export default LatestIssues;
