import React from 'react';
import CalloutCard from "@/components/CalloutCard";
import StatsCard from "@/components/StatsCard";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
import WindChart from "@/components/WindChart";
import axios from 'axios'
import weatherCodeToString from "@/lib/weatherCodeToString";

type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}

export const revalidate = 60

async function WeatherPage(props: Props) {

    const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${props.params.lat}&longitude=${props.params.long}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,pressure_msl,surface_pressure,evapotranspiration,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_direction_180m,wind_gusts_10m,temperature_80m,temperature_120m,temperature_180m,soil_temperature_0cm,soil_temperature_6cm,uv_index,uv_index_clear_sky,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max`
    let results: any = {}
    await fetch(API_URL).then(res => res.json())
        .then(data => {
            results = data
        })

    let weatherSummary: string = "";
    const generateWeatherSummary = async () => {
        const prompt = "Today\'s weather in " + props.params.city.replace("%20", " ") + ` is ${JSON.stringify(weatherCodeToString[results.current.weather_code].label).replaceAll("\"", "")}` +  "The temperature is " + results.current.temperature_2m + " degrees celsius. The humidity is " + results.current.relative_humidity_2m + " percent. The wind speed is " + results.current.wind_speed_10m + " meters per second. The wind direction is " + results.current.wind_direction_10m + " degrees. The UV index is " + results.current.uv_index + "."

        try {
            const options = {
                method: 'POST',
                url: 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.API_KEY,
                    'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
                },
                data: {
                    text: prompt,
                    min_length: 200,
                    max_length: 300
                }
            };
            const response = await axios.request(options);
            weatherSummary = response.data.summary
        } catch (error) {
            weatherSummary = "Unable to generate weather summary"
            console.error(error);
        }
    };

    await generateWeatherSummary();

    // @ts-ignore
    return (
        <div className={"flex flex-col min-h-screen md:flex-row"}>
            {/* Information Panel */}
            <InformationPanel results={results} city={props.params.city} lat={props.params.lat}
                              long={props.params.long}/>
            <div className={"flex-1 p-5 lg:p-10"}>
                <div className={"p-5"}>
                    <div className={"pb-5"}>
                        <h2 className={"text-xl font-bold"}>{"Today's Overview"}</h2>
                        <p className={"text-sm text-gray-400"}>
                            Last Updated At:{" "}
                            {new Date(results.current.time).toLocaleString()} ({results.timezone})
                        </p>
                    </div>

                    {/*Callout Card*/}
                    <div className={"m-3 mb-10"}>
                        <CalloutCard message={weatherSummary} warning={false}/>
                    </div>

                    {/*Stats Cards*/}
                    <div className={"grid grid-cols-1 xl:grid-cols-2 gap-5 m-2"}>
                        <StatsCard title={"Maximum Temperature"}
                                   value={results.daily.temperature_2m_max[0].toFixed(1) + results.daily_units.temperature_2m_max}
                                   color={"yellow"}/>
                        <StatsCard title={"Minimum Temperature"}
                                   value={results.daily.temperature_2m_min[0].toFixed(1) + results.daily_units.temperature_2m_min}
                                   color={"green"}/>
                        <div>
                            <StatsCard title={"UV Index"}
                                       value={results.daily.uv_index_max[0].toFixed(1) + results.daily_units.uv_index_max}
                                       color={"rose"}/>
                            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                                <CalloutCard message={"The UV is high today, make sure to wear sunscreen!"}
                                             warning={true}/>
                            )}
                        </div>
                        <div className={"flex gap-3"}>
                            <StatsCard title={"Wind Speed"}
                                       value={results.current.wind_speed_10m + results.current_units.wind_speed_10m}
                                       color={"cyan"}/>
                            <StatsCard title={"Wind Direction"}
                                       value={results.current.wind_direction_10m + results.current_units.wind_direction_10m}
                                       color={"violet"}/>
                        </div>
                    </div>

                    <hr className={"my-5"}/>

                    <div className={"space-y-3"}>
                        {/* Temperature Chart */}
                        <TempChart results={results}/>
                        {/* Rain Chart*/}
                        <RainChart results={results}/>
                        {/* Humidity Chart */}
                        <HumidityChart results={results}/>
                        {/* Wind Chart */}
                        <WindChart results={results}/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default WeatherPage;