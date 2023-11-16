import React from "react";
import {Badge} from "@radix-ui/themes"
import { Status } from "@prisma/client";

type Props = {
    status: Status;
};

const statusMap: Record<Status, {label: string, color: "red" | "violet" | "green"}> = {
    OPEN: {label: 'Open', color: 'red'},
    IN_PROGRESS: {label: 'In Progress', color: 'violet'},
    CLOSED: {label: 'Done', color: 'green'},
}

function StatusBadge({status}: Props) {
    return (
        <div>
            <Badge color={statusMap[status].color}>
                {statusMap[status].label}
            </Badge>
        </div>
    );
}

export default StatusBadge;
