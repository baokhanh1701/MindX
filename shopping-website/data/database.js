const mongoose = require('mongoose');

const connectDatabase = async () => {
    //connect to database
    try {
        const dbConfig = `mongodb://localhost/fullstack-shopping-website`;
        const connect = await mongoose.connect(dbConfig);
        console.log(`Mongo DB connected ${connect.connection.host}`);
    } catch (e) {
        console.log(e.message);
    }
}

module.exports = connectDatabase;