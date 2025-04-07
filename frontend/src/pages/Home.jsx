import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // 👈 import Footer component

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get("http://localhost:5000/articles");
      setArticles(res.data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article._id}
            to={`/article/${article._id}`}
            className="block bg-white rounded-xl shadow hover:shadow-lg p-4 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 line-clamp-3">{article.content}</p>
          </Link>
        ))}
      </div>

      {/* 👇 Social Icons Section */}
      <Footer />
    </>
  );
}

export default Home;
