import multer from "multer";

const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

// File filter for validating file type
const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg, and .png formats are allowed"));
  }
};
// configuartion of memory storage
const memoryStorage = multer.memoryStorage();

export const uploadToMemory = multer({
  storage: memoryStorage,
  fileFilter,
  limits: { fileSize: 1024 * 2 }, // 2MB limit
});