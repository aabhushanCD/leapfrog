import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({ origin: "*" }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;

app.use("/leap", (req, res) => {
  try {
    const { name } = req.body;

    return res.status(200).json({ message: `Welcome,` + name });
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
