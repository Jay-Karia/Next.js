import React from 'react';
import {getClient} from "@/apollo-client";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";
import CalloutCard from "@/components/CalloutCard";

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

                    <CalloutCard message={"testing"} warning={false}/>

                </div>
            </div>

        </div>
    );
}

export default WeatherPage;