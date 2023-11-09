"use client"

import React from 'react';
import CityPicker from "@/components/CityPicker";
import {SunIcon} from "@heroicons/react/solid";
import {MoonIcon} from "@heroicons/react/solid";

type Props = {
    city: string,
    lat: string,
    long: string,
    // results: Root,
}

function InformationPanel(props: Props) {
    return (
        <div className={"bg-gradient-to-br from-[#394F68] to-[#183B7E] text-white p-10"}>
            <div className={"pb-5"}>
                <h1 className={"text-5xl font-bold"}>{decodeURI(props.city)}</h1>
                <p className={"text-xs text-gray-400 mt-3"}>
                    Long/Lat: {props.long}, {props.lat}
                </p>
            </div>

            <CityPicker/>

            <hr className={"my-10"}></hr>

            {/* Current Date */}
            <div className={"mt-5 flex items-center justify-between space-x-10 mb-5"}>
                <div>
                    <p className={"text-xl"}>
                        {new Date().toLocaleDateString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>

                    <p className={"font-extraligt"}>
                        TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                    </p>
                </div>

                <p className={"text-xl font-bold uppercase"}>
                    {new Date().toLocaleTimeString("en-GB", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })
                    }
                </p>
            </div>
            <hr className={"mt-10 mb-5"}></hr>
            <div>
                <div>
                    {/* Image */}

                    <div className={"flex items-center justify-start space-x-10"}>
                        <p className={"text-5xl font-semibold"}>10</p>
                        {/*<p>{props.results.current_weather.toFixed(1)}</p>*/}
                        <p className={"text-left font-extralight text-lg"}>Sunny</p>
                    </div>
                </div>
            </div>

            <div className={"space-y-2 py-5"}>
                <div className={"flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded bg-[#405885]"}>
                    <SunIcon className={"h-10 w-10 text-gray-400"}/>
                    <div className={"flex-1 flex justify-between items-center"}>
                        <p className={"font-extralight"}>Sunrise</p>
                        <p className={"uppercase text-xl"}>12:00 PM</p>
                    </div>
                </div>
                <div className={"flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded bg-[#405885]"}>
                    <MoonIcon className={"h-10 w-10 text-gray-400"}/>
                    <div className={"flex-1 flex justify-between items-center"}>
                        <p className={"font-extralight"}>Sunset</p>
                        <p className={"uppercase text-xl"}>12:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InformationPanel;
