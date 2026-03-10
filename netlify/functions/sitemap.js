export async function handler() {

  const baseUrl = "https://echoesofhealing.co.uk"

  const staticPages = [
    "",
    "/about",
    "/booking",
    "/contact"
  ]

  // Fetch events
  const res = await fetch(`${baseUrl}/.netlify/functions/events`)
  const data = await res.json()

  const events = data.data || []

  const eventUrls = events.map(event => {
    return `
      <url>
        <loc>${baseUrl}/events/${event.id}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `
  }).join("")

  const staticUrls = staticPages.map(page => {
    return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <priority>0.9</priority>
      </url>
    `
  }).join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${eventUrls}
  </urlset>`

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/xml"
    },
    body: sitemap
  }
}