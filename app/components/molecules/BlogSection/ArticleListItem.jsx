const ArticleListItem = ({ article }) => {
  return (
    <div className="article-list-item">
      <img src={article.image} alt="Thumbnail" className="list-thumbnail" />
      <div className="list-content">
        <p className="blog-name">{article.blogName}</p>
        <p className="list-date">{article.date}</p>
        <p className="list-description">{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleListItem;
