const express = require("express");

const app = express();
app.get("/Hello", (req, res) => {
    res.send("Hello World!");

});

app.get("/Goodbye", (req, res) => {
    res.send("Goodbye World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// To run this code, make sure you have Express installed:
// npm install express
