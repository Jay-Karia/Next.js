"use client"
import React from 'react';
import {Color} from "@tremor/react";
import {Card, Metric, Text} from "@tremor/react";

type Props = {
    title: string,
    value: number | string,
    color?: Color,
}

function StatsCard(props: Props) {
    return (
        <Card className={"p-5"} decoration={"top"} decorationColor={props.color}>
            <Text>{props.title}</Text>
            <Metric>{props.value}</Metric>
        </Card>
    );
}

export default StatsCard;