export const Delay = async (ms: number = 1 * 1000) => new Promise(p => setTimeout(p, ms))