
import { configureStore } from '@reduxjs/toolkit'
import auth from "./authSlice"
import my from './meSlice'

export const store = configureStore({
  reducer: {
    auth: auth,
    me: my
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch