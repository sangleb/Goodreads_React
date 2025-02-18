import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "src/Configs/AxiosInstance";

const initialState = {
    bookList: []
}

export const getAllBooks = createAsyncThunk('course/getAllBooks', async () =>{
    try {
        const response = axiosInstance.get("books");
        toast.promise(response, {
            loading: 'loading books data',
            success: 'Successfully loaded all books!',
            error: 'Something went wrong'
        })
        return await response;

    } catch (error) {
        console.log(error);
        toast.error("cannot download boks, something went wrong");
        
    }
});

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
    },
    extraReducers : (builder) => {
        builder.addCase(getAllBooks.fulfilled, (state, action) => {
            if (action?.payload?.data?.data) {
                state.bookList = action?.payload?.data?.data;
            }
        })
    }
    
});

export default bookSlice.reducer;