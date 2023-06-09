const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())

const authRouter = require("./routes/auth.routes")
app.use('/auth', authRouter)

const userRouter = require("./routes/user.routes")
app.use('/user', userRouter)

app.listen(process.env.PORT, (err) => {
  if (err) console.error(err)
  console.log("Server is running on port ", process.env.PORT);
  require("./configs/db.config")
});