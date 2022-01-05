import { createSlice, configureStore } from '@reduxjs/toolkit';

const initAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;