import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers: {
        // { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuiz: (state, action) => {
            const { id } = action.payload
            state.quizzes[id] = action.payload
        }
    }
})
export const addLinkQuiz = (quiz) => {
    const { id, topicId } = quiz;
    return (dispatch) => {
        console.log(quiz)
        dispatch({ type: 'quizzes/addQuiz', payload: quiz });
        dispatch({
            type: 'topics/addQuizToTopic', payload: {
                quizId: id,
                topicId: topicId
            }
        })
    }
}

export const selectAllQuizzes = state => {
    return state.quizzes.quizzes
}
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;