import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

interface MeData {
    data: object
}

interface Me {
    // skills: object,
    // profile: object,
    // education: object,
    // experience: object,
    data: object
    isLoading: boolean,
    error: null
}

const initialState: Me = {
    data: {},
    isLoading: false,
    error: null
}

export const fetchMe = createAsyncThunk(
    "user/me",
    async(_, {dispatch, getState}) => {
        try {
            const response = await axios.get<MeData>(`http://127.0.0.1:8000/api/me`)
            dispatch(meSuccess(response))
            return response.data
        } catch (er) {
            dispatch(meFailed("error"))
        }

    }
)

const meSlice = createSlice({
    name: "me",
    initialState,
    reducers: {
        meSuccess(state, action: PayloadAction<any>) {
            state.data = action.payload.data
            state.isLoading = false
        },
        meFailed(state, action: PayloadAction<any>) {
            
            state.error = action.payload
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMe.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
    }
})

export const {meSuccess, meFailed} = meSlice.actions
export const selectMeData = (state: RootState) => state.me.data
export const selectMeLoading = (state: RootState) => state.me.isLoading
export const selectMeError = (state: RootState) => state.me.error;



export default meSlice.reducer