import express from "express";
import upload from "../middleware/upload.js";
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", upload.single("image"), createContact); // user
router.get("/", getContacts);                            // user & admin
router.put("/:id", upload.single("image"), updateContact); // admin
router.delete("/:id", deleteContact);                      // admin

export default router;
