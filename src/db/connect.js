const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/olympics", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((err) => {
//     console.log(err.message);
//     console.log("No connection established");
//   });

try {
  mongoose.connect("mongodb://127.0.0.1:27017/mydb");
  console.log("connected...");
} catch (err) {
  console.log(err.message);
}
