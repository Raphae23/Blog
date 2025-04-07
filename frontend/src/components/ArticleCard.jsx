import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <div className="border rounded-lg p-4 shadow mb-4">
      <Link to={`/article/${article._id}`}>
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600">
          {article.content.substring(0, 100)}...
        </p>
      </Link>
    </div>
  );
}

export default ArticleCard;
