const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require("dotenv");
dotenv.config();
//Routes
// app.use("/users", require("./routes/usersRoutes"));
// app.use("/players", require("./routes/playerRoutes"));
// app.use("/clubs", require("./routes/clubRoutes"));
app.use("/create_post",require('./routes/create_post'));

const constant = require("./config/constant");
const port = process.env.PORT || constant.PORT;
app.listen(port, console.log("app is running " + constant.PORT));

// get daata bye user select by day
// app.get("./player/:email",function(req,res){
//     AbortController.findPlayerByemail(req,res);
// })
