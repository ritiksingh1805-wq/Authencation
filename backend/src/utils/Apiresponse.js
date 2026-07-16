export class ApiResponse{

    constructor(message,data=null,statusCode){
        this.message=message;
        this.success=statusCode<400;
        this.statusCode=statusCode;
        this.data=data;
    }
}

		constructor(statusCode,message,data = null)
		{
			this.statusCode=statusCode;
			this.message=message;
			this.success=statusCode<400;
			this.data=data;
		}
	
