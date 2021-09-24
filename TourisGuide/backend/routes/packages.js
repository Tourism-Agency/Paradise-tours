var express = require('express');
var router = express.Router();
const packages = require("../controllers/packages.controller");

  // Create a new Booking
  router.post("/", packages.create);

  // Retrieve all packages
  router.get("/", packages.findAll);

  // Retrieve a single Booking with BookingId
  router.get("/:packageId", packages.findOne);

  // Retrieve a single Booking with BookingId
  router.get("/hotel/:packageId", packages.findHotels);

  // Update a Customer with bookingId
  router.get("/location/:packageId", packages.findLocations);

  // Retrieve a single Booking with BookingId
  router.get("/transport/:packageId", packages.findTransports);

  // Delete a Customer with bookingId
  router.delete("/:packageId", packages.delete);

  // Create a new Customer
  router.delete("/", packages.deleteAll);

module.exports = router;
