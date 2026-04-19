const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE = "quiz.json";


app.post("/saveQuiz", (req, res) => {
    console.log("DATA RECEIVED:", req.body); // 👈 ADD THIS LINE

    fs.writeFileSync(FILE, JSON.stringify(req.body, null, 2));
    res.send({ message: "Quiz saved!" });
});


app.get("/getQuiz", (req, res) => {
    if (!fs.existsSync(FILE)) return res.send([]);
    const data = fs.readFileSync(FILE);
    res.send(JSON.parse(data));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});