const express = require("express");
const app = express();
const port = 5001;


app.use("/home", express.static("public/index.html")); 
app.use("/contact", express.static("public/contact.html"));
app.use("/questions", express.static("public/questions.html"))

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});

