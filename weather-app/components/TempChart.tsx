"use client"
import React from 'react';
import {Card, AreaChart, Title} from "@tremor/react";

type Props = {
    results: Root | any
}

function TempChart({results}: Props) {
    // @ts-ignore
    const hourly = results?.hourly?.time.map(time => new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true})).slice(0, 24)
    // @ts-ignore
    const data = hourly?.map((hour, i)=> ({
        time: hourly[i],
        "Temperature (C)": results.hourly.temperature_2m[i],
        "UV Index": results.hourly.uv_index[i],
    }))

    return (
        <div>
            <Card className='bg-white'>
                <Title>Temperature</Title>
                <AreaChart
                    className={"mt-6"}
                    data={data}
                    showLegend
                    index={"time"}
                    categories={["Temperature (C)", "UV Index"]}
                    colors={["yellow", "rose"]}
                    minValue={0}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}

export default TempChart;