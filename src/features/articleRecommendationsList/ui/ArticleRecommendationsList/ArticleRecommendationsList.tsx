import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { memo } from 'react';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string,
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const {
        data: articles,
        isLoading,
        error,
    } = useArticleRecommendationsList(3);

    const { t } = useTranslation();

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap="8">
            <Text
                title={t('Рекомендации')}
                size={TextSize.L}
            />
            <ArticleList
                articles={articles}
                target="_blank"
            />
        </VStack>

    );
});
