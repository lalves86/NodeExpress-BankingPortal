const path = require("path");
const express = require("express");
const accountRoutes = require("./routes/accounts.js");
const servicesRoutes = require("./routes/services.js");

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.render("index", { title: "Account Summary", accounts })
);

app.use("/account", accountRoutes);

app.get("/profile", (req, res) => res.render("profile", { user: users[0] }));

app.use("/services", servicesRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
