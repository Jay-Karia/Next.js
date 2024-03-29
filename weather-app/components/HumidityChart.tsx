"use client"
import React from 'react';
import {AreaChart, Card, Title} from "@tremor/react";

type Props = {
    results: Root | any
}

function HumidityChart({results}:Props) {
    // @ts-ignore
    const hourly = results?.hourly?.time.map(time => new Date(time).toLocaleString('en-US', {hour: 'numeric', hour12: true})).slice(0, 24)
    // @ts-ignore
    const data = hourly?.map((hour, i)=> ({
        time: hourly[i],
        "Humidity (%)": results.hourly.relative_humidity_2m[i],
    }))
    return (
        <div>
            <Card className="bg-white">
                <Title>Relative Humidity</Title>
                <AreaChart
                    className={"mt-6"}
                    data={data}
                    showLegend
                    index={"time"}
                    categories={["Humidity (%)"]}
                    colors={["teal"]}
                    minValue={0}
                    maxValue={100}
                    yAxisWidth={40}
                />
            </Card>
        </div>
    );
}

export default HumidityChart;