const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    mongoose.set("strictQuery", true); //this is a synchronous operation
    const connect = await mongoose.connect(url);
    console.log("MongoDB connected at host :-", connect.connection.host);
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
