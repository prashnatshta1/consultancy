import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  category: String,
  date: { type: Date, default: Date.now },
}, {
  timestamps: true
});

export default mongoose.model("News", NewsSchema);
