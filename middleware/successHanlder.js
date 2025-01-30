
export const successHandler=(res,message,data={},status=200)=>{
    res.status(status).json({
        status,
        success:true,
        message,
        data,
    });
};
