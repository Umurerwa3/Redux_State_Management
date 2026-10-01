import { applyMiddleware, createStore } from 'redux'
import loggerModule from 'redux-logger'
import { rootReducer } from './reducers'

const logger = (loggerModule as unknown as { logger: typeof loggerModule }).logger

export const store = createStore(rootReducer, applyMiddleware(logger))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch