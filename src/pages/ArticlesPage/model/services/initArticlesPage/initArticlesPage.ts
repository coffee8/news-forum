import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = getArticlesPageInited(getState());

        if (!_inited) {
            dispatch(articlesPageActions.initialState());
            dispatch(fetchArticlesList({}));
        }
    },
);
