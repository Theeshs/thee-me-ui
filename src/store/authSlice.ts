import { createSlice, PayloadAction, createAsyncThunk, isAction } from '@reduxjs/toolkit';
import axios from "axios"
import { RootState } from './store';
// import { login } from "../store/authSlice"

interface AuthState {
    isLoggedIn: boolean,
    data: any,
    isLoading: boolean,
    error: null
}

interface RegistrationPayload {
    payload: any
    isLoggedIn: boolean
}

const initialState: AuthState = {
    isLoggedIn: false,
    data: {},
    isLoading: false,
    error: null
}


export const signup =  createAsyncThunk(
    'user/signup',
    async (requestPayload, {dispatch, getState}) => {
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/signup`, requestPayload)
            console.log(response)
            dispatch(registerSuccess(response))
            return response
        } catch(error) {
            console.log(error)
            dispatch(registerFailed(error))
        }
    }
)



const authSice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        registerSuccess(state, action: PayloadAction<any>) {
            debugger
            state.data = action.payload.data
            state.isLoggedIn = true
            state.isLoading = false
        },
        registerFailed(state, action: PayloadAction<any>) {
            debugger
            console.log(action.payload)
            state.isLoggedIn = false
            debugger
            state.isLoading = false
            state.error = action.payload           
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state) => {
            debugger
            state.isLoading = true
            state.error = null
            debugger
        })
    }
})

export const { registerSuccess, registerFailed } = authSice.actions
export const selectRegisterUserData = (state: RootState) => state.auth.data
export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;

export default authSice.reducer;