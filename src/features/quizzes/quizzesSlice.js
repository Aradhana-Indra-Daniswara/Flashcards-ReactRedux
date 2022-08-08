import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {

        }
    },
    reducers: {
        // { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
})
export const createNewQuiz = (quiz) => {
    const { id, topicId } = quiz;
    return (dispatch) => {
        dispatch(addQuiz(quiz));
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