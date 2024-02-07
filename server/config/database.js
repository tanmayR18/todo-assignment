const mongoose = require("mongoose")
require('dotenv').config()

exports.connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`MongoDB Connected`))
        .catch((err) => {
            console.log("Database connection failed")
            console.error(err)
            process.exit(1)
        });
}