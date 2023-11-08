import React from 'react';
import {getClient} from "@/apollo-client";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";
import CalloutCard from "@/components/CalloutCard";
import StatsCard from "@/components/StatsCard";

type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}

async function WeatherPage(props: Props) {
    // const client = getClient();
    // const {data} = await client.query({
    //     query: fetchWeatherQueries,
    //     variables: {
    //         city: props.params.city,
    //         lat: props.params.lat,
    //         long: props.params.long
    //     }
    // });
    //
    // const results:Root = data.myQuery
    // console.log(results)

    return (
        <div>
            {/* Information Panel */}
            <div>
                <div className={"p-5"}>
                    <div className={"pb-5"}>
                        <h2 className={"text-xl font-bold"}>{"Today's Overview"}</h2>
                        <p className={"text-sm text-gray-400"}>
                            Last Updated At:{" "}
                            {/*{new Date(results.current_weather.time).toLocaleString()}*/}
                        </p>
                    </div>

                    {/*Callout Card*/}
                    <div className={"m-3 mb-10"}>
                        <CalloutCard message={"testing"} warning={false}/>
                    </div>

                    {/*Stats Cards*/}
                    <div className={"grid grid-cols-1 xl:grid-cols-2 gap-5 m-2"}>
                        <StatsCard title={"Maximum Temperature"} value={"30"} color={"yellow"}/>
                        <StatsCard title={"Minimum Temperature"} value={"22"} color={"green"}/>
                        <div>
                            <StatsCard title={"UV Index"} value={"6"} color={"rose"}/>
                            <CalloutCard message={"The UV is high today, make sure to wear sunscreen!"} warning={true}/>
                        </div>
                        <div className={"flex gap-3"}>
                            <StatsCard title={"Wind Speed"} value={"15"} color={"cyan"}/>
                            <StatsCard title={"Wind Direction"} value={"300"} color={"violet"}/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default WeatherPage;