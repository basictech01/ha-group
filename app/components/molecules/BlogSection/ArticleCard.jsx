import Button from "./Button";

const ArticleCard = ({ article }) => {
    return (
        <div className="featured-article">
            <img src={article.image} alt={article.title} className="featured-img" />
            <div className="article-content">
                <div className="article-meta">
                    <p>{article.author}</p>
                    <p>{article.date}</p>
                </div>
                <h2>{article.title}</h2>
                <Button text="See More" />
            </div>
        </div>
    );
};

export default ArticleCard;
