export {}

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetIdOrEventName: string | Date,
      params?: Record<string, any>
    ) => void
  }
}