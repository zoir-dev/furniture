import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BasketItem {
    id: number;
    title: string;
    count: number;
    img: string,
    much: number
}

interface BasketState {
    items: BasketItem[];
}

const initialState: BasketState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BasketItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        removeItem: (state, action: PayloadAction<BasketItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.count -= 1;

                if (existingItem.count === 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
        }
    },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
