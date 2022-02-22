
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
            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);

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

            state.cartItems = state.cartItems.filter(product => product._id !== action.payload._id)


        },

        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(cartItem => cartItem._id === action.payload._id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter(product => product._id !== action.payload._id)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },

        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        getTotals: (state, action) => {

            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

    },

})

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;