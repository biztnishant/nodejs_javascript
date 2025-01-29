import { AppError } from "../errorhandler.js";

export const errorMiddleware = (
  error,
  req,
  res,
  next
) => {
  if (error instanceof AppError) {
    // Handle custom AppError
    res.status(error.statusCode).json({
      status: "error",
      statusCode: error.statusCode,
      message: error.message,
    });
  } else {
    // Handle unexpected errors
    res.status(500).json({
      status: "error",
      statusCode: 500,
      message: "An unexpected error occurred",
    });
  }
};
