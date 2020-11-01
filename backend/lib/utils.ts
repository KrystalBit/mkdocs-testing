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
  const queue: Array<() => Promise<void>> = []
  let lastIntervalStart = 0
  let numRequestsPerInterval = 0
  let timeout: NodeJS.Timeout | undefined
  /**
   * Gets called at a set interval to remove items from the queue.
   * This is a self-adjusting timer, since the browser's setTimeout is highly inaccurate.
   */
  const dequeue = () => {
    const intervalEnd = lastIntervalStart + interval
    const now = Date.now()
    /**
     * Adjust the timer if it was called too early.
     */
    if (now < intervalEnd) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      timeout !== undefined && clearTimeout(timeout)
      timeout = setTimeout(dequeue, intervalEnd - now)
      return
    }
    lastIntervalStart = now
    numRequestsPerInterval = 0
    for (const callback of queue.splice(0, maxRequestsPerInterval)) {
      numRequestsPerInterval++
      void callback()
    }