import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        }
    },
    reducers: {
        // {id: '123456', name: 'name of topic', icon: 'icon url'}
        addTopic: (state, action) => {
            const { id } = action.payload;
            state.topics[id] = {
                ...action.payload,
                quizIds: []
            }
        },
        // {quizId: '123', topicId: '456'}
        addQuizToTopic: (state, action) => {
            const {quizId, topicId} = action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
})

export const selectTopics = state => {
    return state.topics.topics;
}

export default topicsSlice.reducer;
export const { addTopic, addQuizToTopic } = topicsSlice.actions