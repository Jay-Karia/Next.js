"use client"
import React from 'react';
import {Card, Title} from "@tremor/react";
import {AreaChart} from "@tremor/react";

type Props = {
    results: Root | any
}

function WindChart({results}: Props) {
    // @ts-ignore
    const hourly = results?.hourly?.time.map(time => new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true})).slice(0, 24)
    // @ts-ignore
    const data = hourly?.map((hour, i)=> ({
        time: hourly[i],
        "Wind Speed (10m)": results.hourly.wind_speed_10m[i],
    }))
    return (
        <div>
            <Card className="bg-white">
                <Title>Wind Speed</Title>
                <AreaChart
                    className={"mt-6"}
                    data={data}
                    showLegend
                    index={"time"}
                    categories={["Wind Speed (10m)"]}
                    colors={["violet"]}
                    minValue={0}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}

export default WindChart;