const express = require("express");

const app = express();
app.use(express.json()); 

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
    res.send(`The Numbers from 1 to 100 are : ${numbers}`);
});

app.get("/sum/:number1/:number2", (req, res) => {
    const num1 =  req.params.number1;
    const num2 =  req.params.number2;
    const total = Number(num1) + Number(num2);
        res.send(`The Sum = ${total}`);
} );

app.get("/sayHello", (req, res) => {
   console.log(req.body);
   console.log(req.query);  
   res.send(`Hello ${req.body.name} Your Age is ${req.query.age}`);
});

app.get("/Info", (req, res) => { 

    res.json({
        name: "Marwan Almoghrabi",
        age: 42,
        city: "Jarash",
        profession: "Blockchain Developer",
        country: "Jordan",
        language: "JavaScript & Python & Solidity & HTML & CSS"
    });
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
