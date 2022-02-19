import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch('https://digidokan.southeastasia.cloudapp.azure.com/products/getProducts/1')
            .then(res => res.json())
        return response
    }
)


const productSlice = createSlice({
    name: 'products',
    initialState: {
        discover: [],
        value: 0,
        cart: []
    },

    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(product => product.id !== action.payload)

        },
        increment: (state) => {

            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.fulfilled, (state, action) => {

            state.discover = action.payload
        })
    },
})

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;