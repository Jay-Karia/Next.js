import {gql} from '@apollo/client';

let graphql= `query myQuery($current: String, $daily: String, $hourly: String, $latitude: String, $longitude: String) {
    myQuery(
      current: $current
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
    ) {
      current {
        apparent_temperature
        interval
        is_day
        precipitation
        rain
        relative_humidity_2m
        showers
        snowfall
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_gusts_10m
        wind_speed_10m
      }
      current_units {
        apparent_temperature
        interval
        is_day
        precipitation
        rain
        relative_humidity_2m
        showers
        snowfall
        temperature_2m
        time
        weather_code
        wind_direction_10m
        wind_gusts_10m
        wind_speed_10m
      }
      daily {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        weather_code
        wind_gusts_10m_max
        wind_speed_10m_max
        uv_index_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        precipitation_probability_max
        precipitation_sum
        rain_sum
        showers_sum
        snowfall_sum
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weather_code
        wind_gusts_10m_max
        wind_speed_10m_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dew_point_2m
        evapotranspiration
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        soil_temperature_0cm
        soil_temperature_6cm
        surface_pressure
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        time
        uv_index
        uv_index_clear_sky
        weather_code
        wind_direction_180m
        wind_gusts_10m
        wind_speed_10m
        wind_speed_120m
        wind_speed_80m
      }
      hourly_units {
        apparent_temperature
        dew_point_2m
        evapotranspiration
        is_day
        precipitation
        precipitation_probability
        pressure_msl
        rain
        relative_humidity_2m
        showers
        snow_depth
        snowfall
        soil_temperature_0cm
        soil_temperature_6cm
        surface_pressure
        temperature_120m
        temperature_180m
        temperature_2m
        temperature_80m
        time
        uv_index
        uv_index_clear_sky
        weather_code
        wind_direction_180m
        wind_gusts_10m
        wind_speed_10m
        wind_speed_120m
        wind_speed_80m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }`,
    variables: { "current": "String", "daily": "String", "hourly": "String", "latitude": "String", "longitude": "String" }

export default gql`${graphql}`;