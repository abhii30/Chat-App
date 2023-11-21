const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data.js/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const colors = require("colors");
const { notFound } = require("./middlewares/errorHandlers");

dotenv.config();
connectDB();
const app = express();

//middleware
// app.use(notFound);
app.use(express.json());
// app.user(errorHandler);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/api/user", userRoutes);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   //   console.log(req.params.id);
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`.magenta.bold);
});
