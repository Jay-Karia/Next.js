"use client"
import React from 'react';
import {Card, AreaChart, Title} from "@tremor/react";

type Props = {
    results: Root | any
}

function RainChart({results}:Props) {
    // @ts-ignore
    const hourly = results?.hourly?.time.map(time => new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true})).slice(0, 24)
    // @ts-ignore
    const data = hourly?.map((hour, i)=> ({
        time: hourly[i],
        "Rain (%)": results.hourly.precipitation_probability[i],
    }))

    return (
        <div>
            <Card className='bg-white'>
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