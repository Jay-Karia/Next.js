import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import FilterComponent from "@/app/issues/_components/FilterComponent";

function IssueActions() {
    return (
        <div className={"mb-5 flex flex-row gap-5 justify-between"}>
            <div className={"flex flex-row gap-5"}>
                <FilterComponent />
            </div>
            <div>
                <Button>
                    <Link href={"/issues/new"}>New Issue</Link>
                </Button>
            </div>
        </div>
    );
}

export default IssueActions;
