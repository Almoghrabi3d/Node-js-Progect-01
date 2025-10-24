const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Root");
});

app.get("/Hello", (req, res) => {
    res.send("Hello World!");

});

app.get("/numbers", (req, res) => {
    let numbers = "";
    for (let i = 1; i <= 100; i++) {
        numbers += i + " _ ";
    }
    res.send(`the numbers from 1 to 100 are: ${numbers}`);
});

app.get("/name", (req, res) => {
    res.send("My Name is Marwan Almoghrabi");
});

app.get("/age", (req, res) => {
    res.send("My Age is 42");
});

app.post("/comment", (req, res) => {
    res.send("Comment received");
});

app.put("/enter", (req, res) => {
    res.send("Enter your email");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// To run this code, make sure you have Express installed:
// npm install express
