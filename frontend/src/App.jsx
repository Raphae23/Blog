import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import Upload from "./pages/Upload";
import Contact from "./pages/Contact";
import Follow from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">📝 My Personal Blog</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
