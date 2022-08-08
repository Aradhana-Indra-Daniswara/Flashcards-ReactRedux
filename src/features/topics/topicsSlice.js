import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            
        }
    },
    // {id: '123456', name: 'name of topic', icon: 'icon url'}
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = {
              id: id,
              name: name,
              icon: icon,
              quizIds: []
            };
          }
    }
})

export const selectTopics = state => {
    return state.topics.topics;
}

export default topicsSlice.reducer;
export const { addTopic } = topicsSlice.actions