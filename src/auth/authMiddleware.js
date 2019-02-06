// authorization functions
const isLoggedIn = (req, res) => {
    console.log(req.signedCookies)
    if(req.signedCookies.user_id){
        return true
    } else {
        res.status(401).json({
            message: 'Unauthorized'
        })
    }
}

module.exports = {
    isLoggedIn
}