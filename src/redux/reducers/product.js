import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchData = createAsyncThunk('product/fetchData', async () => {
    try {

        const response = await fetch(' http://localhost:5000/product');
        // console.log("response",await response.json());
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
})

export const deleteData = createAsyncThunk('product/deleteData', async (productid) => {
    try {
        const response = await fetch(`http://localhost:5000/product/${productid}`, {
            method: 'DELETE',
        });
        return productid;
    } catch (error) {
        throw new Error(error);
    }
})


const initialState = {
    product: [],
    isLoading: false,
    isError: null
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.isLoading = true;
            state.isError = null;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            console.log("responsese",action.payload);
            state.isLoading = false;
            console.log("****",state.isLoading);
            state.product=action.payload;
            state.isError = null;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        })

        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.isLoading = false;
           state.product= state.product.filter((p)=>p.id!==action.payload);
            state.isError = null;
        })
    }
});
export const productReducer = productSlice.reducer;
// export const productAction=productSlice.actions;
