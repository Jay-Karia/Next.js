import {NextResponse} from 'next/server'
import openai from '@/openai'

export async function POST(request: Request) {
    const {weatherData} = await request.json()
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.9,
        n: 1,
        stream: false,
        messages: [{ role: 'system', content: 'Pretend you are a weather reported and generate a weather report summary'}, { role: 'user', content: `I there can I get a summary of today\'s weather, use the following information to get the weather data: ${JSON.stringify(weatherData)}` }]
    })

    const {object} = response
    console.log("data: " + object)
    return NextResponse.json(object)
}