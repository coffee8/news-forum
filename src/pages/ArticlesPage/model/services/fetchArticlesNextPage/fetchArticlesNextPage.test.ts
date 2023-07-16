import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchArticlesNextPage } from './fetchArticlesNextPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchArticlesNextPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                entities: {},
                ids: [],
                page: 2,
                hasMore: true,
                isLoading: false,
                limit: 5,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                entities: {},
                ids: [],
                page: 2,
                hasMore: false,
                isLoading: false,
                limit: 5,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('while loading', async () => {
        const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
            articlesPage: {
                entities: {},
                ids: [],
                page: 2,
                hasMore: false,
                isLoading: true,
                limit: 5,
            },
        });

        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
