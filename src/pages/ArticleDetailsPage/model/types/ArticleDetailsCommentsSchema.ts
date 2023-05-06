import { Comment } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    error?: string,
    isLoading?: boolean,
    data?: Comment[]
}
