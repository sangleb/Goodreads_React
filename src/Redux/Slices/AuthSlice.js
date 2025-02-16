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
        console.log(response);
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully signed up !',
            error: 'Something went wrong'
        })
        return await response;
    } catch (error) {
        if(error?.response?.data?.err){
            toast.error(error?.response?.data?.err);
        }else{
            toast.error('Cannot signin, something went wrong');
        }
    }
});

export const signin = createAsyncThunk('auth/signin', async (data) =>{
    try {
        const response = axiosInstance.post("signin", data);
        toast.promise(response, {
            loading: 'Submitting form',
            success: 'Successfully signed in !',
            error: 'Something went wrong'
        })

        return await response;
    } catch (error) {
        console.log(error);
        toast.error("cannot signin, something went wrong");
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = '';
            state.token = '';
            localStorage.clear();
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(signin.fulfilled, (state, action)=>{
            if(action?.payload?.data){
                state.isLoggedIn = (action?.payload?.data?.data !== undefined)
                state.username = action?.payload?.data?.username;
                state.token = action?.payload?.data?.token;
                localStorage.setItem('isLoggedIn', (action?.payload?.data?.data !== undefined));
                localStorage.setItem('username', action?.payload?.data?.data?.username);
                localStorage.setItem('token', action?.payload?.data?.data?.token);
            }  
        })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;