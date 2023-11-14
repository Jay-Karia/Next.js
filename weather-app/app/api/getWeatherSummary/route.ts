import OpenAI from 'openai';

// @ts-ignore
const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

const generateWeatherSummary = async (city: string): Promise<string> => {
    const prompt = `Generate a weather summary for ${city} for today.`;

    try {
        // @ts-ignore
        const response = await openai.create('text-davinci-003', {
            prompt,
            max_tokens: 100,
        });

        return response.data.choices[0]?.text?.trim() || 'Unable to generate a weather summary.';
    } catch (error) {
        console.error('Error generating weather summary:', error);
        return 'Error generating weather summary.';
    }
};

// Example usage
const city = 'New York';
generateWeatherSummary(city).then((summary) => {
    console.log('Weather Summary:', summary);
});