import { useState } from "react";
import axios from "axios";

function Upload() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/article", {
        title,
        content,
      });
      alert("Article uploaded!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to upload article");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Upload New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={6}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
