const asyncWrapper =(fn)=>
{
//after performing where to go ---next
return async(req,res,next)=>
{
try{
    await fn(req,res,next)

}catch(error)
{
    next(error)

}
}
}
export default asyncWrapper;