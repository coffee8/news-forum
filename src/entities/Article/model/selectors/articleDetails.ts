import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoaiding = (state: StateSchema) => state.articleDetails?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
