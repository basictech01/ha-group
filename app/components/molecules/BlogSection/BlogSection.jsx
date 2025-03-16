import Heading from "./Heading";
import ArticleCard from "./ArticleCard";
import ArticleList from "./ArticleList";
import articles from "../../../data/articles.json";
import "./BlogSection.css";

const BlogSection = () => {

    return (
        <div className="blog-section">
            <Heading title="Blog &" highlight="Articles" />
            {articles.length > 0 && <ArticleCard article={articles[0]} />}
            <ArticleList articles={articles.slice(1)} />
        </div>
    );
};

export default BlogSection;
