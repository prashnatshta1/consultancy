import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

export default mongoose.model("Partner", PartnerSchema);
