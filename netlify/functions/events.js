export async function handler(event) {
  try {
    const apiKey = process.env.TT_API_KEY;

    console.log('API KEY EXISTS:', !!apiKey);
    console.log('API KEY LENGTH:', apiKey?.length);

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing TT_API_KEY' })
      };
    }

    const auth = Buffer
      .from(`${apiKey}:`)
      .toString('base64');

    console.log('AUTH HEADER:', auth);

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

    console.log('STATUS:', response.status);
    console.log('BODY:', data);

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
