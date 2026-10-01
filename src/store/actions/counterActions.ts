export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const increment = () => ({ type: INCREMENT as typeof INCREMENT })
export const decrement = () => ({ type: DECREMENT as typeof DECREMENT })
export const reset = () => ({ type: RESET as typeof RESET })

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>