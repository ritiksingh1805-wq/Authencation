export class ApiError extends Error {
  constructor(statusCode, message, error = null) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.success = false;
  }
}
