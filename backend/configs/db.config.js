const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())

// const authRouter = require("./routes/auth.routes")
// app.use('/auth', authRouter)



// app.listen(process.env.PORT, (err) => {
//   if (err) console.error(err)
//   console.log("Server is running on port ", process.env.PORT);
//   require("./configs/db.config")
// });

const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('error', (err) => console.error(err))

db.once('open', () => console.log("MongoDB connected successfully!"));