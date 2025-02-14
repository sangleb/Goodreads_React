const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: () =>{

    }
});

export default authSlice.reducer;