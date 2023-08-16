import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;
        const _inited = getArticlesPageInited(getState());

        if (!_inited) {
            searchParams.forEach((value, key) => {
                // eslint-disable-next-line default-case
                switch (key) {
                case 'order':
                    dispatch(articlesPageActions.setOrder(value as SortOrder));
                    break;
                case 'sort':
                    dispatch(articlesPageActions.setSort(value as ArticleSortField));
                    break;
                case 'search':
                    dispatch(articlesPageActions.setSearch(value));
                }
            });
            dispatch(articlesPageActions.initialState());
            dispatch(fetchArticlesList({}));
        }
    },
);
