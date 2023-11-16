import StatusBadge from "@/app/components/StatusBadge";
import { Issue, Status } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({issue}: {issue: Issue}) => {
    return (
        <>
            <Heading weight={"bold"}>{issue.title}</Heading>
            <Flex className={"flex space-x-3 mt-2"}>
                <StatusBadge status={issue.status as Status} />
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className="prose" mt="4">
                <ReactMarkdown>{issue.description}</ReactMarkdown>
            </Card>
        </>
    );
};

export default IssueDetails;
