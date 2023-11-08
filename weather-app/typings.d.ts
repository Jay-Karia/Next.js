interface string {
    apparent_temperature: number
    interval: number
    is_day: number
    precipitation: number
    rain: number
    relative_humidity_2m: number
    showers: number
    snowfall: number
    temperature_2m: number
    time: string
    weather_code: number
    wind_direction_10m: number
    wind_gusts_10m: number
    wind_speed_10m: number
}

interface string {
    apparent_temperature: string
    interval: string
    is_day: string
    precipitation: string
    rain: string
    relative_humidity_2m: string
    showers: string
    snowfall: string
    temperature_2m: string
    time: string
    weather_code: string
    wind_direction_10m: string
    wind_gusts_10m: string
    wind_speed_10m: string
}

interface Daily {
    apparent_temperature_max: [number]
    apparent_temperature_min: [number]
    precipitation_probability_max: [number]
    precipitation_sum: [number]
    rain_sum: [number]
    showers_sum: [number]
    snowfall_sum: [number]
    sunrise: [string]
    sunset: [string]
    temperature_2m_max: [number]
    temperature_2m_min: [number]
    time: [string]
    uv_index_clear_sky_max: [number]
    uv_index_max: [number]
    weather_code: [number]
    wind_gusts_10m_max: [number]
    wind_speed_10m_max: [number]
}

interface string {
    apparent_temperature_max: string
    apparent_temperature_min: string
    precipitation_probability_max: string
    precipitation_sum: string
    rain_sum: string
    showers_sum: string
    snowfall_sum: string
    sunrise: string
    sunset: string
    temperature_2m_max: string
    temperature_2m_min: string
    time: string
    uv_index_clear_sky_max: string
    uv_index_max: string
    weather_code: string
    wind_gusts_10m_max: string
    wind_speed_10m_max: string
}

interface Hourly {
    apparent_temperature: [number]
    dew_point_2m: [number]
    evapotranspiration: [number]
    is_day: [number]
    precipitation: [number]
    precipitation_probability: [number]
    pressure_msl: [number]
    rain: [number]
    relative_humidity_2m: [number]
    showers: [number]
    snow_depth: [number]
    snowfall: [number]
    soil_temperature_0cm: [number]
    soil_temperature_6cm: [number]
    surface_pressure: [number]
    temperature_120m: [number]
    temperature_180m: [number]
    temperature_2m: [number]
    temperature_80m: [number]
    time: [string]
    uv_index: [number]
    uv_index_clear_sky: [number]
    weather_code: [number]
    wind_direction_180m: [number]
    wind_gusts_10m: [number]
    wind_speed_10m: [number]
    wind_speed_120m: [number]
    wind_speed_80m: [number]
}

interface string {
    apparent_temperature: string
    dew_point_2m: string
    evapotranspiration: string
    is_day: string
    precipitation: string
    precipitation_probability: string
    pressure_msl: string
    rain: string
    relative_humidity_2m: string
    showers: string
    snow_depth: string
    snowfall: string
    soil_temperature_0cm: string
    soil_temperature_6cm: string
    surface_pressure: string
    temperature_120m: string
    temperature_180m: string
    temperature_2m: string
    temperature_80m: string
    time: string
    uv_index: string
    uv_index_clear_sky: string
    weather_code: string
    wind_direction_180m: string
    wind_gusts_10m: string
    wind_speed_10m: string
    wind_speed_120m: string
    wind_speed_80m: string
}

interface Root {
    string: string
    current_units: string
    daily: Daily
    daily_units: string
    elevation: number
    generationtime_ms: number
    hourly: Hourly
    hourly_units: string
    latitude: number
    longitude: number
    timezone: string
    timezone_abbreviation: string
    utc_offset_seconds: number
}