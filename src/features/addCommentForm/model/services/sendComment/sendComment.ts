import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { addCommentFormActions } from '../../slices/addCommentFormSlice';
import { getAddCommentFormText } from '../../../model/selectors/addCommentFormSelectors';

export const sendComment = createAsyncThunk<
    Comment,
    void,
    ThunkConfig<string>
>(
    'addCommentForm/sendComment',
    async (authData, thunkAPI) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userData: userData?.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
