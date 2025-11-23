import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  image: String, // optional
});

export default mongoose.model("Contact", ContactSchema);
