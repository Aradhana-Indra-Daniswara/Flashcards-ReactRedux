import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {

        }
    },
    reducers: {
        // { id: '123', front: 'front of card', back: 'back of card'}
        addCard: (state, action) => {
            const { id } = action.payload
            state.cards[id] = action.payload
        }
    }
})

export const selectAllCards = state => {
    return state.cards.cards
}
export const {addCard} = cardSlice.actions
export default cardSlice.reducer