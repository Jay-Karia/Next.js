import { Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

async function LoadingIssueDetailPage() {
    return (
        <div className="max-w-xl">
            <Heading weight={"bold"}>
                <Skeleton />
            </Heading>
            <Flex className={"space-x-3"} my={"3"}>
                <Skeleton width={"5rem"} />
                <Skeleton width={"8rem"} />
            </Flex>
            <Card className="prose" mt="4">
                <Skeleton count={3} />
            </Card>
        </div>
    );
}

export default LoadingIssueDetailPage;
