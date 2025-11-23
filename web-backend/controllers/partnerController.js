import Partner from "../models/Partner.js";

// GET
export const getPartners = async (req, res) => {
  const data = await Partner.find();
  res.json(data);
};

// POST
export const createPartner = async (req, res) => {
  const partner = await Partner.create({
    ...req.body,
    image: req.file ? req.file.path : null,
  });
  res.json(partner);
};

// PUT
export const updatePartner = async (req, res) => {
  const updateData = req.body;
  if (req.file) updateData.image = req.file.path;

  const partner = await Partner.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
  });

  res.json(partner);
};

// DELETE
export const deletePartner = async (req, res) => {
  await Partner.findByIdAndDelete(req.params.id);
  res.json({ message: "Partner deleted" });
};
