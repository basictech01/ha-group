import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map((article) => (
                <ArticleListItem key={article.id} article={article} />
            ))}
        </div>
    );
};

export default ArticleList;
