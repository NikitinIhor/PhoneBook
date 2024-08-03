import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, registration } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        loading: false,
        error: false,
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.isLoggedIn = true
                state.token = action.payload.token
                state.user = action.payload.user
            })
            .addCase(registration.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(login.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.isLoggedIn = true
                state.token = action.payload.token
                state.user = action.payload.user
            })
            .addCase(login.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(logout.pending, (state) => {
                state.loading = true
                state.error = false
            })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false
                state.error = false
                state.isLoggedIn = false
                state.token = null
                state.user = {
                    name: null,
                    email: null,
                }
            })
            .addCase(logout.rejected, (state) => {
                state.loading = false
                state.error = true
            })
            .addCase(refresh.pending, (state) => {
                state.loading = true
                state.isRefreshing = true
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.isRefreshing = false
                state.loading = false
                state.isLoggedIn = true
                state.user = action.payload
            })
            .addCase(refresh.rejected, (state) => {
                state.isRefreshing = false
                state.loading = false
                state.error = true
                state.token = null
                state.user = {
                    name: null,
                    email: null,
                }
            })
    }
})

export default authSlice.reducer