 export class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message); // Call the parent Error class constructor
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Set the prototype explicitly to maintain proper prototype chain
    Object.setPrototypeOf(this, new.target.prototype);

    // Capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

//  module.exports = AppError;
