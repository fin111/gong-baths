import 'dotenv/config';

export default async function handler(event) {
    try {
        const response = await fetch('https://api.tickettailor.com/v1/events', {
            headers: {
                Authorization: `Basic ${Buffer
                    .from(process.env.TT_API_KEY + ':')
                    .toString('base64')}`
            }
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Failed to fetch events' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    };
};
