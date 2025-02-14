import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "src/Configs/AxiosInstance";

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
}

export const signup = createAsyncThunk('auth/signup', async (data) =>{
    try {
        const response = axiosInstance.post("signup", data);
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully signed up !',
            error: 'Something went wrong'
        })

        return await response;
    } catch (error) {
        console.log(error);
        toast.error("cannot signup, something went wrong");
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: () =>{

    }
});

export default authSlice.reducer;