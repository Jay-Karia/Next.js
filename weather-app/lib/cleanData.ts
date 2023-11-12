const cleanData = (data: any, city: string) => {
    const {current, time, hourly, hourly_units, timezone_abbreviation, timezone} = data
    const {temperature, wind_speed, wind_direction, weather_code} = current
    const {temperature_2m, snowfall, rain, relative_humidity_2m, precipitation_probability, uv_index} = hourly

    return {
        current: {temperature, wind_speed, wind_direction, time, weather_code},
        hourly: {
            temperature_2m: temperature_2m.slice(0, 24),
            snowfall: snowfall.slice(0, 24),
            rain: rain.slice(0, 24),
            relative_humidity_2m: relative_humidity_2m.slice(0, 24),
            precipitation_probability: precipitation_probability.slice(0, 24),
            uv_index: uv_index.slice(0, 24),
        },
        timezone,
        city,
        timezone_abbreviation,
        hourly_units,
    }
}

export default cleanData