"use client"
import React from 'react';

import {CheckCircleIcon, ExclamationIcon} from "@heroicons/react/outline";
import {Callout} from "@tremor/react";

type Props = {
    message: string,
    warning?: boolean,
}

function CalloutCard(props: Props) {
    return (
        <div>
            <Callout
                className={"mt-4"}
                title={props.message}
                icon={props.warning ? ExclamationIcon : CheckCircleIcon}
                color={"red"}
            />
        </div>
    );
}

export default CalloutCard;