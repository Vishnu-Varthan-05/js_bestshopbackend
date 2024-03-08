// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')

//routes
const structure_routes = require("./routes/structure/structure");
const stock_routes = require("./routes/stock/stock")
const auth_routes = require("./routes/auth/signup")
const login_auth_routes = require("./routes/auth/login")

//middleware logger config
const morgan_config = morgan(
    ":method :url :status :res[content-length] - :response-time ms"
);

const app = express();
const port = 5000;

// Enable CORS AND LOGGER MIDDLEWARE
app.use(cors());
app.use(morgan_config);
app.use(express.json())

// To serve static images in my upload folder : 
// console.log(__dirname+'/uploads')
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
// Routes
app.use("/api/structure", structure_routes);
app.use("/api/stock", stock_routes)
app.use("/api/auth", auth_routes, login_auth_routes)

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
