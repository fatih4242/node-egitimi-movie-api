const jwt = require('jsonwebtoken');

module.exports = (req, res ,next) => {
    const token = req.headers['x-access-toker'] || req.body.token || rer.query.token

    if(token){
        jwt.verify(token.req.app.get('api_secret_key'),(err,decoded) =>{
            if(err){
                res.json({
                    status: false,
                    message: 'Failed to authenticate token'
                })
            }
                
            else{
                res.json({
                    status:false,
                    message: 'No token provided'
                })
            }
               
        })
    }else{
        res.json({
            status: false,
            message: 'No token provided'
        })
    }
};

