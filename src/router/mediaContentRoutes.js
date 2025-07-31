import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import imagekit from '../config/imagekit.js';

const mediaContentRoute = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Image file preview Route
mediaContentRoute.get('/preview/:filename', (req, res) => {
  res.sendFile(join(__dirname, '../utils/upload', req.params.filename));
});


// Provide Imagekit upload auth params to frontend
mediaContentRoute.get('/imagekit/auth', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  console.log("imagekit -", result)
  res.send(result);
});


mediaContentRoute.delete("/delete/:fileId", async (req, res) => {
  const { fileId } = req.params;
  try {
    const result = await imagekit.deleteFile(fileId);
    return res.status(200).json({ success: true, message: "Image deleted", result });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to delete image", error: err.message });
  }
});

export default mediaContentRoute;
