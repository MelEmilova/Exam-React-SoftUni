const env = process.env.NODE_ENV || "development";
const config = require('../config/config')[env];
const jwt = require('jsonwebtoken');

const createToken = (data) => {

    const userToken = jwt.sign(data, config.secretKey,{expiresIn: '10h'})  
    return userToken;
};

const verifyToken = (token) => {
    return new Promise((resolve,reject) => {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                 reject(err);
                 return
            }
            resolve(decoded)
        }) 
    })
};

module.exports = {
    createToken,
    verifyToken
}
