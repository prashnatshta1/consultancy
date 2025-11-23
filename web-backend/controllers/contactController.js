import Contact from "../models/Contact.js";

// USER: POST contact 
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({
      ...req.body,
      image: req.file ? req.file.path : null,
    });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// USER + ADMIN: GET all
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADMIN: UPDATE
export const updateContact = async (req, res) => {
  try {
    const updateData = req.body;
    if (req.file) updateData.image = req.file.path;

    const contact = await Contact.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADMIN: DELETE
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
