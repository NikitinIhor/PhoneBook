import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global"

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

export const registration = createAsyncThunk("auth/registration",
    async (newUser, thunkAPI) => {
        try {
            const res = await axios.post("/users/signup", newUser)
            setAuthHeader(res.data.token)
            return res.data

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const login = createAsyncThunk("auth/login",
    async (user, thunkAPI) => {
        try {
            const res = await axios.post("/users/login", user)
            setAuthHeader(res.data.token)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const logout = createAsyncThunk("auth/logout",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout")
            setAuthHeader("")
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const refresh = createAsyncThunk("auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get("/users/current");
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    },
    {
        condition: (_, thunkAPI) => {
            const state = thunkAPI.getState();
            return state.auth.token !== null
        }
    }
)