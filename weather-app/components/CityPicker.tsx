"use client"

import React, {useState} from 'react';
import {Country, City} from 'country-state-city';
import {useRouter} from "next/navigation"
import Select from 'react-select';
import {GlobeIcon} from "@heroicons/react/solid"

type option = {
    value: {
        latitude: string,
        longitude: string,
        isoCode: string
    },
    label: string
} | null

type cityOption = {
    value: {
        latitude: string,
        longitude: string,
        countryCode: string,
        name: string,
        stateCode: string
    },
    label: string,
} | null

const options = Country.getAllCountries().map((country) => {
    return {
        value: {
            latitude: country.latitude,
            longitude: country.longitude,
            isoCode: country.isoCode
        },
        label: country.name
    }
})

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null)
    const [selectedCity, setSelectedCity] = useState<cityOption>(null)

    const router = useRouter()

    const handleSelectedCountry = (option: option) => {
        setSelectedCountry(option)
        setSelectedCity(null)
    }

    const handleSelectedCity = (option: cityOption) => {
        setSelectedCity(option)
        router.push(`/location/${option?.value.latitude}/${option?.value.longitude}`)
    }

    return (
        <div>
            <div className={"space-y-2"}>
                <div className={"flex space-x-2 items-center text-white"}>
                    <GlobeIcon className={"w-5 h-5"}/>
                    <label htmlFor={"country"}>Country</label>
                </div>
                <Select
                    className={"text-black"}
                    value={selectedCountry}
                    onChange={handleSelectedCountry}
                    options={options}
                />
            </div>

            {selectedCountry &&
                <div className={"space-y-2 mt-4"}>
                    <div className={"flex space-x-2 items-center text-white"}>
                        <GlobeIcon className={"w-5 h-5"}/>
                        <label htmlFor={"country"}>City</label>
                    </div>
                    <Select
                        className={"text-black"}
                        value={selectedCity}
                        onChange={handleSelectedCity}
                        options={City.getCitiesOfCountry(selectedCountry.value.isoCode)?.map(city => ({
                            value: {
                                latitude: city.latitude!,
                                longitude: city.longitude!,
                                countryCode: city.countryCode,
                                name: city.name,
                                stateCode: city.stateCode
                            },
                            label: city.name
                        }))}
                    />
                </div>
            }
        </div>
    );
}

export default CityPicker;