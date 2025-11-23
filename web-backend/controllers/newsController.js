import News from "../models/News.js";

// GET
export const getNews = async (req, res) => {
  const news = await News.find();
  res.json(news);
};

// POST
export const createNews = async (req, res) => {
  const news = await News.create({
    ...req.body,
    image: req.file ? req.file.path : null,
  });

  res.json(news);
};

// PUT
export const updateNews = async (req, res) => {
  const updateData = req.body;
  if (req.file) updateData.image = req.file.path;

  const news = await News.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
  });

  res.json(news);
};

// DELETE
export const deleteNews = async (req, res) => {
  await News.findByIdAndDelete(req.params.id);
  res.json({ message: "News deleted" });
};
