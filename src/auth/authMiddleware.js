// authorization functions
const isLoggedIn = (req, res, next) => {
    console.log(req.signedCookies.user_id)
    if(req.signedCookies.user_id){
        next()
    } else {
        res.status(401).json({
            message: 'Unauthorized, Please Login'
        })
    }
}

module.exports = {
    isLoggedIn
}