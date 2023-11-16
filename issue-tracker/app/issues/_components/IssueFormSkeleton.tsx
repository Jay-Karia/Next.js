import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function IssueFormSkeleton() {
    return (
        <div className={"max-w-xl space-y-3"}>
            <Skeleton height={"1.5rem"} />
            <Skeleton height={"27rem"} />
            <div>
            <Skeleton count={2} width={"50%"} height={"1.5rem"} />
            </div>
        </div>
    );
}

export default IssueFormSkeleton;
