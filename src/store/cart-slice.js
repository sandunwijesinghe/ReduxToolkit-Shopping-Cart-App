import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name: 'cart',
    initialState:{
        itemList:[],
        totalQuantity: 0,
       
        showCart:false
    },
    reducers: {
        addToCart(state,action){

            const newItem=action.payload
            const exsistingItem = state.itemList.find(item => item.id === newItem.id)

            if(exsistingItem){
                exsistingItem.quantity++;
                exsistingItem.totalPrice += newItem.price;
            }else{
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    name: newItem.name,
                    totalPrice: newItem.price,

                });
                state.totalQuantity++;
            } 
           
        },
        removeFromCart(state,action){
            const itemId=action.payload
            const exsistingItem = state.itemList.find(item => item.id === itemId);
            if(exsistingItem.quantity===1){
               state.itemList=state.itemList.filter(item => item.id !== itemId)
               state.totalQuantity--;
            }else{
                exsistingItem.quantity--;
                exsistingItem.totalPrice -=exsistingItem.price
            }
        },
        setShowCart(state){
            state.showCart=!state.showCart;
        }
    }
})

export const cartActions=cartSlice.actions;
export default cartSlice;