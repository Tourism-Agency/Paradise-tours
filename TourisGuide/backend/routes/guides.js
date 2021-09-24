var express = require('express');
var router = express.Router();
const guides = require("../controllers/guides.controller");

  // Create a new Booking
  router.post("/", guides.create);

  // Retrieve all guides
  router.get("/", guides.findAll);

  // Retrieve a single user with userId
  router.get("/:guideId", guides.findOne);

  router.get("/available", guides.findDates);

  // Update a Customer with bookingId
  router.put("/:guideId", guides.update);

  // Delete a Customer with bookingId
  router.delete("/:guideId", guides.delete);

  // Create a new Customer
  router.delete("/", guides.deleteAll);

module.exports = router;
