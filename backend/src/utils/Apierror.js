
export class ApiError extends Error{
    constructor(statusCode,message="somenthing went wrong",errors)
    {
            super(message);
            this.statusCode=statusCode;
            this.message=message;
            this.success=false;
            this.errors=errors;
    }
}

export class ApiError extends Error {
  constructor(statusCode, message, error = null) {
    super(message);

    this.statusCode = statusCode;
    this.message = message;
    this.error = error;
    this.success = false;
  }
}

