import Article from "../models/Article.js";

export const getArticles = async (req, res) => {
  const articles = await Article.find().sort({ createdAt: -1 });
  res.json(articles);
};

export const getArticle = async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.json(article);
};

export const addComment = async (req, res) => {
  const { message } = req.body;
  const article = await Article.findById(req.params.id);
  article.comments.push({ message });
  await article.save();
  res.json(article);
};

export const addArticle = async(req, res)=>{
  try{
      const {title, content} = req.body
      const newArticle = new Article({
        title, content
      })
      await newArticle.save();
      return res.status(200).json({Success: "Article added successfully"})
   }catch(e){
      return res.status(500).json({Error: e.message})
   }
}

export const deleteArticle = async(req, res)=>{
  try{
    const id = "67f396ee518a34c5dec2add7"
    const deleteArticle = Article.findByIdAndDelete(id)
    if(!deleteArticle) return res.status(404).json({Error: "Article not found"})
      return res.status(200).json({Success: "Article deleted successfully"})
  }catch(error){
    return res.status(500).json({Error: error.message})
  }
}