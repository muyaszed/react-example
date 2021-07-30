const express = require("express");
const app = express();

const port = 1337;

const activities = [
  {
    id: 1,
    name: "Zorbing",
    description:
      "Have a go at Zorbing. Adult supervision required at all times for this activity. There is no minumim height but there is a maximum age of 13 years. You are booking  a 5 minute session only. Zorbs will not run during inclement weather.",
    isOpen: false,
    type: "session",
    image: "https://picsum.photos/400/300",
  },
  {
    id: 2,
    name: "High Ropes",
    description:
      "Explore the 70 metre long sky trail which sits 3.5m above the ground. Navigate wobbly bridges, daring crossings and skateboards. To finish you’ll have to leap off a 40m zipline! Please note there is a minimum height requirement of 1.3m on this activity.Explore the 70 metre long sky trail which sits 3.5m above the ground. Navigate wobbly bridges, daring crossings and skateboards. To finish you’ll have to leap off a 40m zipline! Please note there is a minimum height requirement of 1.3m on this activity.",
    isOpen: false,
    type: "session",
    image: "https://picsum.photos/400/300",
  },
  {
    id: 3,
    name: "Play Barn",
    description:
      "Book your session in the play barn. Please book your 45 minute session in the play barn according to the coloured wristband you were allocated on arrival.",
    isOpen: false,
    type: "session",
    image: "https://picsum.photos/400/300",
  },
  {
    id: 4,
    name: "Legoland",
    description: "Tasty food!",
    isOpen: false,
    type: "restaurant",
    image: "https://picsum.photos/400/300",
  },
];

app.use(function(__, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/activities", (_, res) => {
  res.json(activities);
});

app.listen(port, () =>
  console.log(`Cloudline front end test listening on ${port}!`)
);
