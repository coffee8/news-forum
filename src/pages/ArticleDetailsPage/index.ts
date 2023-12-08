export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type {
    ArticleDetailsPageRecommendationsSchema,
} from './model/types/articleDetailsPageRecommendationsSchema';
export type { ArticleDetailsPageSchema } from './model/types/index';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticleDetailsPageAsync';
export { getCanEditArticle } from './model/selectors/article';
