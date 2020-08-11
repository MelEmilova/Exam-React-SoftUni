module.exports = {
    development: {
        port: process.env.PORT ||3050,
        authCookieName: 'x-auth-token',
        dataBaseURL: 'mongodb+srv://user:softuni-password@softuni-oydey.mongodb.net/cooking_recipes?retryWrites=true&w=majority',
        secretKey: 'Nemezida-Azimov',
    },
    production: {}
};