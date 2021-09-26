const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

//middleware

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
})
);
app.use(express.json());//req.body

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);

//routes

//app.use("/auth", require("./routes/jwtAuth"));

//app.use("/dashboard", require("./routes/dashboard"));

require("./routes/users_crud")(app);

require('./routes/newAuth')(app); //for role base authentication

require('./routes/packages_crud')(app);

require('./routes/booking')(app);

require('./routes/feedback')(app);

require('./routes/request')(app);

require('./routes/favorites')(app);

//require('./routes/transport_owner_all_cruds')(app); // for transport owner

require('./routes/hotel_owner_all_cruds')(app); // for transport owner

//require('./routes/webScraping');

app.listen(5000, () => {
  console.log(`Server is starting on port 5000`);
});