import mongoose from "mongoose";

// Define the Article schema
const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: [
       {
        message: { type: String},
        createdAt: { type: Date, default: Date.now },
      },
    ]

  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Create the model
const articleModel = mongoose.model("articleModel", articleSchema);

export default articleModel;
