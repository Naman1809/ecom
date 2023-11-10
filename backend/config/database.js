const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://namankukreja01:mIMLYIxJEIXoYo89@cluster0.idk2n9q.mongodb.net/MarketLink?retryWrites=true&w=majority";

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URI);
    // console.log(MONGO_URI)
    console.log("Mongo connected:", connect.connection.host);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDatabase;
