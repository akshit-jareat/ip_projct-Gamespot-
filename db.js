const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://avinashgulerias84:anything@foranything.zzfkm.mongodb.net/?retryWrites=true&w=majority&appName=foranything');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;