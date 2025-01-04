const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://subhankhan21:subhankhan9876@cluster0.4q3zj.mongodb.net/";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectToMongo;
