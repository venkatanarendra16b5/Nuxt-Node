const userLogin = (req:any,res:any) =>{
    return new Promise(async(resolve,reject) =>{
        try{
            console.log('hello')
            res.status(200).send({status: true})
        }
        catch (ErCatch) {
          return reject(ErCatch);
        }
    })
}
export default{
    userLogin
}