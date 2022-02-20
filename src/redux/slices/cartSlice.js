import { createSlice } from '@reduxjs/toolkit'





const cartSlice = createSlice({
    name: 'cart',
    initialState: {

        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    },

    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(item => item.product_id === action.payload.product_id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(product => product.product_id !== action.payload)


        },
        increment: (state) => {

            state.cartTotalQuantity += 1
        },
        decrement: (state) => {
            state.cartTotalQuantity -= 1
        },
        incrementByAmount: (state, action) => {
            state.cartTotalQuantity += action.payload
        },
    },

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;