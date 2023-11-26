"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Card } from "@radix-ui/themes";

type Props = {
    open: number;
    in_progress: number;
    closed: number;
};

const IssuesChart = ({ open, in_progress, closed }: Props) => {
    const data: {
        name: string;
        value: number;
    }[] = [
        { name: "Open", value: open },
        { name: "In Progress", value: in_progress },
        { name: "Closed", value: closed },
    ];
    return (
        <Card>
            <BarChart width={300} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey="value"
                    style={{ fill: "var(--accent-9)" }}
                    barSize={60}
                />
            </BarChart>
            {/* </ResponsiveContainer> */}
        </Card>
    );
};

export default IssuesChart;
