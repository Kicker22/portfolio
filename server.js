// Base setup
const express = require("express");

const app = express();

// inital port
const port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================


require("./Routes/htmlRoutes")(app);



// app.use(express.static(__dirname + "/app/html"));
app.use(express.static(__dirname + "/App/CSS"));
app.use(express.static(__dirname + "/App/JS"));
app.use(express.static(__dirname + "/App/images"));

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
