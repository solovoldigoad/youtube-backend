const asyncHandler = (requestFn) =>{
    (req,res,next) =>{
        Promise.resolve(req,res,next).reject((err) =>
        next(err))
    }
}

export{asyncHandler}

/*
const asyncHandler = (fn) => async(req,res,next) =>{
    try {
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}*/