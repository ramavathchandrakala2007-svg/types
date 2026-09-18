const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Session middleware
app.use(
    session({
        secret: "student-secret",
        resave: false,
        saveUninitialized: false
    })
);

// Login page
app.get("/", (req, res) => {
    res.render("login");
});

// Student Login
app.post("/login", (req, res) => {
    const { rollno, password } = req.body;

    if (rollno === "101" && password === "student123") {

        // Store roll number in cookie
        res.cookie("rollno", rollno);

        // Store student information in session
        req.session.student = rollno;

        res.redirect("/dashboard");

    } else {
        res.send("Invalid Roll Number or Password");
    }
});

// Private Dashboard
app.get("/dashboard", (req, res) => {

    // Check whether student is logged in
    if (!req.session.student) {
        return res.send("Access Denied! Please login first.");
    }

    // Read roll number from cookie
    const rollno = req.cookies.rollno;

    res.render("dashboard", {
        rollno: rollno
    });
});

// Logout
app.get("/logout", (req, res) => {

    // Destroy session
    req.session.destroy();

    // Remove cookie
    res.clearCookie("rollno");

    res.redirect("/");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
