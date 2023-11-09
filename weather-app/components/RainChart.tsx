"use client"
import React from 'react';
import {Card, AreaChart, Title} from "@tremor/react";

type Props = {
    results: Root
}

function RainChart({results}:Props) {
    const hourly = results?.hourly?.time.map(time => new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true})).slice(0, 24)
    const data = hourly?.map((hour, i)=> ({
        time: hourly[i],
        "Rain (%)": results.hourly.precipitation_probability[i],
    }))

    return (
        <div>
            <Card>
                <Title>Possibility of Rain</Title>
                <AreaChart
                    className={"mt-6"}
                    data={data}
                    showLegend
                    index={"time"}
                    categories={["Rain (%)"]}
                    colors={["blue"]}
                    minValue={0}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}

export default RainChart;