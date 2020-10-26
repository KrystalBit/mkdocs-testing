export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function throttledQueue(
  maxRequestsPerInterval: number,
  interval: number,
  evenlySpaced = false
) {
  /**
   * If all requests should be evenly spaced, adjust to suit.
   */
  if (evenlySpaced) {
    interval = interval / maxRequestsPerInterval
    maxRequestsPerInterval = 1
  }
  const queue: Array<() => Promise<void>> =