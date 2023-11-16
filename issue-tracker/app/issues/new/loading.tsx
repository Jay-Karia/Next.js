import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LoadingNewIssuePage() {
    return (
        <div className={"max-w-xl space-y-3"}>
            <Skeleton height={"1.5rem"} />
            <Skeleton height={"20rem"} />
        </div>
    );
}

export default LoadingNewIssuePage;
