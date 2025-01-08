const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://bondfirelife:Usama10091@cluster0.j47om.mongodb.net/Kiraydar?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("database connecteed successfully"))
    .catch(() => console.log("database connection Error"));
};

module.exports = connectDB;
