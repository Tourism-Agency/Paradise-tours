var express = require('express');
var router = express.Router();
const messages = require("../controllers/messages.controller");

  // Create a new Booking
  router.post("/", messages.create);

  // Retrieve all messages
  router.get("/", messages.findAll);

  // Retrieve all messages bu guideId
  router.get("/guide", messages.findMessages);

  // Retrieve a single Booking with BookingId
  router.get("/:bookingId", messages.findOne);

  // Update a Customer with bookingId
  router.put("/:messageId", messages.update);

  // Delete a Customer with bookingId
  router.delete("/:messageId", messages.delete);

  // Create a new Customer
  router.delete("/", messages.deleteAll);

module.exports = router;
