import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {

        const response = await fetch('https://digidokan.southeastasia.cloudapp.azure.com/products/getProducts/1')
            .then(res => res.json())
        return response
    }
)

// export const fetchProductById = createAsyncThunk(
//     'product/fetchProductById',
//     async (id) => {
//         const response = await fetch(`https://digidokan.southeastasia.cloudapp.azure.com/products/getProducts/${id}`)
//             .then(res => res.json())
//         return response
//     }
// )


const productSlice = createSlice({
    name: 'products',
    initialState: {
        discover: [],

    },

    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {

            state.discover = action.payload
        })

        // builder.addCase(fetchProductById.fulfilled, (state, action) => {

        //     state.newState = action.payload
        // })
    },
})



export default productSlice.reducer;