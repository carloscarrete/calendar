import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined
    },
    reducers: {
        onChecking: (state) => {
            state.status = 'checking'
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = 'autheticated';
            state.user = payload;
            state.errorMessage = undefined
        }

    },
});

export const { checking, onLogin } = authSlice.actions;