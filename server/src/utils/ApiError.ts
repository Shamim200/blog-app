class ApiError extends Error {
  stausCode: number;
  override message: string;
  succes: boolean;
  errors: any[];
  data: null;

  constructor(
    stausCode: number,
    message: string = "Something went wrong",
    errors: any[] = [],
    stack: string = ""
  ) {
    super(message);
    this.stausCode = stausCode;
    this.message = message;
    this.succes = false;
    this.errors = errors;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
