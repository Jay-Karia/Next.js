interface DataEntry {
    _id: number
    allies: [string]
    createdAt: string
    enemies: [string]
    films: [string]
    imageUrl: string
    name: string
    parkAttractions: [string]
    shortFilms: [string]
    sourceUrl: string
    tvShows: [string]
    updatedAt: string
    url: string
    videoGames: [string]
}

interface Info {
    count: number
    nextPage: string
    previousPage: string
    totalPages: number
}

interface Root {
    data: [string]
    info: string
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

interface HourlyUnits {
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