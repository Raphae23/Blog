import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/article/${id}`);
        setArticle(res.data);
      } catch (err) {
        console.error("Error loading article:", err);
      }
    };

    fetchArticle();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const res = await axios.post(`http://localhost:5000/article/${id}/comments`, {message: commentText,});
      setArticle(res.data);
      setCommentText("");
    } catch (err) {
      console.error("Error submitting comment:", err);
    }
  };

  if (!article) return <p>Loading article...</p>;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{article.title}</h2>
        <p className="mt-4 text-gray-800">{article.content}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">💬 Comments</h3>
        {article.comments.length > 0 ? (
          article.comments.map((comment, index) => (
            <div key={index} className="p-2 border rounded mb-2">
              {comment.message}
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
}

export default ArticleDetail;
