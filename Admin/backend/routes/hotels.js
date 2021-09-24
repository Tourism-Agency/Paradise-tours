var express = require('express');
var router = express.Router();
const hotels = require("../controllers/hotels.controller");

  // Create a new Booking
  router.post("/", hotels.create);

  // Retrieve all hotels
  router.get("/", hotels.findAll);

  // Retrieve all hotels bu guideId
  router.get("/guide/:guideId", hotels.findBooking);

  // Retrieve a single Booking with BookingId
  router.get("/:bookingId", hotels.findOne);

  // Update a Customer with bookingId
  router.put("/:messageId", hotels.update);

  // Delete a Customer with bookingId
  router.delete("/:bookingId", hotels.delete);

  // Create a new Customer
  router.delete("/", hotels.deleteAll);

module.exports = router;
