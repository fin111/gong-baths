export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
    console.log('eventName', eventName);
    console.log('params', params);
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}