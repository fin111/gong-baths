export async function handler(event) {
  try {
    const apiKey = process.env.TT_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing TT_API_KEY' })
      };
    }

    const auth = Buffer
      .from(`${apiKey}:`)
      .toString('base64');

    const response = await fetch(
      'https://api.tickettailor.com/v1/events',
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data)
    };

  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch events' })
    };
  }
}
